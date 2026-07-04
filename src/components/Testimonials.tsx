import { motion } from 'motion/react';
import { Star, MessageSquare, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-brand-light overflow-hidden">
      {/* Decorative subtle vector elements */}
      <div className="absolute top-12 right-12 h-64 w-64 rounded-full bg-blue-50 opacity-55 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 h-64 w-64 rounded-full bg-sky-50 opacity-55 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-1.5 text-brand-blue mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Customer Success
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted By Hundreds Of <br />
            <span className="text-brand-blue">Local UK Homeowners</span>
          </h2>
          <p className="mt-4 text-base text-brand-gray font-light">
            Don\'t just take our word for it. Read honest reviews from our valued domestic clients who appreciate clear communication, transparent quotes, and professional tradesmen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonialsData.map((testimonial, idx) => {
            // Get initials for custom avatar icon
            const initials = testimonial.name
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Quotation icon background */}
                <div className="absolute top-5 right-5 text-slate-100">
                  <MessageSquare className="h-8 w-8 fill-slate-50 text-slate-100" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex text-amber-400 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-700 leading-relaxed font-light italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Reviewer Meta */}
                <div className="flex items-center space-x-3 border-t border-slate-50 pt-4 mt-auto">
                  {/* Circle initials placeholder */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-bold text-brand-blue">
                    {initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-1.5 text-3xs font-semibold uppercase tracking-wider text-brand-gray mt-0.5">
                      <span>{testimonial.location}</span>
                      <span>•</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner / Guarantee statement */}
        <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50/50 p-6 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-slate-800 flex items-center justify-center flex-col sm:flex-row gap-2">
            <span className="rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-3xs uppercase tracking-widest text-brand-blue font-bold">100% Satisfaction Guarantee</span>
            <span>If you are not fully satisfied with our plumbing or boiler repair, we will make it right!</span>
          </p>
        </div>

      </div>
    </section>
  );
}
