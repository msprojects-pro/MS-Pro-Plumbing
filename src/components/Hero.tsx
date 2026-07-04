import { motion } from 'motion/react';
import { Phone, Calendar, ShieldCheck, Award, Star } from 'lucide-react';

const heroBgImage = "/images/hero_boiler_plumbing.jpg";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image with custom overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Premium Boiler & Plumbing Installation"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-40 scale-105"
        />
        {/* Dynamic Multi-layered overlay for high readability & rich colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-brand-blue/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 md:space-y-8"
            >
              {/* Trust Badge / Tagline pill */}
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 rounded-full bg-brand-blue/20 border border-brand-blue/40 px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                  Gas Safe Registered • UK Certified Plumbing & Heating
                </p>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]"
              >
                Reliable Plumbing, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">
                  Heating & Gas Services
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base text-slate-300 md:text-xl leading-relaxed font-light"
              >
                Providing high-quality workmanship, honest pricing, and dependable service across the region. From emergency boiler repairs to luxury bathroom installations — no job is too big or small.
              </motion.p>

              {/* Star Rating snippet */}
              <motion.div variants={itemVariants} className="flex items-center space-x-3 text-sm text-slate-300">
                <div className="flex text-amber-400">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                </div>
                <span>
                  <strong className="text-white">5.0 Star Rated</strong> based on 150+ local reviews
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  id="hero-quote-btn"
                  onClick={onOpenQuote}
                  className="rounded-xl bg-brand-blue px-8 py-4 text-center text-base font-bold text-white shadow-lg hover:bg-opacity-95 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request a Free Quote
                </button>
                <a
                  href="tel:07459442442"
                  className="flex items-center justify-center space-x-3 rounded-xl border-2 border-white/45 bg-white/5 backdrop-blur-sm px-8 py-4 text-center text-base font-bold text-white hover:bg-white hover:text-slate-900 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5 text-brand-blue" />
                  <span>Call 07459 442 442</span>
                </a>
              </motion.div>

              {/* Trust Features Strip */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 md:gap-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-white/5 p-2 text-brand-blue">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fully Insured</h4>
                    <p className="text-xs text-slate-400">£5M Public Liability</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-white/5 p-2 text-brand-blue">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Highly Qualified</h4>
                    <p className="text-xs text-slate-400">City & Guilds Certified</p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center space-x-3">
                  <div className="rounded-lg bg-white/5 p-2 text-brand-blue">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Transparent Quotes</h4>
                    <p className="text-xs text-slate-400">Fixed Rates, No Hidden Costs</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
