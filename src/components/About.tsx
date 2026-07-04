import { motion } from 'motion/react';
import { Shield, Sparkles, Check, Users, Clock, Award } from 'lucide-react';

const aboutImage = "/images/bathroom_install.jpg";

export default function About() {
  const checkmarks = [
    'Gas Safe Registered Engineers (UK Safety Compliant)',
    'Up to 12-Year Boiler Warranties on Selected Models',
    '£5,000,000 Comprehensive Public Liability Insurance',
    'No Hidden Charges — Fair, Honest, and Fixed Pricing',
    'Prompt, Reliable, and Clean Workmanship Assured',
    'Emergency 24-Hour Hotlines Available Daily'
  ];

  const stats = [
    { label: 'Combined Experience', value: '15+ Yrs', icon: Award },
    { label: 'Completed Projects', value: '2.5k+', icon: Users },
    { label: 'Average Response Time', value: '45 Mins', icon: Clock },
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Text & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-slate-100 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Who We Are
              </span>
            </div>
            
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Setting the Gold Standard in <br />
              <span className="text-brand-blue">Plumbing & Heating Services</span>
            </h2>
            
            <p className="text-base text-brand-gray leading-relaxed font-light">
              At **MS Pro Plumbing & Heating**, we take immense pride in providing domestic properties across the region with honest, dependable, and highly professional workmanship. Our team is fully qualified, vetted, and dedicated to delivering a seamless experience—whether we are curing a simple pipe leak or planning a complex multi-zone central heating upgrade.
            </p>
            
            <p className="text-base text-brand-gray leading-relaxed font-light">
              We understand that inviting an engineer into your home requires trust. That is why we commit to clear timelines, itemised zero-obligation estimates, and pristine cleanup. We do not leave until your system runs safely and optimally.
            </p>

            {/* Check list */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
              {checkmarks.map((item, i) => (
                <div key={i} className="flex items-start space-x-2.5">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Img & Stats Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:pl-6"
          >
            {/* Visual Frame */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-slate-50 bg-slate-100 shadow-xl aspect-4/3">
              <img
                src={aboutImage}
                alt="MS Pro Bathroom Installation Workmanship"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              
              {/* Trust Tag */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-md border border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gray block">Verified Credentials</span>
                <span className="text-sm font-bold text-slate-900 flex items-center">
                  <Shield className="mr-1.5 h-4 w-4 text-brand-blue" />
                  Gas Safe Registered • ID Verified
                </span>
              </div>
            </div>

            {/* Stats Overlay Strip */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center shadow-sm">
                    <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="font-display text-xl font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-3xs font-semibold uppercase tracking-wider text-brand-gray mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
