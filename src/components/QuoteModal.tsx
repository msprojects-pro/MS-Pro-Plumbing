import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, CheckCircle, Calendar, Shield, Clock } from 'lucide-react';
import { QuoteFormInput } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormInput>({
    name: '',
    phone: '',
    email: '',
    service: 'boiler',
    urgency: 'routine',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    { value: 'boiler', label: 'Boiler Installation & Repairs' },
    { value: 'heating', label: 'Central Heating Systems' },
    { value: 'gas', label: 'Gas Appliance Servicing' },
    { value: 'plumbing', label: 'General Plumbing & Emergency' },
    { value: 'bathroom', label: 'Bathroom Plumbing & Install' },
    { value: 'hotwater', label: 'Hot Water Systems' },
    { value: 'radiator', label: 'Radiator Installation & Repair' },
    { value: 'leak', label: 'Leak Detection & Maintenance' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to server/email
    setTimeout(() => {
      console.log('Quote Request Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'boiler',
      urgency: 'routine',
      message: '',
    });
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    // Reset after some time to avoid flicker during closing transition
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="quote-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl md:max-w-xl"
          >
            {/* Header background with subtle branding color */}
            <div className="bg-brand-blue px-6 py-5 text-white">
              <button
                id="close-modal-btn"
                onClick={handleClose}
                className="absolute top-4 right-4 rounded-full bg-white/10 p-1.5 text-white transition hover:bg-white/20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-display text-2xl font-bold tracking-tight">Request a Free Quote</h3>
              <p className="mt-1 text-sm text-blue-100 font-light">
                Professional workmanship, transparent pricing, and 100% dependable.
              </p>
            </div>

            {/* Content / Form area */}
            <div className="max-h-[75vh] overflow-y-auto p-6 no-scrollbar">
              {!isSuccess ? (
                <form id="quote-request-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-2 rounded-lg bg-slate-50 p-3 text-center text-xs">
                    <div className="flex flex-col items-center text-slate-600">
                      <Shield className="mb-1 h-4 w-4 text-brand-blue" />
                      <span className="font-medium text-slate-800">Fully Insured</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-600 border-x border-slate-200">
                      <Calendar className="mb-1 h-4 w-4 text-brand-blue" />
                      <span className="font-medium text-slate-800">12-Yr Warranty</span>
                    </div>
                    <div className="flex flex-col items-center text-slate-600">
                      <Clock className="mb-1 h-4 w-4 text-brand-blue" />
                      <span className="font-medium text-slate-800">Prompt Response</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="quote-name" className="text-xs font-semibold text-slate-700">Full Name *</label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      placeholder="e.g. David Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="quote-phone" className="text-xs font-semibold text-slate-700">Phone Number *</label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        placeholder="e.g. 07459 442 442"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="quote-email" className="text-xs font-semibold text-slate-700">Email Address</label>
                      <input
                        id="quote-email"
                        type="email"
                        placeholder="e.g. you@example.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label htmlFor="quote-service" className="text-xs font-semibold text-slate-700">Select Service</label>
                      <select
                        id="quote-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv.value} value={srv.value}>
                            {srv.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Urgency Level</label>
                      <div className="grid grid-cols-3 gap-1">
                        {(['routine', 'urgent', 'emergency'] as const).map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => setFormData({ ...formData, urgency: level })}
                            className={`rounded-lg py-2 text-center text-xs font-medium capitalize border transition ${
                              formData.urgency === level
                                ? level === 'emergency'
                                  ? 'bg-red-50 border-red-500 text-red-700 font-semibold ring-1 ring-red-500'
                                  : 'bg-brand-blue/10 border-brand-blue text-brand-blue font-semibold ring-1 ring-brand-blue'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="quote-message" className="text-xs font-semibold text-slate-700">Details of Your Request *</label>
                    <textarea
                      id="quote-message"
                      required
                      rows={3}
                      placeholder="Please describe what plumbing/heating work you require..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-quote-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center rounded-xl bg-brand-blue py-3 font-semibold text-white transition hover:bg-opacity-95 shadow-md disabled:bg-slate-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <svg className="h-5 w-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Details...</span>
                        </div>
                      ) : (
                        <span>Submit Quote Request</span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="rounded-full bg-emerald-50 p-4 text-emerald-500">
                    <CheckCircle className="h-16 w-16" />
                  </div>
                  <h4 className="mt-4 font-display text-2xl font-bold text-slate-800">Request Received!</h4>
                  <p className="mt-2 text-sm text-slate-600 max-w-sm">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. 
                    We have received your quote request for <span className="font-semibold text-slate-900">{
                      servicesList.find(s => s.value === formData.service)?.label
                    }</span> and we will review it immediately.
                  </p>
                  
                  {formData.urgency === 'emergency' && (
                    <div className="mt-4 rounded-xl bg-red-50 p-4 border border-red-200 text-left max-w-sm">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 mt-1.5 rounded-full bg-red-600 animate-ping" />
                        <p className="text-xs font-semibold text-red-800">
                          EMERGENCY REQUEST FLAG ACTIVE
                        </p>
                      </div>
                      <p className="mt-1 text-xs text-red-700 leading-relaxed">
                        Since your request was flagged as an emergency, we highly recommend calling us directly on <a href="tel:07459442442" className="underline font-bold">07459 442 442</a> for immediate dispatch!
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-xs text-slate-500">
                    A copy of this confirmation has been prepared for dispatch.
                  </p>

                  <button
                    id="close-success-btn"
                    onClick={handleClose}
                    className="mt-6 rounded-xl border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer with fast contact */}
            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3.5 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center">
                <Phone className="mr-1.5 h-3.5 w-3.5 text-brand-blue" />
                Direct Hotline: 07459 442 442
              </span>
              <span className="font-medium text-slate-700">Gas Safe Qualified</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
