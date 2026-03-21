'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  className = '',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onTouchMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX);
    const onEnd = () => setIsDragging(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchend', onEnd);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[16/9] overflow-hidden rounded-2xl select-none cursor-ew-resize shadow-card ${className}`}
      onMouseDown={(e) => { setIsDragging(true); updatePosition(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); updatePosition(e.touches[0].clientX); }}
    >
      {/* "After" layer — full width */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 text-xs font-medium tracking-widest uppercase">After Photo</span>
        </div>
      </div>

      {/* "Before" layer — clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-xs font-medium tracking-widest uppercase">Before Photo</span>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-elevated flex items-center justify-center">
          <ChevronLeft className="w-3.5 h-3.5 text-slate-700 -mr-0.5" />
          <ChevronRight className="w-3.5 h-3.5 text-slate-700 -ml-0.5" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-slate-900/60 px-2.5 py-1 rounded tracking-wider z-10">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 text-[10px] font-bold text-white bg-brand-700/80 px-2.5 py-1 rounded tracking-wider z-10">
        {afterLabel}
      </span>
    </div>
  );
}
