import React from 'react';
import { Star } from 'lucide-react';

export default function RatingBadge({ rating, size = 'sm' }) {
  const formatted = typeof rating === 'number' ? rating.toFixed(1) : rating;

  const sizeClasses = size === 'lg'
    ? 'px-3 py-1 text-sm font-semibold'
    : 'px-2.5 py-0.5 text-xs font-medium';

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-[#22C55E] text-white shadow-xs ${sizeClasses}`}
      title={`Rated ${formatted} out of 5 stars`}
    >
      <Star className={size === 'lg' ? 'w-3.5 h-3.5 fill-white text-white' : 'w-3 h-3 fill-white text-white'} />
      <span>{formatted}</span>
    </span>
  );
}
