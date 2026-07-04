import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer-section" className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-white font-display font-extrabold text-xs tracking-tight">
                MS
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white uppercase">
                MS PRO PLUMBING
              </span>
            </div>
            <p className="text-xs leading-relaxed font-light">
              Providing high-quality workmanship, honest pricing, and dependable service across Greater Manchester and the surrounding UK areas. From repairs to full installations.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-md bg-slate-900 px-2.5 py-1 text-3xs font-semibold text-brand-blue uppercase tracking-wider">
                Gas Safe Registered
              </span>
              <span className="rounded-md bg-slate-900 px-2.5 py-1 text-3xs font-semibold text-brand-blue uppercase tracking-wider">
                Fully Insured
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Completed Work', href: '#gallery' },
                { label: 'Client Testimonials', href: '#testimonials' },
                { label: 'Get in Touch', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Shortlist */}
          <div>
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-xs">
              <li>Boiler Installations & Services</li>
              <li>Central Heating & Power Flushing</li>
              <li>Gas Safety Certifications (CP12)</li>
              <li>Emergency Plumbs & Burst Pipes</li>
              <li>Bathroom Installations & Taps</li>
              <li>Leak Detection & Maintenance</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Direct Enquiries</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-brand-blue" />
                <a href="tel:07459442442" className="text-white hover:underline font-semibold">
                  07459 442 442
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-brand-blue" />
                <span>info@msproplumbing.co.uk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                <span>Greater Manchester & Cheshire region, United Kingdom</span>
              </li>
            </ul>
            <div className="border-t border-slate-900 pt-3">
              <h4 className="text-3xs font-semibold uppercase tracking-wider text-slate-500">Working Hours:</h4>
              <p className="text-xs text-slate-300 mt-1">Mon - Sun: 24/7 (Emergency Callouts)</p>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs font-light text-slate-500">
            &copy; {currentYear} MS Pro Plumbing & Heating. All rights reserved. Registered in the United Kingdom.
          </p>

          <div className="flex items-center space-x-6 text-xs font-light">
            <span>Gas Safe ID: 624519 (For Demo)</span>
            <a
              href="#"
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
