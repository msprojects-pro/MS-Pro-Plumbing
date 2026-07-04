import { useState, useEffect } from 'react';
import { Menu, X, Phone, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Upper bar with fast trust cues */}
      <div className="bg-slate-900 py-1.5 px-4 text-center text-xs font-medium text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <CheckCircle2 className="mr-1 h-3.5 w-3.5 text-brand-blue" />
              Gas Safe Registered
            </span>
            <span className="hidden sm:flex items-center border-l border-slate-700 pl-4">
              <CheckCircle2 className="mr-1 h-3.5 w-3.5 text-brand-blue" />
              Fully Qualified & Insured
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span>24/7 Domestic Enquiries:</span>
            <a href="tel:07459442442" className="font-semibold text-white hover:text-brand-blue transition">
              07459 442 442
            </a>
          </div>
        </div>
      </div>

      <header
        id="main-navigation"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-md backdrop-blur-md py-2.5'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo Brand Block */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative h-11 w-11 flex items-center justify-center rounded-full border-2 border-brand-blue bg-slate-900 text-white font-display font-extrabold text-sm tracking-tight shadow-sm transition group-hover:scale-105">
              MS
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold leading-tight text-slate-900 tracking-tight sm:text-xl">
                MS PRO <span className="text-brand-blue">Plumbing</span>
              </span>
              <span className="text-2xs font-semibold uppercase tracking-widest text-brand-gray leading-none">
                & HEATING SERVICES
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:07459442442"
              className="flex items-center space-x-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition"
            >
              <Phone className="h-4 w-4 text-brand-blue animate-pulse" />
              <span>07459 442 442</span>
            </a>
            <button
              id="nav-quote-btn"
              onClick={onOpenQuote}
              className="rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-opacity-95 transition hover:shadow-lg"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Action */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:07459442442"
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-brand-blue bg-white shadow-sm"
              aria-label="Call MS Pro"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300">
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-base font-semibold text-slate-800 hover:text-brand-blue py-1 transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <div className="grid grid-cols-1 gap-3 pt-2">
                <a
                  href="tel:07459442442"
                  className="flex items-center justify-center space-x-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-800 shadow-sm hover:bg-slate-50 transition"
                >
                  <Phone className="h-4 w-4 text-brand-blue" />
                  <span>Call 07459 442 442</span>
                </a>
                <button
                  id="mobile-nav-quote-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                  }}
                  className="rounded-xl bg-brand-blue py-3 text-sm font-bold text-white shadow-md hover:bg-opacity-95 transition"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
