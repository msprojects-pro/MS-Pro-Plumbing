import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { value: 'all', label: 'All Projects' },
    { value: 'boiler', label: 'Boiler Installations' },
    { value: 'heating', label: 'Heating Systems' },
    { value: 'bathroom', label: 'Bathroom Plumbing' },
    { value: 'plumbing', label: 'General Plumbing' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = galleryData.findIndex(g => g.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? galleryData.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === galleryData.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 rounded-full bg-slate-100 px-4 py-1.5 text-slate-800 mb-4">
              <Sparkles className="h-4 w-4 text-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-wider">Our Showcase</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Completed Projects & <br />
              <span className="text-brand-blue">Premium Workmanship</span>
            </h2>
            <p className="mt-3 text-sm text-brand-gray font-light">
              Explore our portfolio of completed premium residential projects. Every copper pipe joint, boiler setup, and bathroom fitting represents professional British trade standards.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                  activeFilter === tab.value
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm aspect-4/3"
              >
                {/* Project Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />

                {/* Hover Actions & Details */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
                  <div className="flex justify-end">
                    <span className="rounded-full bg-white/15 backdrop-blur-sm p-2 text-white">
                      <Eye className="h-5 w-5" />
                    </span>
                  </div>

                  <div>
                    <span className="text-3xs uppercase tracking-widest font-semibold text-brand-blue bg-blue-50/15 backdrop-blur-xs px-2.5 py-1 rounded-full inline-block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div id="gallery-lightbox" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
            <button
              id="close-lightbox-btn"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-all z-20"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Nav */}
            <button
              id="prev-lightbox-btn"
              onClick={handlePrev}
              className="absolute left-4 md:left-8 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Content Area */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden max-h-[70vh] border border-white/10 shadow-2xl bg-black">
                <img
                  src={galleryData[lightboxIndex].imageUrl}
                  alt={galleryData[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              {/* Text Info */}
              <div className="text-center mt-6 max-w-2xl text-white">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-blue bg-blue-50/10 px-3 py-1 rounded-full inline-block mb-2">
                  {galleryData[lightboxIndex].category}
                </span>
                <h4 className="font-display text-xl md:text-2xl font-bold">
                  {galleryData[lightboxIndex].title}
                </h4>
                <p className="text-sm text-slate-300 mt-2 font-light">
                  {galleryData[lightboxIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Right Nav */}
            <button
              id="next-lightbox-btn"
              onClick={handleNext}
              className="absolute right-4 md:right-8 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-all z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
