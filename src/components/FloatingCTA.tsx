import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div id="floating-cta-container" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
          {/* WhatsApp Direct Chat */}
          <motion.a
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ type: 'spring', delay: 0.1 }}
            href="https://wa.me/447459442442"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 hover:scale-105 transition-all duration-200"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6 fill-white text-emerald-500" />
          </motion.a>

          {/* Quick Call Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ type: 'spring' }}
            href="tel:07459442442"
            className="relative flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white shadow-lg hover:bg-opacity-95 hover:scale-105 transition-all duration-200"
            title="Call MS Pro"
          >
            {/* Pulsing ring around phone call */}
            <span className="absolute inset-0 rounded-full bg-brand-blue/30 animate-ping" />
            <Phone className="h-5 w-5 relative z-10" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
