import React from 'react';
import { Ruler, Briefcase, Sparkles } from 'lucide-react';
import { SIZE_OPTIONS } from '../data/brandedProducts';
import { useOutfit } from '../context/OutfitContext';

export default function SizeProfileBar({
  variant = 'compact',
  onSizeChange = null,
  onStyleChange = null
}) {
  const { userSizes, updateUserSize, stylePreference, setStylePreference } = useOutfit();

  const handleSizePick = (slot, value) => {
    updateUserSize(slot, value);
    if (onSizeChange) {
      onSizeChange({
        ...userSizes,
        [slot]: value
      });
    }
  };

  const handleStylePick = (nextStyle) => {
    setStylePreference(nextStyle);
    if (onStyleChange) {
      onStyleChange(nextStyle);
    }
  };

  if (variant === 'full') {
    return (
      <section
        aria-label="Occasion and exact garment sizes"
        className="bg-white border border-[#E2E4E9] rounded-2xl p-6 sm:p-7 max-w-6xl mx-auto mb-10 shadow-xs"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#E2E4E9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#1D4ED8]/20 flex items-center justify-center text-[#1D4ED8] shrink-0">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#111318]">
                Dress Code & Exact Size Intake
              </h2>
              <p className="text-xs text-[#525866]">
                Every multi-store scan checks exact availability for your Shirt/Tee, Pant, and Shoe sizes under Formal or Casual styling.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono font-semibold text-[#111318] bg-[#F8F9FA] px-3.5 py-2 rounded-lg border border-[#E2E4E9] shrink-0 tabular-nums">
            {stylePreference} · {userSizes.top} · W{userSizes.pant} · {userSizes.shoe}
          </div>
        </div>

        {/* 2 Dedicated Sections: Formal vs Casual */}
        <div className="mb-6">
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-2.5">
            1. Select Dress Code Section
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleStylePick('Casual')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                stylePreference === 'Casual'
                  ? 'border-[#1D4ED8] bg-[#EFF6FF]/60 ring-2 ring-[#1D4ED8]/15'
                  : 'border-[#E2E4E9] bg-[#F8F9FA] hover:border-[#111318]/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    stylePreference === 'Casual'
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-white text-[#525866] border border-[#E2E4E9]'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif text-base font-bold text-[#111318] block">
                    Casual Wear · T-Shirts Only
                  </span>
                  <span className="text-xs text-[#525866] block mt-0.5">
                    Crew & polo T-shirts paired with casual chinos, denim & everyday sneakers.
                  </span>
                </div>
              </div>
              <span
                className={`text-[11px] font-mono font-semibold uppercase tracking-wider shrink-0 ${
                  stylePreference === 'Casual' ? 'text-[#1D4ED8]' : 'text-[#525866]'
                }`}
              >
                {stylePreference === 'Casual' ? 'Selected' : 'Choose'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleStylePick('Formal')}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                stylePreference === 'Formal'
                  ? 'border-[#1D4ED8] bg-[#EFF6FF]/60 ring-2 ring-[#1D4ED8]/15'
                  : 'border-[#E2E4E9] bg-[#F8F9FA] hover:border-[#111318]/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    stylePreference === 'Formal'
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-white text-[#525866] border border-[#E2E4E9]'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif text-base font-bold text-[#111318] block">
                    Formal Wear · Shirts Only
                  </span>
                  <span className="text-xs text-[#525866] block mt-0.5">
                    Crisp collared formal shirts, pressed tailored trousers & leather Oxfords.
                  </span>
                </div>
              </div>
              <span
                className={`text-[11px] font-mono font-semibold uppercase tracking-wider shrink-0 ${
                  stylePreference === 'Formal' ? 'text-[#1D4ED8]' : 'text-[#525866]'
                }`}
              >
                {stylePreference === 'Formal' ? 'Selected' : 'Choose'}
              </span>
            </button>
          </div>
        </div>

        {/* 2. Clothing & Shoe Sizes */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#525866] mb-3">
            2. Enter Your Clothing & Footwear Sizes
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <span className="block text-xs font-semibold text-[#111318] mb-2">
                {stylePreference === 'Formal' ? 'Shirt Size' : 'T-Shirt Size'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {SIZE_OPTIONS.top.map((sz) => {
                  const active = userSizes.top === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => handleSizePick('top', sz)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                        active
                          ? 'bg-[#111318] text-white'
                          : 'bg-[#F8F9FA] text-[#111318]/80 border border-[#E2E4E9] hover:border-[#111318]/40'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold text-[#111318] mb-2">
                Pant Waist Size
              </span>
              <div className="grid grid-cols-3 gap-2">
                {SIZE_OPTIONS.pant.map((sz) => {
                  const active = userSizes.pant === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => handleSizePick('pant', sz)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                        active
                          ? 'bg-[#111318] text-white'
                          : 'bg-[#F8F9FA] text-[#111318]/80 border border-[#E2E4E9] hover:border-[#111318]/40'
                      }`}
                    >
                      Waist {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="block text-xs font-semibold text-[#111318] mb-2">
                Shoe Size (UK)
              </span>
              <div className="grid grid-cols-3 gap-2">
                {SIZE_OPTIONS.shoe.map((sz) => {
                  const active = userSizes.shoe === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => handleSizePick('shoe', sz)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                        active
                          ? 'bg-[#111318] text-white'
                          : 'bg-[#F8F9FA] text-[#111318]/80 border border-[#E2E4E9] hover:border-[#111318]/40'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white border border-[#E2E4E9] rounded-xl px-4 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex p-0.5 rounded-lg bg-[#F8F9FA] border border-[#E2E4E9]">
          <button
            type="button"
            onClick={() => handleStylePick('Casual')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              stylePreference === 'Casual'
                ? 'bg-[#111318] text-white'
                : 'text-[#525866] hover:text-[#111318]'
            }`}
          >
            Casual · T-Shirts
          </button>
          <button
            type="button"
            onClick={() => handleStylePick('Formal')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
              stylePreference === 'Formal'
                ? 'bg-[#111318] text-white'
                : 'text-[#525866] hover:text-[#111318]'
            }`}
          >
            Formal · Shirts
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111318]">
          <Ruler className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
          <span className="text-[#525866] font-normal hidden sm:inline">
            Live size stock checks:
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-1.5 text-xs">
          <span className="text-[#525866] font-medium">Top:</span>
          <select
            value={userSizes.top}
            onChange={(e) => handleSizePick('top', e.target.value)}
            aria-label="Select Shirt or T-Shirt size"
            className="bg-[#F8F9FA] border border-[#E2E4E9] text-[#111318] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] cursor-pointer tabular-nums"
          >
            {SIZE_OPTIONS.top.map((sz) => (
              <option key={sz} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-xs">
          <span className="text-[#525866] font-medium">Pant:</span>
          <select
            value={userSizes.pant}
            onChange={(e) => handleSizePick('pant', e.target.value)}
            aria-label="Select Pant waist size"
            className="bg-[#F8F9FA] border border-[#E2E4E9] text-[#111318] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] cursor-pointer tabular-nums"
          >
            {SIZE_OPTIONS.pant.map((sz) => (
              <option key={sz} value={sz}>
                Waist {sz}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-xs">
          <span className="text-[#525866] font-medium">Shoe:</span>
          <select
            value={userSizes.shoe}
            onChange={(e) => handleSizePick('shoe', e.target.value)}
            aria-label="Select Shoe size"
            className="bg-[#F8F9FA] border border-[#E2E4E9] text-[#111318] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] cursor-pointer tabular-nums"
          >
            {SIZE_OPTIONS.shoe.map((sz) => (
              <option key={sz} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
