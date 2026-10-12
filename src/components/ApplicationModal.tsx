import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Send, ShieldCheck } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ApplicationFormData {
  // Step 1: Tell us about you
  fullName: string;
  email: string;
  phone: string;
  socialLink: string;
  roleTitle: string;
  companyIndustry: string;

  // Step 2: Current Metrics & Challenges
  revenueType: 'Business revenue' | 'Personal compensation' | '';
  revenueRange: string;
  biggestChallenge: string;
  desiredResult: string;
  whyNow: string;

  // Step 3: Decision, Investment & Logistics
  decisionMaker: string;
  investmentRange: string;
  timeline: string;
  referralSource: string;
  additionalNotes: string;
}

const INITIAL_DATA: ApplicationFormData = {
  fullName: '',
  email: '',
  phone: '',
  socialLink: '',
  roleTitle: '',
  companyIndustry: '',
  revenueType: '',
  revenueRange: '',
  biggestChallenge: '',
  desiredResult: '',
  whyNow: '',
  decisionMaker: '',
  investmentRange: '',
  timeline: '',
  referralSource: '',
  additionalNotes: '',
};

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form on close after a brief delay
      setTimeout(() => {
        setCurrentStep(1);
        setIsSubmitted(false);
        setValidationError(null);
      }, 300);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (field: keyof ApplicationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationError) setValidationError(null);
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) return 'Please enter your Full Name.';
    if (!formData.email.trim() || !formData.email.includes('@'))
      return 'Please enter a valid Email address.';
    if (!formData.phone.trim()) return 'Please enter your Phone number.';
    if (!formData.roleTitle.trim()) return 'Please share your Role / Title.';
    if (!formData.companyIndustry.trim()) return 'Please provide your Company / Industry.';
    return null;
  };

  const validateStep2 = () => {
    if (!formData.revenueType) return 'Please specify whether numbers are business revenue or personal compensation.';
    if (!formData.revenueRange) return 'Please select your current revenue / compensation range.';
    if (!formData.biggestChallenge.trim()) return 'Please share the biggest challenge holding you back right now.';
    if (!formData.desiredResult.trim()) return 'Please specify what result you are looking to achieve.';
    if (!formData.whyNow.trim()) return 'Please share why now is the right time.';
    return null;
  };

  const validateStep3 = () => {
    if (!formData.decisionMaker) return 'Please indicate if you are the sole decision maker.';
    if (!formData.investmentRange) return 'Please select the investment range you are considering.';
    if (!formData.timeline) return 'Please select your timeline.';
    if (!formData.referralSource) return 'Please let us know how you heard about Heather.';
    return null;
  };

  const handleNext = () => {
    setValidationError(null);
    if (currentStep === 1) {
      const err = validateStep1();
      if (err) {
        setValidationError(err);
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const err = validateStep2();
      if (err) {
        setValidationError(err);
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    setValidationError(null);
    if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    const err = validateStep3();
    if (err) {
      setValidationError(err);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl xl:max-w-4xl bg-white border border-[rgba(217,217,217,0.8)] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-[rgba(217,217,217,0.7)] bg-[#FAFAFA] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E9202E] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.20em] text-[#E9202E] font-semibold font-body">
              Application for Transformation
            </span>
            <span className="hidden sm:inline-block text-[rgba(217,217,217,0.7)] font-light">|</span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-[0.14em] text-[#4D4D4D] font-medium font-body">
              {isSubmitted ? 'Complete' : `Step ${currentStep} of 3`}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#4D4D4D] hover:text-[#1A1A1A] rounded-sm hover:bg-[#F8EEF0] transition-colors cursor-pointer"
            aria-label="Close application form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Only during active form steps) */}
        {!isSubmitted && (
          <div className="w-full bg-[#F2C9CD]/40 h-1 shrink-0">
            <div
              className="bg-[#E9202E] h-1 transition-all duration-300 ease-out"
              style={{
                width: currentStep === 1 ? '33.33%' : currentStep === 2 ? '66.66%' : '100%',
              }}
            />
          </div>
        )}

        {/* Modal Content Container */}
        {isSubmitted ? (
          /* SUCCESS CONFIRMATION STATE */
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-9 space-y-7 bg-white selection:bg-[#E9202E] selection:text-white font-body text-[#4D4D4D]">
            <div className="py-10 sm:py-14 text-center max-w-xl mx-auto space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F8EEF0] border border-[#F2C9CD] text-[#E9202E] flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#E9202E] font-bold">
                  Application Received
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#1A1A1A] mt-2 tracking-tight">
                  Thank You, {formData.fullName.split(' ')[0] || 'Friend'}.
                </h3>
                <p className="text-sm text-[#4D4D4D] mt-3 leading-relaxed">
                  Your application has been delivered directly to Heather Monahan and her executive advisory team. Every single submission is personally reviewed.
                </p>
              </div>

              <div className="p-5 bg-[#FAFAFA] rounded-sm border border-[rgba(217,217,217,0.8)] text-left text-xs space-y-2.5 text-[#4D4D4D]">
                <p className="font-semibold text-[#1A1A1A] uppercase tracking-wider text-[11px]">
                  What Happens Next:
                </p>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#E9202E]">01.</span>
                  <span>We evaluate your current challenges and goals against our private coaching and advisory capacity.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#E9202E]">02.</span>
                  <span>If Heather believes she can help you close your gap, our team will reach out via email/phone within 24–48 hours to schedule a confidential conversation.</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.14em] rounded-sm transition-all cursor-pointer shadow-xs active:scale-[0.99]"
                >
                  Return to Heather Monahan
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE 3-STEP APPLICATION FORM WITH PINNED BOTTOM ACTIONS */
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0 bg-white selection:bg-[#E9202E] selection:text-white font-body text-[#4D4D4D]">
            {/* Scrollable Form Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-9 space-y-7">
              {/* Top Banner / Editorial Intro (Displayed across all steps to set context) */}
              <div className="border-b border-[#F2C9CD]/50 pb-6 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#E9202E] font-bold block">
                    Ready for your transformation?
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#1A1A1A] tracking-tight">
                    Let’s see if we’re a fit.
                  </h2>
                  <p className="text-sm sm:text-[15px] font-medium text-[#1A1A1A] leading-relaxed">
                    You don’t need to have everything figured out. But you do need to be ready for something bigger.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#4D4D4D] leading-relaxed max-w-2xl">
                  Tell us where you are, where you want to go, and what’s standing in the way. If Heather believes she can help you close that gap, we’ll invite you to a conversation.
                </p>

                {/* 3 Overview Journey Cards with Big Watermark Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {/* Card 1: Apply */}
                  <div className="relative overflow-hidden p-3.5 sm:p-4 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] shadow-2xs">
                    {/* Big Watermark Number */}
                    <span
                      className="absolute -right-1 -bottom-2.5 sm:-bottom-3 text-5xl sm:text-6xl font-serif-display font-bold text-[#E9202E]/15 select-none pointer-events-none leading-none tracking-tighter"
                      aria-hidden="true"
                    >
                      01
                    </span>
                    <div className="relative z-10 pr-6">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] font-body tracking-tight">Apply</h4>
                      <p className="text-[11px] sm:text-xs text-[#4D4D4D] mt-0.5 font-body">About 4 minutes</p>
                    </div>
                  </div>

                  {/* Card 2: We Review */}
                  <div className="relative overflow-hidden p-3.5 sm:p-4 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] shadow-2xs">
                    {/* Big Watermark Number */}
                    <span
                      className="absolute -right-1 -bottom-2.5 sm:-bottom-3 text-5xl sm:text-6xl font-serif-display font-bold text-[#E9202E]/15 select-none pointer-events-none leading-none tracking-tighter"
                      aria-hidden="true"
                    >
                      02
                    </span>
                    <div className="relative z-10 pr-6">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] font-body tracking-tight">We Review</h4>
                      <p className="text-[11px] sm:text-xs text-[#4D4D4D] mt-0.5 font-body">Every application personally reviewed</p>
                    </div>
                  </div>

                  {/* Card 3: We Connect */}
                  <div className="relative overflow-hidden p-3.5 sm:p-4 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] shadow-2xs">
                    {/* Big Watermark Number */}
                    <span
                      className="absolute -right-1 -bottom-2.5 sm:-bottom-3 text-5xl sm:text-6xl font-serif-display font-bold text-[#E9202E]/15 select-none pointer-events-none leading-none tracking-tighter"
                      aria-hidden="true"
                    >
                      03
                    </span>
                    <div className="relative z-10 pr-6">
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] font-body tracking-tight">We Connect</h4>
                      <p className="text-[11px] sm:text-xs text-[#4D4D4D] mt-0.5 font-body">If it’s a fit, we’ll invite you to a conversation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Form Steps Stepper (Below the line — only these switch on Next/Back) */}
              <div className="pt-1">
                <div className="grid grid-cols-3 gap-2 p-2 sm:p-2.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)]">
                  {/* Step 1 Indicator */}
                  <div
                    className={`flex items-center gap-2 p-2 rounded-sm transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-white border border-[#E9202E]/50 shadow-xs'
                        : currentStep > 1
                        ? 'bg-transparent text-[#E9202E]'
                        : 'bg-transparent opacity-60'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                        currentStep === 1
                          ? 'bg-[#E9202E] text-white shadow-2xs'
                          : currentStep > 1
                          ? 'bg-[#E9202E] text-white'
                          : 'bg-[#F8EEF0] text-[#4D4D4D]'
                      }`}
                    >
                      {currentStep > 1 ? '✓' : '1'}
                    </span>
                    <div className="leading-tight min-w-0">
                      <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#4D4D4D]">
                        Step 1
                      </span>
                      <span
                        className={`block text-[11px] sm:text-xs font-bold truncate ${
                          currentStep === 1 ? 'text-[#1A1A1A]' : 'text-[#4D4D4D]'
                        }`}
                      >
                        About You
                      </span>
                    </div>
                  </div>

                  {/* Step 2 Indicator */}
                  <div
                    className={`flex items-center gap-2 p-2 rounded-sm transition-all duration-300 ${
                      currentStep === 2
                        ? 'bg-white border border-[#E9202E]/50 shadow-xs'
                        : currentStep > 2
                        ? 'bg-transparent text-[#E9202E]'
                        : 'bg-transparent opacity-60'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                        currentStep === 2
                          ? 'bg-[#E9202E] text-white shadow-2xs'
                          : currentStep > 2
                          ? 'bg-[#E9202E] text-white'
                          : 'bg-[#F8EEF0] text-[#4D4D4D]'
                      }`}
                    >
                      {currentStep > 2 ? '✓' : '2'}
                    </span>
                    <div className="leading-tight min-w-0">
                      <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#4D4D4D]">
                        Step 2
                      </span>
                      <span
                        className={`block text-[11px] sm:text-xs font-bold truncate ${
                          currentStep === 2 ? 'text-[#1A1A1A]' : 'text-[#4D4D4D]'
                        }`}
                      >
                        Where You Are
                      </span>
                    </div>
                  </div>

                  {/* Step 3 Indicator */}
                  <div
                    className={`flex items-center gap-2 p-2 rounded-sm transition-all duration-300 ${
                      currentStep === 3
                        ? 'bg-white border border-[#E9202E]/50 shadow-xs'
                        : 'bg-transparent opacity-60'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                        currentStep === 3
                          ? 'bg-[#E9202E] text-white shadow-2xs'
                          : 'bg-[#F8EEF0] text-[#4D4D4D]'
                      }`}
                    >
                      3
                    </span>
                    <div className="leading-tight min-w-0">
                      <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#4D4D4D]">
                        Step 3
                      </span>
                      <span
                        className={`block text-[11px] sm:text-xs font-bold truncate ${
                          currentStep === 3 ? 'text-[#1A1A1A]' : 'text-[#4D4D4D]'
                        }`}
                      >
                        Alignment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Validation Alert */}
              {validationError && (
                <div className="p-3 bg-[#F8EEF0] border border-[#E9202E]/40 text-[#E9202E] text-xs font-medium rounded-sm flex items-center gap-2 animate-in fade-in">
                  <span className="font-bold">Notice:</span> {validationError}
                </div>
              )}

              {/* ============================================================
                  STEP 1: Tell us about you
                  ============================================================ */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border-b border-[rgba(217,217,217,0.7)] pb-3">
                    <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A]">
                      Tell us about you
                    </h3>
                    <p className="text-xs text-[#4D4D4D] mt-1 leading-relaxed">
                      Be honest and specific — the more we know going in, the more useful the conversation.
                      <span className="block mt-0.5 text-[#1A1A1A]/80 font-medium">
                        There are no perfect answers here. Clarity matters more than polish.
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Full Name <span className="text-[#E9202E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Email <span className="text-[#E9202E]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Phone <span className="text-[#E9202E]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                        required
                      />
                    </div>

                    {/* Social Link */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        LinkedIn / Instagram / Website{' '}
                        <span className="text-[#4D4D4D] font-normal normal-case">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.socialLink}
                        onChange={(e) => updateField('socialLink', e.target.value)}
                        placeholder="linkedin.com/in/username"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                      />
                    </div>

                    {/* Role / Title */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Your Role / Title <span className="text-[#E9202E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.roleTitle}
                        onChange={(e) => updateField('roleTitle', e.target.value)}
                        placeholder="e.g. VP of Sales / Founder / Managing Director"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                        required
                      />
                    </div>

                    {/* Company / Industry */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                        Company / Industry <span className="text-[#E9202E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyIndustry}
                        onChange={(e) => updateField('companyIndustry', e.target.value)}
                        placeholder="e.g. Media, Tech, Healthcare, Financial Services"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================
                  STEP 2: Metrics & Challenges
                  ============================================================ */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[rgba(217,217,217,0.7)] pb-3">
                    <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A]">
                      Where you are right now
                    </h3>
                    <p className="text-xs text-[#4D4D4D] mt-1 leading-relaxed">
                      Help Heather understand your baseline numbers and the exact bottlenecks holding your progress back.
                    </p>
                  </div>

                  {/* Revenue Type Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      Are these numbers business revenue or personal compensation? <span className="text-[#E9202E]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(['Business revenue', 'Personal compensation'] as const).map((type) => {
                        const isSelected = formData.revenueType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => updateField('revenueType', type)}
                            className={`p-3 text-left rounded-sm border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#F8EEF0] border-[#E9202E] text-[#1A1A1A] shadow-xs'
                                : 'bg-white border-[rgba(217,217,217,0.9)] text-[#4D4D4D] hover:bg-[#FAFAFA]'
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-medium">{type}</span>
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-[#E9202E] bg-[#E9202E] text-white'
                                  : 'border-[rgba(217,217,217,0.7)] bg-white'
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Revenue / Compensation Range */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      Current revenue / compensation range <span className="text-[#E9202E]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Pre-revenue / just starting',
                        'Under $100K',
                        '$100K–$500K',
                        '$500K–$1M',
                        '$1M+',
                      ].map((range) => {
                        const isSelected = formData.revenueRange === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => updateField('revenueRange', range)}
                            className={`p-2.5 text-center rounded-sm border text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#E9202E] text-white border-[#E9202E] shadow-2xs font-semibold'
                                : 'bg-white text-[#4D4D4D] border-[rgba(217,217,217,0.9)] hover:bg-[#F8EEF0] hover:text-[#1A1A1A]'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Textarea 1: Biggest challenge */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      What is the biggest challenge holding you back right now? <span className="text-[#E9202E]">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.biggestChallenge}
                      onChange={(e) => updateField('biggestChallenge', e.target.value)}
                      placeholder="e.g. Lack of executive confidence, fear of public visibility, hitting a career ceiling, or failing to close high-stakes deals..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                      required
                    />
                  </div>

                  {/* Textarea 2: Desired result */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      What result are you looking to achieve? <span className="text-[#E9202E]">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.desiredResult}
                      onChange={(e) => updateField('desiredResult', e.target.value)}
                      placeholder="e.g. Claiming my C-suite seat, landing 7-figure enterprise clients, delivering a TEDx keynote, stepping into high-authority leadership..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                      required
                    />
                  </div>

                  {/* Textarea 3: Why now */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Why is now the right time? <span className="text-[#E9202E]">*</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.whyNow}
                      onChange={(e) => updateField('whyNow', e.target.value)}
                      placeholder="e.g. I have spent years playing small and cannot afford another year of hesitation. The stakes are too high..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                      required
                    />
                  </div>
                </div>
              )}

              {/* ============================================================
                  STEP 3: Decision, Investment & Logistics
                  ============================================================ */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[rgba(217,217,217,0.7)] pb-3">
                    <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A]">
                      Alignment & Readiness
                    </h3>
                    <p className="text-xs text-[#4D4D4D] mt-1 leading-relaxed">
                      Final details to ensure our conversation is focused, productive, and aligned.
                    </p>
                  </div>

                  {/* Sole decision maker */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      Are you the sole decision maker? <span className="text-[#E9202E]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'No, the decision is mine',
                        'Yes, a spouse/partner',
                        'Yes, a business partner / employer',
                        'Other',
                      ].map((dm) => {
                        const isSelected = formData.decisionMaker === dm;
                        return (
                          <button
                            type="button"
                            key={dm}
                            onClick={() => updateField('decisionMaker', dm)}
                            className={`p-2.5 text-left rounded-sm border text-xs transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#F8EEF0] border-[#E9202E] text-[#1A1A1A] font-semibold'
                                : 'bg-white border-[rgba(217,217,217,0.9)] text-[#4D4D4D] hover:bg-[#FAFAFA]'
                            }`}
                          >
                            <span>{dm}</span>
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-[#E9202E] bg-[#E9202E] text-white'
                                  : 'border-[rgba(217,217,217,0.7)]'
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Investment range */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      What investment range are you considering? <span className="text-[#E9202E]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {['Under $5K', '$5K–$15K', '$15K–$50K', '$50K+', 'Not sure yet'].map((inv) => {
                        const isSelected = formData.investmentRange === inv;
                        return (
                          <button
                            type="button"
                            key={inv}
                            onClick={() => updateField('investmentRange', inv)}
                            className={`p-2.5 text-center rounded-sm border text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#E9202E] text-white border-[#E9202E] font-semibold shadow-2xs'
                                : 'bg-white text-[#4D4D4D] border-[rgba(217,217,217,0.9)] hover:bg-[#F8EEF0] hover:text-[#1A1A1A]'
                            }`}
                          >
                            {inv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      What is your timeline? <span className="text-[#E9202E]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Immediately', 'Within 30 days', '1–3 months', 'Just exploring'].map((time) => {
                        const isSelected = formData.timeline === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => updateField('timeline', time)}
                            className={`p-2.5 text-center rounded-sm border text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-semibold shadow-2xs'
                                : 'bg-white text-[#4D4D4D] border-[rgba(217,217,217,0.9)] hover:bg-[#F8EEF0] hover:text-[#1A1A1A]'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      How did you hear about Heather? <span className="text-[#E9202E]">*</span>
                    </label>
                    <select
                      value={formData.referralSource}
                      onChange={(e) => updateField('referralSource', e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors cursor-pointer"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Podcast: Creating Confidence">Podcast: Creating Confidence</option>
                      <option value="Keynote / Live Event">Keynote / Live Event</option>
                      <option value="Books: Confidence Creator or Overcome Your Villains">
                        Books: Confidence Creator or Overcome Your Villains
                      </option>
                      <option value="LinkedIn / Social Media">LinkedIn / Social Media</option>
                      <option value="Colleague or Friend Referral">Colleague or Friend Referral</option>
                      <option value="TEDx Talk">TEDx Talk</option>
                      <option value="Press / TV / Media (CNN, Forbes, Steve Harvey)">
                        Press / TV / Media (CNN, Forbes, Steve Harvey)
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                      Anything else you want Heather to know?{' '}
                      <span className="text-[#4D4D4D] font-normal normal-case">(optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={(e) => updateField('additionalNotes', e.target.value)}
                      placeholder="Specific circumstances, upcoming career transitions, board appointments, or pressing deadlines..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-[rgba(217,217,217,0.9)] rounded-sm bg-white focus:outline-none focus:border-[#E9202E] focus:ring-1 focus:ring-[#E9202E] transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Pinned Bottom Navigation Action Bar */}
            <div className="px-5 sm:px-8 py-3.5 sm:py-4 border-t border-[rgba(217,217,217,0.7)] bg-[#FAFAFA] shrink-0 flex items-center justify-between gap-3">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#FAFAFA] text-[#4D4D4D] hover:text-[#1A1A1A] border border-[rgba(217,217,217,0.8)] rounded-sm text-xs font-semibold uppercase tracking-[0.08em] transition-all cursor-pointer font-body shadow-2xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <span className="text-[11px] text-[#4D4D4D] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E9202E]" />
                  Confidential &amp; Private
                </span>
              )}

              <div className="flex items-center gap-3">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white rounded-sm text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer font-body shadow-xs hover:shadow-sm active:scale-[0.99]"
                  >
                    <span>Next: Step {currentStep + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-2.5 sm:py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white rounded-sm text-xs font-bold uppercase tracking-[0.14em] transition-all cursor-pointer font-body shadow-sm hover:shadow-md active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit my application</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}

        {/* Modal Bottom Copyright Sub-Bar */}
        <div className="px-5 sm:px-8 py-2.5 bg-[#FAFAFA] border-t border-[rgba(217,217,217,0.7)] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#4D4D4D] font-body shrink-0 gap-1">
          <span className="flex items-center gap-1.5 text-[#4D4D4D]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E9202E]" />
            Strictly confidential. Reviewed directly by Heather Monahan.
          </span>
          <span>© 2026 Heather Monahan. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};
