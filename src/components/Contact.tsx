import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Send, 
  Navigation 
} from 'lucide-react';
import { ContactFormInput } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    phone: '',
    email: '',
    service: 'Boiler Installation',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      console.log('Contact Form Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Boiler Installation',
      message: '',
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left: Contact Info & Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full bg-blue-50 px-4 py-1.5 text-brand-blue mb-4">
                <Navigation className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Ready to Support You, <br />
                <span className="text-brand-blue">24/7 Locally</span>
              </h2>
              <p className="mt-3 text-sm text-brand-gray font-light">
                Whether you need immediate leak resolution, an annual gas safety audit, or a complete central heating quote, our local UK team is ready to dispatch.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="space-y-4">
              <a 
                href="tel:07459442442"
                className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-blue/30 transition-all duration-200"
              >
                <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-2xs font-semibold text-brand-gray uppercase tracking-wider">Phone / WhatsApp</h4>
                  <p className="text-lg font-bold text-slate-900 mt-0.5">07459 442 442</p>
                </div>
              </a>

              <div className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-2xs font-semibold text-brand-gray uppercase tracking-wider">Email Support</h4>
                  <p className="text-base font-semibold text-slate-800 mt-0.5">info@msproplumbing.co.uk</p>
                </div>
              </div>

              <div className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-2xs font-semibold text-brand-gray uppercase tracking-wider">Operational Area</h4>
                  <p className="text-base font-semibold text-slate-800 mt-0.5">Greater Manchester & Surrounding UK Counties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-lg relative overflow-hidden">
              {/* Colored ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-blue" />

              {!isSuccess ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">Send an Enquiry</h3>
                    <p className="text-xs text-brand-gray mt-1 font-light">
                      Fill out the form below and one of our qualified engineers will reach back within an hour.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Helen Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700">Phone Number *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="e.g. 07459 442 442"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. client@domain.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700">Requested Service</label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      >
                        <option value="Boiler Installation">Boiler Installation & Repairs</option>
                        <option value="Central Heating">Central Heating Systems</option>
                        <option value="Gas Appliance">Gas Appliance Servicing</option>
                        <option value="General Plumbing">General Plumbing & Repairs</option>
                        <option value="Bathroom Installation">Bathroom Plumbs & Installs</option>
                        <option value="Leak Detection">Leak Detection & Fix</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700">Detailed Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Please let us know how we can assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-xl bg-brand-blue py-3.5 font-semibold text-white shadow-md hover:bg-opacity-95 transition-all disabled:bg-slate-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting message...</span>
                      </div>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="h-4.5 w-4.5" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="rounded-full bg-emerald-50 p-4 text-emerald-500">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Enquiry Dispatched!</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-sm">
                    Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>. 
                    Your enquiry regarding <span className="font-semibold text-slate-900">{formData.service}</span> has been logged. Our technician will call you back shortly.
                  </p>

                  <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-brand-gray">
                    <Clock className="h-4 w-4 text-brand-blue" />
                    <span>Average contact delay: ~30 mins</span>
                  </div>

                  <button
                    id="contact-reset-btn"
                    onClick={resetForm}
                    className="mt-8 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
