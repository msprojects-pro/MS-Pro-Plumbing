import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Thermometer, 
  ShieldCheck, 
  Wrench, 
  ShowerHead, 
  Droplet, 
  Layers, 
  Search, 
  ArrowRight, 
  X, 
  Phone,
  CheckCircle
} from 'lucide-react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuote: () => void;
}

// Icon mapper for dynamic rendering
const iconMap: { [key: string]: any } = {
  Flame: Flame,
  Thermometer: Thermometer,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
  ShowerHead: ShowerHead,
  Droplet: Droplet,
  Tv2: Layers, // Radiator uses Layers
  Search: Search,
};

export default function Services({ onOpenQuote }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-1.5 text-brand-blue mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Our Professional Expertise
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Reliable Services Crafted For <br />
            <span className="text-brand-blue">Total Comfort & Safety</span>
          </h2>
          <p className="mt-4 text-base text-brand-gray font-light">
            We cover everything from minor repairs and landlord compliance inspections to comprehensive system design and high-efficiency appliance upgrades. All work is executed by certified professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-blue/30 hover:shadow-md cursor-pointer"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                
                <div>
                  {/* Icon Block */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-brand-gray leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-brand-blue group-hover:translate-x-1.5 transition-transform duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA box */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-brand-blue/90 p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-bold tracking-tight">Need urgent plumbing assistance or a new boiler quote?</h3>
            <p className="mt-2 text-sm text-slate-300 font-light">
              We offer free diagnostic walk-throughs and transparent, fixed-price estimations. Get in touch with our friendly UK experts now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenQuote}
              className="rounded-xl bg-brand-blue hover:bg-opacity-95 text-white px-6 py-3.5 font-bold shadow-md text-center transition"
            >
              Request Free Estimate
            </button>
            <a
              href="tel:07459442442"
              className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3.5 font-bold text-white text-center hover:bg-white hover:text-slate-950 transition"
            >
              Call 07459 442 442
            </a>
          </div>
        </div>
      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {selectedService && (
          <div id="service-details-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* Header block with icon accent */}
              <div className="bg-brand-blue px-6 py-5 text-white flex items-center space-x-3.5">
                <button
                  id="close-service-btn"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 rounded-full bg-white/10 p-1.5 text-white hover:bg-white/20 transition"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                  {(() => {
                    const SelectedIcon = iconMap[selectedService.iconName] || Wrench;
                    return <SelectedIcon className="h-5.5 w-5.5" />;
                  })()}
                </div>
                <div>
                  <span className="text-2xs font-bold uppercase tracking-widest text-blue-100">Our Services</span>
                  <h3 className="font-display text-xl font-bold leading-tight">{selectedService.title}</h3>
                </div>
              </div>

              {/* Service details content */}
              <div className="p-6 space-y-4">
                <p className="text-slate-700 leading-relaxed text-sm">
                  {selectedService.longDescription || selectedService.description}
                </p>

                <div className="h-px bg-slate-100" />

                {/* Why choose us for this */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">What We Provide:</h4>
                  <div className="grid grid-cols-1 gap-2 text-xs text-slate-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>Certified and Gas Safe compliant engineers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>High-quality, durable fittings and copper alignments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-blue" />
                      <span>Thorough system testing and clean-up after service</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onOpenQuote();
                    }}
                    className="rounded-xl bg-brand-blue py-3 font-semibold text-white shadow-md hover:bg-opacity-95 text-center text-sm transition"
                  >
                    Request Quote
                  </button>
                  <a
                    href="tel:07459442442"
                    className="rounded-xl border border-slate-200 bg-white py-3 font-bold text-slate-800 text-center text-sm hover:bg-slate-50 transition flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4 text-brand-blue" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
