'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const projects = [
  { id: 1, title: 'Roof Installation', location: 'Lexington, NC', category: 'Roofing' },
  { id: 2, title: 'Complete Roof Replacement', location: 'Greensboro, NC', category: 'Roofing' },
  { id: 3, title: 'Storm Damage Repair', location: 'Winston-Salem, NC', category: 'Roofing' },
  { id: 4, title: 'Shingle Roof Installation', location: 'High Point, NC', category: 'Roofing' },
  { id: 5, title: 'Kitchen Renovation', location: 'Lexington, NC', category: 'Renovation' },
  { id: 6, title: 'Bathroom Remodel', location: 'Thomasville, NC', category: 'Renovation' },
  { id: 7, title: 'Roof Replacement', location: 'Kernersville, NC', category: 'Roofing' },
  { id: 8, title: 'Home Repair Project', location: 'Clemmons, NC', category: 'Home Repair' },
  { id: 9, title: 'Residential Roofing', location: 'Lexington, NC', category: 'Roofing' },
];

type Project = (typeof projects)[number];

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<Project | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setLightbox(project)}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                <div className="relative aspect-[4/3] image-placeholder-premium">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-xs font-medium tracking-widest uppercase">Photo Coming Soon</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                  <span className="inline-block px-2 py-0.5 text-xs font-medium bg-accent-red text-white rounded mb-1">
                    {project.category}
                  </span>
                  <p className="text-white text-sm font-semibold">{project.title}</p>
                  <p className="text-white/70 text-xs">{project.location}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-elevated animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] image-placeholder-premium">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 text-xs font-medium tracking-widest uppercase">Photo Coming Soon</span>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-accent-red text-white rounded mb-2">
                {lightbox.category}
              </span>
              <h3 className="text-xl font-display font-semibold text-slate-900">{lightbox.title}</h3>
              <p className="text-slate-500 text-sm mt-1">{lightbox.location}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
