import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    projectType: 'Geospatial Intelligence',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex-1 flex flex-col justify-between w-full select-none mt-4 md:mt-0"
      id="contact-page-container"
    >
      {/* Top Header */}
      <div className="flex flex-col gap-4 max-w-4xl" id="contact-header">
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={1}
          className="text-xs sm:text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase"
          id="contact-eyebrow"
        >
          Secure Consultation
        </motion.p>

        <motion.h1
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={2}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-black leading-tight"
          id="contact-title"
        >
          Let's Map Your Next Decision
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={3}
          className="text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase text-neutral-800 leading-relaxed max-w-3xl"
          id="contact-supporting"
        >
          Invite governments, security agencies, environmental organizations, researchers, developers, and enterprises to discuss their geospatial challenges.
        </motion.p>
      </div>

      {/* Main Grid: Form Left, Perks Right */}
      <div 
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8 md:mt-10 overflow-y-auto max-h-[350px] md:max-h-[450px] pr-2 scrollbar-thin flex-1 items-start"
        id="contact-grid"
      >
        {/* Form Container */}
        <div className="md:col-span-7 bg-white/50 backdrop-blur-sm border border-neutral-200 p-5 sm:p-6 rounded-xl" id="contact-form-wrapper">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4"
                id="contact-form-element"
              >
                {error && (
                  <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-1" id="form-error">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-semibold tracking-widest uppercase text-neutral-500 mb-1 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 border border-neutral-300 rounded text-xs tracking-widest uppercase font-semibold text-black focus:outline-none focus:border-[var(--color-accent)] bg-white/70"
                      id="input-fullName"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-semibold tracking-widest uppercase text-neutral-500 mb-1 block">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full h-10 px-3 border border-neutral-300 rounded text-xs tracking-widest uppercase font-semibold text-black focus:outline-none focus:border-[var(--color-accent)] bg-white/70"
                      id="input-organization"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-semibold tracking-widest uppercase text-neutral-500 mb-1 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 border border-neutral-300 rounded text-xs tracking-widest uppercase font-semibold text-black focus:outline-none focus:border-[var(--color-accent)] bg-white/70"
                      id="input-email"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-semibold tracking-widest uppercase text-neutral-500 mb-1 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-10 px-3 border border-neutral-300 rounded text-xs tracking-widest uppercase font-semibold text-black focus:outline-none focus:border-[var(--color-accent)] bg-white/70"
                      id="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-semibold tracking-widest uppercase text-neutral-500 mb-1 block">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 border border-neutral-300 rounded text-xs tracking-widest uppercase font-semibold text-black focus:outline-none focus:border-[var(--color-accent)] bg-white/70"
                    id="input-projectType"
                  >
                    <option value="Geospatial Intelligence">Geospatial Intelligence</option>
                    <option value="GIS & Mapping">GIS & Mapping</option>
                    <option value="Satellite/Remote Sensing">Satellite/Remote Sensing</option>
                    <option value="Infrastructure & Assets">Infrastructure & Assets</option>
                    <option value="Other Solutions">Other Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-semibold tracking-widest uppercase text-neutral-500 mb-1 block">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full p-3 border border-neutral-300 rounded text-xs tracking-widest uppercase font-semibold text-black focus:outline-none focus:border-[var(--color-accent)] bg-white/70 resize-none"
                    id="input-message"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-11 bg-black hover:bg-neutral-900 text-white text-xs font-semibold tracking-widest uppercase rounded-lg transition-colors cursor-pointer"
                  id="submit-inquiry-btn"
                >
                  Send Inquiry
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
                id="contact-success-panel"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                </div>
                <h3 className="text-sm font-bold tracking-widest uppercase text-black mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-[11px] font-medium tracking-wide uppercase text-neutral-600 mb-6 leading-relaxed">
                  A geospatial technical representative will review your request and get in touch within 24 business hours.
                </p>
                <motion.button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      organization: '',
                      email: '',
                      phone: '',
                      projectType: 'Geospatial Intelligence',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 border border-neutral-300 hover:border-black text-[10px] font-semibold tracking-widest uppercase rounded text-black transition-colors"
                  id="reset-form-btn"
                >
                  New Submission
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Why Work With MoleCatch Column */}
        <div className="md:col-span-5 flex flex-col gap-5" id="why-work-with-molecatch">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-black border-b border-neutral-200 pb-2">
            Why Work With MoleCatch?
          </h2>

          <div className="flex flex-col gap-4" id="why-items-list">
            <div className="flex flex-col gap-1">
              <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                Guaranteed Precision
              </h4>
              <p className="text-[10px] sm:text-xs font-medium tracking-wide uppercase text-neutral-600 leading-relaxed">
                Government-grade accuracy specifications, stringent horizontal and vertical reference validations.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                Technical Mastery
              </h4>
              <p className="text-[10px] sm:text-xs font-medium tracking-wide uppercase text-neutral-600 leading-relaxed">
                Sovereign and enterprise-grade sensor fusion across optical, radar (SAR), LiDAR, and photogrammetric arrays.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                Resilient Delivery
              </h4>
              <p className="text-[10px] sm:text-xs font-medium tracking-wide uppercase text-neutral-600 leading-relaxed">
                Robust pipelines designed to withstand the operational demands of defense, heavy infrastructure, and scientific researchers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
