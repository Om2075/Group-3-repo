import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import StartupGate from './components/StartupGate';
import Landing from './pages/Landing';
import CategorySelect from './pages/CategorySelect';
import ProductGrid from './pages/ProductGrid';
import OutfitRecommendation from './pages/OutfitRecommendation';
import PriceComparison from './pages/PriceComparison';
import OrderSuccess from './pages/OrderSuccess';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackBar = location.pathname !== '/';

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <StartupGate>
      <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#111318]">
        <Navbar />

        {showBackBar && (
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#E2E4E9] bg-white hover:border-[#111318]/40 hover:bg-neutral-50 text-xs font-semibold text-[#111318] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Back</span>
            </button>
          </div>
        )}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/category" element={<CategorySelect />} />
            <Route path="/items" element={<ProductGrid />} />
            <Route path="/outfit" element={<OutfitRecommendation />} />
            <Route path="/prices" element={<PriceComparison />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>

        <footer className="border-t border-[#E2E4E9] bg-white py-8 px-4 sm:px-6 lg:px-8 text-xs text-[#525866]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              &copy; {new Date().getFullYear()} Try &amp; Buy Store. Formal &amp; Casual Shoes, Shirts, T-Shirts &amp; Pants (4.0★+ Catalog).
            </p>
            <div className="flex items-center gap-3 font-medium text-[#111318]/80">
              <span>Verified Platforms:</span>
              <span>Flipkart</span>
              <span aria-hidden="true">·</span>
              <span>Myntra</span>
              <span aria-hidden="true">·</span>
              <span>Ajio</span>
              <span aria-hidden="true">·</span>
              <span>Tata CLiQ</span>
              <span aria-hidden="true">·</span>
              <span>Amazon</span>
            </div>
          </div>
        </footer>
      </div>
    </StartupGate>
  );
}
