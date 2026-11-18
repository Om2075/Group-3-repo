import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { BRANDED_PRODUCTS, LOOKBOOK_PRESETS } from '../data/brandedProducts';
import { fetchStartupScanStatus } from '../api/client';
import {
  DEFAULT_USER_SIZES,
  buildOutfit,
  getCatalogWithDiscovered,
  getProductById,
  getSelectedSizeForProduct,
  getTopTypeForStyle,
  setStartupSnapshotCache
} from '../api/engine';

const OutfitContext = createContext(null);

const DEFAULT_SHOE_ID = 104;
const VALID_CATEGORIES = new Set(['Shoe', 'Top', 'Pant']);
const VALID_STYLES = new Set(['Casual', 'Formal']);
const VALID_STRATEGIES = new Set(['lowest', 'highest', 'random']);

function readSafeJson(key, fallback) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function OutfitProvider({ children }) {
  const [startupScan, setStartupScan] = useState({
    status: 'running',
    percent: 0,
    totalProducts: BRANDED_PRODUCTS.length,
    checkedProducts: 0,
    totalListings: 0,
    checkedListings: 0,
    qualifiedCount: 0,
    excludedBelow4Count: 0,
    livePdpReachableCount: 0,
    currentProductLabel: 'Connecting to startup verification...',
    currentPlatformLabel: 'Flipkart · Myntra · Ajio · Tata CLiQ · Amazon',
    recentLogs: [],
    completedAt: null
  });
  const [startupError, setStartupError] = useState(null);
  const [snapshotRevision, setSnapshotRevision] = useState(0);

  const [stylePreference, setStylePreference] = useState(() => {
    try {
      const saved = sessionStorage.getItem('tryandbuy_stylePreference');
      return VALID_STYLES.has(saved) ? saved : 'Casual';
    } catch {
      return 'Casual';
    }
  });

  const [builderMode, setBuilderMode] = useState(() => {
    try {
      const saved = sessionStorage.getItem('tryandbuy_builderMode');
      return saved === 'custom' ? 'custom' : 'auto';
    } catch {
      return 'auto';
    }
  });

  const [combinationStrategy, setCombinationStrategy] = useState(() => {
    try {
      const saved = sessionStorage.getItem('tryandbuy_strategy');
      return VALID_STRATEGIES.has(saved) ? saved : 'lowest';
    } catch {
      return 'lowest';
    }
  });

  const [customQueue, setCustomQueue] = useState(() => {
    const saved = readSafeJson('tryandbuy_customQueue', []);
    return Array.isArray(saved) ? saved : [];
  });

  const [customStepIndex, setCustomStepIndex] = useState(() => {
    const saved = readSafeJson('tryandbuy_customStepIndex', 0);
    return typeof saved === 'number' ? saved : 0;
  });

  const [lockedItems, setLockedItems] = useState(() => {
    const saved = readSafeJson('tryandbuy_lockedItems', { shoeId: null, topId: null, pantId: null });
    return {
      shoeId: saved?.shoeId || null,
      topId: saved?.topId || null,
      pantId: saved?.pantId || null
    };
  });

  const [mainItemId, setMainItemId] = useState(() => {
    const saved = readSafeJson('tryandbuy_mainItemId', DEFAULT_SHOE_ID);
    return saved || DEFAULT_SHOE_ID;
  });

  const [category, setCategory] = useState(() => {
    try {
      const saved = sessionStorage.getItem('tryandbuy_category');
      if (saved === 'Shirt' || saved === 'T-Shirt') return 'Top';
      return VALID_CATEGORIES.has(saved) ? saved : 'Shoe';
    } catch {
      return 'Shoe';
    }
  });

  const [userSizes, setUserSizes] = useState(() => {
    const saved = readSafeJson('tryandbuy_userSizes', null);
    if (saved && saved.top && saved.pant && saved.shoe) {
      return saved;
    }
    return { ...DEFAULT_USER_SIZES };
  });

  const [recommendedOutfit, setRecommendedOutfit] = useState(() => {
    const saved = readSafeJson('tryandbuy_recommendedOutfit', null);
    if (saved && saved.shoe && saved.shirt && saved.pant) {
      return {
        ...saved,
        shoe: getProductById(saved.shoe.id) || saved.shoe,
        shirt: getProductById(saved.shirt.id) || saved.shirt,
        pant: getProductById(saved.pant.id) || saved.pant
      };
    }
    return null;
  });

  const [priceResult, setPriceResult] = useState(() =>
    readSafeJson('tryandbuy_priceResult', null)
  );

  const [singleProductId, setSingleProductId] = useState(() => {
    const saved = readSafeJson('tryandbuy_singleProductId', DEFAULT_SHOE_ID);
    return saved || DEFAULT_SHOE_ID;
  });

  const [priceMode, setPriceMode] = useState(() => {
    try {
      const saved = sessionStorage.getItem('tryandbuy_priceMode');
      return saved === 'outfit' ? 'outfit' : 'single';
    } catch {
      return 'single';
    }
  });

  // Poll startup verification once until server reports completed, then cache snapshot and stop polling
  useEffect(() => {
    let active = true;
    let timerId = null;

    const poll = async () => {
      try {
        const data = await fetchStartupScanStatus();
        if (!active) return;

        setStartupError(null);
        if (data?.status === 'completed' && data?.snapshot) {
          setStartupSnapshotCache(data.snapshot);
          setSnapshotRevision((r) => r + 1);
          setStartupScan({
            ...data,
            snapshot: null
          });

          // Refresh any cached recommendedOutfit with merged startup snapshot data
          setRecommendedOutfit((curr) => {
            if (!curr || !curr.shoe || !curr.shirt || !curr.pant) return curr;
            const refreshedShoe = getProductById(curr.shoe.id);
            const refreshedShirt = getProductById(curr.shirt.id);
            const refreshedPant = getProductById(curr.pant.id);
            if (!refreshedShoe || !refreshedShirt || !refreshedPant) {
              return null;
            }
            const avg =
              Math.round(
                (((refreshedShoe.rating || 4.5) +
                  (refreshedShirt.rating || 4.5) +
                  (refreshedPant.rating || 4.5)) /
                  3) *
                  10
              ) / 10;
            return {
              ...curr,
              shoe: refreshedShoe,
              shirt: refreshedShirt,
              pant: refreshedPant,
              avgRating: avg
            };
          });
          return;
        }

        setStartupScan((prev) => ({
          ...prev,
          ...data,
          snapshot: null
        }));
        timerId = setTimeout(poll, 400);
      } catch (err) {
        if (!active) return;
        setStartupError(err?.message || 'Waiting for verification server');
        timerId = setTimeout(poll, 750);
      }
    };

    poll();
    return () => {
      active = false;
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  const updateUserSize = useCallback((slot, value) => {
    setUserSizes((prev) => ({
      ...prev,
      [slot]: value
    }));
  }, []);

  // Option 1: Build full 3-piece outfit automatically under chosen color palette
  const startAutoCombo = useCallback(
    (presetId = LOOKBOOK_PRESETS[0].id, explicitStyle = null, explicitStrategy = null) => {
      const useStyle = explicitStyle || stylePreference;
      const useStrategy = explicitStrategy || combinationStrategy || 'lowest';
      const emptyLocks = { shoeId: null, topId: null, pantId: null };

      setBuilderMode('auto');
      setLockedItems(emptyLocks);
      setCustomQueue([]);
      setCustomStepIndex(0);
      setCombinationStrategy(useStrategy);

      const outfit = buildOutfit({
        stylePreference: useStyle,
        userSizes,
        presetId,
        strategy: useStrategy,
        lockedItems: emptyLocks
      });
      setMainItemId(outfit.shoe?.id || DEFAULT_SHOE_ID);
      setRecommendedOutfit(outfit);
      return outfit;
    },
    [stylePreference, combinationStrategy, userSizes]
  );

  const handleSetStylePreference = useCallback((nextStyle) => {
    const resolved = nextStyle === 'Formal' ? 'Formal' : 'Casual';
    setStylePreference(resolved);

    setLockedItems((prev) => {
      const next = { ...prev };
      let changed = false;
      (['shoeId', 'topId', 'pantId']).forEach((field) => {
        if (next[field]) {
          const item = getProductById(next[field]);
          const itemIsFormal = item?.style?.toLowerCase() === 'formal' || item?.type === 'Shirt';
          if (item && ((resolved === 'Formal' && !itemIsFormal) || (resolved === 'Casual' && itemIsFormal))) {
            next[field] = null;
            changed = true;
          }
        }
      });
      return changed ? next : prev;
    });
  }, []);

  // Option 2: User selects 1, 2, or 3 specific pieces in a guided queue
  const startCustomPickerFlow = useCallback(
    (selectedSlots) => {
      const normalizedSlots = ['Shoe', 'Top', 'Pant'].filter((s) =>
        selectedSlots.includes(s)
      );

      const queue = normalizedSlots.length > 0 ? normalizedSlots : ['Shoe'];
      setBuilderMode('custom');
      setCustomQueue(queue);
      setCustomStepIndex(0);
      setLockedItems({ shoeId: null, topId: null, pantId: null });
      setCategory(queue[0]);
      return `/items?type=${encodeURIComponent(queue[0])}`;
    },
    []
  );

  // Pick a piece on /items: locks it cleanly and moves to next slot or /outfit
  const lockItemAndAdvance = useCallback(
    (item) => {
      if (!item) return '/outfit';
      const slotKey =
        item.type === 'Shoe'
          ? 'shoeId'
          : item.type === 'Pant'
          ? 'pantId'
          : 'topId';

      const nextLocks =
        builderMode === 'custom'
          ? { ...lockedItems, [slotKey]: item.id }
          : { shoeId: null, topId: null, pantId: null, [slotKey]: item.id };

      setLockedItems(nextLocks);
      setMainItemId(item.id);

      if (builderMode === 'custom' && customQueue.length > 0) {
        const nextStep = customStepIndex + 1;
        if (nextStep < customQueue.length) {
          setCustomStepIndex(nextStep);
          const nextCat = customQueue[nextStep];
          setCategory(nextCat);
          return `/items?type=${encodeURIComponent(nextCat)}`;
        }
      }

      const outfit = buildOutfit({
        stylePreference,
        userSizes,
        presetId: recommendedOutfit?.presetId || null,
        strategy: combinationStrategy,
        lockedItems: nextLocks
      });
      setRecommendedOutfit(outfit);
      return '/outfit';
    },
    [
      builderMode,
      lockedItems,
      customQueue,
      customStepIndex,
      stylePreference,
      userSizes,
      recommendedOutfit?.presetId,
      combinationStrategy
    ]
  );

  const toggleSlotLock = useCallback(
    (slotKey, product) => {
      const idField = slotKey === 'shoe' ? 'shoeId' : slotKey === 'pant' ? 'pantId' : 'topId';
      setLockedItems((prev) => {
        const currentlyLocked = Boolean(prev[idField]);
        const next = {
          ...prev,
          [idField]: currentlyLocked ? null : product?.id || null
        };
        const anyLocked = Boolean(next.shoeId || next.topId || next.pantId);
        setBuilderMode(anyLocked ? 'custom' : 'auto');
        if (recommendedOutfit) {
          setRecommendedOutfit((curr) =>
            curr
              ? {
                  ...curr,
                  lockedSlots: {
                    shoe: Boolean(next.shoeId),
                    top: Boolean(next.topId),
                    pant: Boolean(next.pantId)
                  }
                }
              : curr
          );
        }
        return next;
      });
    },
    [recommendedOutfit]
  );

  // Sync to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('tryandbuy_stylePreference', stylePreference);
    } catch {
      // Ignore storage errors
    }
  }, [stylePreference]);

  useEffect(() => {
    try {
      sessionStorage.setItem('tryandbuy_builderMode', builderMode);
    } catch {
      // Ignore storage errors
    }
  }, [builderMode]);

  useEffect(() => {
    try {
      sessionStorage.setItem('tryandbuy_strategy', combinationStrategy);
    } catch {
      // Ignore storage errors
    }
  }, [combinationStrategy]);

  useEffect(() => {
    try {
      sessionStorage.setItem('tryandbuy_customQueue', JSON.stringify(customQueue));
      sessionStorage.setItem('tryandbuy_customStepIndex', JSON.stringify(customStepIndex));
      sessionStorage.setItem('tryandbuy_lockedItems', JSON.stringify(lockedItems));
    } catch {
      // Ignore storage errors
    }
  }, [customQueue, customStepIndex, lockedItems]);

  useEffect(() => {
    try {
      if (mainItemId) sessionStorage.setItem('tryandbuy_mainItemId', JSON.stringify(mainItemId));
    } catch {
      // Ignore storage quota errors
    }
  }, [mainItemId]);

  useEffect(() => {
    try {
      if (category) sessionStorage.setItem('tryandbuy_category', category);
    } catch {
      // Ignore storage quota errors
    }
  }, [category]);

  useEffect(() => {
    try {
      if (userSizes) sessionStorage.setItem('tryandbuy_userSizes', JSON.stringify(userSizes));
    } catch {
      // Ignore storage quota errors
    }
  }, [userSizes]);

  useEffect(() => {
    try {
      if (recommendedOutfit) {
        sessionStorage.setItem('tryandbuy_recommendedOutfit', JSON.stringify(recommendedOutfit));
      }
    } catch {
      // Ignore storage quota errors
    }
  }, [recommendedOutfit]);

  useEffect(() => {
    try {
      if (priceResult) sessionStorage.setItem('tryandbuy_priceResult', JSON.stringify(priceResult));
    } catch {
      // Ignore storage quota errors
    }
  }, [priceResult]);

  useEffect(() => {
    try {
      if (singleProductId) {
        sessionStorage.setItem('tryandbuy_singleProductId', JSON.stringify(singleProductId));
      }
    } catch {
      // Ignore storage quota errors
    }
  }, [singleProductId]);

  useEffect(() => {
    try {
      if (priceMode) sessionStorage.setItem('tryandbuy_priceMode', priceMode);
    } catch {
      // Ignore storage quota errors
    }
  }, [priceMode]);

  const resetFlow = () => {
    setMainItemId(DEFAULT_SHOE_ID);
    setBuilderMode('auto');
    setCustomQueue([]);
    setCustomStepIndex(0);
    setLockedItems({ shoeId: null, topId: null, pantId: null });
    setRecommendedOutfit(null);
    setPriceResult(null);
    setSingleProductId(DEFAULT_SHOE_ID);
    setPriceMode('single');
    try {
      sessionStorage.removeItem('tryandbuy_mainItemId');
      sessionStorage.removeItem('tryandbuy_recommendedOutfit');
      sessionStorage.removeItem('tryandbuy_priceResult');
      sessionStorage.removeItem('tryandbuy_singleProductId');
      sessionStorage.removeItem('tryandbuy_priceMode');
      sessionStorage.removeItem('tryandbuy_lockedItems');
      sessionStorage.removeItem('tryandbuy_customQueue');
      sessionStorage.removeItem('tryandbuy_customStepIndex');
    } catch {
      // Ignore storage errors
    }
  };

  // Recompute qualified 4.0★+ catalog when snapshot revision updates
  const allCatalogProducts = getCatalogWithDiscovered([]);
  void snapshotRevision;
  void getSelectedSizeForProduct;

  return (
    <OutfitContext.Provider
      value={{
        startupScan,
        startupError,
        snapshotRevision,
        stylePreference,
        setStylePreference: handleSetStylePreference,
        builderMode,
        setBuilderMode,
        combinationStrategy,
        setCombinationStrategy,
        customQueue,
        setCustomQueue,
        customStepIndex,
        setCustomStepIndex,
        lockedItems,
        setLockedItems,
        startAutoCombo,
        startCustomPickerFlow,
        lockItemAndAdvance,
        toggleSlotLock,
        allCatalogProducts,
        mainItemId,
        setMainItemId,
        category,
        setCategory,
        userSizes,
        setUserSizes,
        updateUserSize,
        recommendedOutfit,
        setRecommendedOutfit,
        priceResult,
        setPriceResult,
        singleProductId,
        setSingleProductId,
        priceMode,
        setPriceMode,
        resetFlow
      }}
    >
      {children}
    </OutfitContext.Provider>
  );
}

export function useOutfit() {
  const context = useContext(OutfitContext);
  if (!context) {
    throw new Error('useOutfit must be used within an OutfitProvider');
  }
  return context;
}
