import React from 'react';
import { Star } from 'lucide-react';

export const StarBackground = () => {
  return (
    <div className="absolute inset-0 opacity-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          <Star className="w-2 h-2 text-gray-500" />
        </div>
      ))}
    </div>
  );
};