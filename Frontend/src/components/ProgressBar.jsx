import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useOutfit } from '../context/OutfitContext';

export default function ProgressBar({ currentStep = 1 }) {
  const navigate = useNavigate();
  const { category, recommendedOutfit, builderMode, customQueue } = useOutfit();

  const steps = [
    {
      number: 1,
      code: '01',
      label: 'Sizes, Style & Mode',
      description: 'Casual/Formal, sizes & builder mode',
      path: '/category'
    },
    {
      number: 2,
      code: '02',
      label: builderMode === 'custom' && customQueue.length > 0 ? 'Choose Piece(s)' : 'Browse Pieces',
      description: 'Lock 1, 2, or 3 items in your size',
      path: `/items?type=${encodeURIComponent(
        category === 'Shirt' || category === 'T-Shirt' ? 'Top' : category || 'Shoe'
      )}`
    },
    {
      number: 3,
      code: '03',
      label: 'Coordinated Look & Prices',
      description: 'Same-palette swaps, prices & store links',
      path: recommendedOutfit ? '/outfit' : null
    }
  ];

  const handleStepClick = (step) => {
    if (!step.path) return;
    if (step.number < currentStep || (step.number === 3 && recommendedOutfit)) {
      navigate(step.path);
    }
  };

  return (
    <nav aria-label="Outfit styling progress" className="w-full max-w-5xl mx-auto mt-2 mb-8">
      <div className="bg-white border border-[#E2E4E9] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E4E9]">
        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          const isClickable =
            Boolean(step.path) &&
            (isCompleted || (step.number === 3 && Boolean(recommendedOutfit)));

          return (
            <button
              key={step.number}
              type="button"
              disabled={!isClickable && !isCurrent}
              onClick={() => isClickable && handleStepClick(step)}
              className={`relative text-left px-5 py-3.5 transition-colors flex items-center gap-3.5 ${
                isCurrent
                  ? 'bg-[#F8F9FA]'
                  : isCompleted
                  ? 'bg-white hover:bg-[#F8F9FA] cursor-pointer'
                  : 'bg-white/70 opacity-60 cursor-default'
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 left-0 right-0 h-[3px] transition-colors ${
                  isCurrent
                    ? 'bg-[#1D4ED8]'
                    : isCompleted
                    ? 'bg-[#059669]'
                    : 'bg-transparent'
                }`}
              />

              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors tabular-nums ${
                  isCompleted
                    ? 'bg-[#059669] text-white'
                    : isCurrent
                    ? 'bg-[#111318] text-white'
                    : 'bg-[#F8F9FA] text-[#525866] border border-[#E2E4E9]'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : step.code}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isCurrent || isCompleted ? 'text-[#111318]' : 'text-[#525866]'
                    }`}
                  >
                    {step.label}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#1D4ED8] shrink-0">
                      Active
                    </span>
                  )}
                  {isCompleted && (
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#059669] shrink-0">
                      Done
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#525866] truncate mt-0.5">
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
