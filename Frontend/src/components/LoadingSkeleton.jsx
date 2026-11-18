import React from 'react';

export default function LoadingSkeleton({ count = 6, variant = 'card' }) {
  if (variant === 'outfit') {
    return (
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-white rounded-2xl p-5 border border-[#E2E4E9]">
            <div className="w-full aspect-square bg-[#F3F4F6] rounded-xl mb-4" />
            <div className="h-4 bg-[#E2E4E9] rounded w-3/4 mb-2" />
            <div className="h-3 bg-[#E2E4E9] rounded w-1/2 mb-4" />
            <div className="flex justify-between items-center">
              <div className="h-6 bg-[#E2E4E9] rounded w-20" />
              <div className="h-6 bg-[#E2E4E9] rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 border border-[#E2E4E9]">
          <div className="w-full aspect-4/3 bg-[#F3F4F6] rounded-xl mb-4" />
          <div className="h-4 bg-[#E2E4E9] rounded w-4/5 mb-2" />
          <div className="h-3 bg-[#E2E4E9] rounded w-1/2 mb-4" />
          <div className="flex justify-between items-center pt-2">
            <div className="h-6 bg-[#E2E4E9] rounded w-24" />
            <div className="h-6 bg-[#E2E4E9] rounded w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
