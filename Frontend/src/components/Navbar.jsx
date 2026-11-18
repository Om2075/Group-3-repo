import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOutfit } from '../context/OutfitContext';

export default function Navbar() {
  const location = useLocation();
  const { recommendedOutfit, stylePreference, userSizes, resetFlow } = useOutfit();

  const searchType =
    location.pathname === '/items'
      ? (new URLSearchParams(location.search).get('type') || '').toLowerCase()
      : '';

  const isShoes = searchType === 'shoe';
  const isTops =
    searchType === 'top' || searchType === 'shirt' || searchType === 't-shirt' || searchType === 'tshirt';
  const isPants = searchType === 'pant';

  const navLinkClass = (active) =>
    `whitespace-nowrap shrink-0 text-sm font-medium pb-1 border-b-2 transition-colors ${
      active
        ? 'text-[#111318] border-[#1D4ED8] font-semibold'
        : 'text-[#525866] border-transparent hover:text-[#111318] hover:border-[#111318]/25'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          onClick={resetFlow}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111318] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded"
        >
          Try & Buy
        </Link>

        {/* Zone 2: Clean typographic navigation links (Shoes, Shirts & T-Shirts, Pants, Lookbook) */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary categories">
          <Link to="/items?type=Shoe" className={navLinkClass(isShoes)}>
            Shoes
          </Link>
          <Link to="/items?type=Top" className={navLinkClass(isTops)}>
            Shirts & T-Shirts
          </Link>
          <Link to="/items?type=Pant" className={navLinkClass(isPants)}>
            Pants
          </Link>
          <Link to="/#lookbook" className={navLinkClass(location.hash === '#lookbook')}>
            Lookbook
          </Link>
          {recommendedOutfit && (
            <Link to="/outfit" className={navLinkClass(location.pathname === '/outfit')}>
              Active Look
            </Link>
          )}
        </nav>

        {/* Zone 3: Active Profile Summary + Primary CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden xl:inline-block text-[11px] font-mono text-[#525866] tabular-nums">
            {stylePreference} · {userSizes.top} · W{userSizes.pant} · {userSizes.shoe}
          </span>
          <Link
            to="/category"
            className="whitespace-nowrap shrink-0 bg-[#111318] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
          >
            Start Styling
          </Link>
        </div>
      </div>

      {/* Compact Mobile Category Row */}
      <nav
        className="flex md:hidden items-center justify-center gap-4 px-3 py-2 border-t border-[#E2E4E9] text-xs font-medium bg-[#F8F9FA] overflow-x-auto"
        aria-label="Mobile categories"
      >
        <Link to="/items?type=Shoe" className={navLinkClass(isShoes)}>
          Shoes
        </Link>
        <Link to="/items?type=Top" className={navLinkClass(isTops)}>
          Shirts & T-Shirts
        </Link>
        <Link to="/items?type=Pant" className={navLinkClass(isPants)}>
          Pants
        </Link>
        <Link to="/#lookbook" className={navLinkClass(false)}>
          Lookbook
        </Link>
      </nav>
    </header>
  );
}
