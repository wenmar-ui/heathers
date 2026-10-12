import React, { useState } from 'react';
import { KEYNOTE_TOPICS, FAQ_ITEMS } from '../data/content';
import { BookingFormData } from '../types';
import { CheckCircle2, Send, ChevronDown, ChevronUp, FileText, PhoneCall, Mail } from 'lucide-react';

interface BookingSectionProps {
  initialTopic?: string;
  onOpenSpeakerKit: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialTopic,
  onOpenSpeakerKit,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    eventDate: '',
    eventLocation: '',
    eventType: 'in-person',
    audienceSize: '250 - 1,000 Attendees',
    selectedTopic: initialTopic || KEYNOTE_TOPICS[0].title,
    budgetRange: '$35,000 - $50,000',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] border-t border-[rgba(217,217,217,0.7)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-white border border-[rgba(217,217,217,0.7)] rounded-sm p-6 sm:p-10 shadow-xs">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.20em] text-[#E9202E] font-body block mb-2">
                Keynote Availability & Booking
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-serif-display font-normal text-[#1A1A1A] tracking-tight leading-tight">
                Bring Heather Monahan to Your Stage.
              </h2>
              <p className="text-xs sm:text-sm text-[#4D4D4D] mt-2 font-normal font-body leading-relaxed">
                Fill out the event details below. Heather's speaking management team will review calendar availability and respond within 24 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 sm:p-10 rounded-sm bg-[#F8EEF0] border border-[rgba(232,138,144,0.4)] text-center animate-in fade-in">
                <CheckCircle2 className="w-14 h-14 text-[#E9202E] mx-auto mb-4" />
                <h3 className="text-2xl font-serif-display font-medium text-[#1A1A1A] mb-2">
                  Keynote Inquiry Received!
                </h3>
                <p className="text-sm text-[#4D4D4D] font-normal max-w-md mx-auto mb-6 font-body leading-relaxed">
                  Thank you, <strong className="text-[#1A1A1A]">{formData.fullName}</strong>. Heather’s management team is reviewing your date ({formData.eventDate || 'TBD'}) for <strong className="text-[#E9202E]">{formData.organization}</strong>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={onOpenSpeakerKit}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FAFAFA] text-[#1A1A1A] border border-[rgba(217,217,217,0.8)] rounded-sm text-xs font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer font-body shadow-xs"
                  >
                    <FileText className="w-4 h-4 text-[#E9202E]" />
                    <span>Download Speaker One-Sheet</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#4D4D4D] hover:text-[#1A1A1A] underline underline-offset-4 font-body cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Enterprises"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Target Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Las Vegas, NV or Virtual"
                      value={formData.eventLocation}
                      onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Event Format
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    >
                      <option value="in-person">In-Person Keynote</option>
                      <option value="virtual">Virtual Live Broadcast</option>
                      <option value="hybrid">Executive Masterclass / Retreat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                      Expected Audience Size
                    </label>
                    <select
                      value={formData.audienceSize}
                      onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                    >
                      <option>Under 250 Attendees</option>
                      <option>250 - 1,000 Attendees</option>
                      <option>1,000 - 5,000 Attendees</option>
                      <option>5,000+ Arena Audience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                    Desired Keynote Topic
                  </label>
                  <select
                    value={formData.selectedTopic}
                    onChange={(e) => setFormData({ ...formData, selectedTopic: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                  >
                    {KEYNOTE_TOPICS.map((topic) => (
                      <option key={topic.id} value={topic.title}>
                        {topic.title}
                      </option>
                    ))}
                    <option value="Custom Executive Topic / Moderated Panel">
                      Custom Executive Topic / Moderated Panel
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                    Keynote Speaker Budget Tier
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors"
                  >
                    <option>$25,000 - $35,000</option>
                    <option>$35,000 - $50,000</option>
                    <option>$50,000 - $75,000</option>
                    <option>$75,000+ (Includes Bulk Books + VIP Meet & Greet)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#1A1A1A] font-semibold mb-1.5">
                    Event Details & Objectives
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the conference theme, audience demographics, and what outcome you want attendees to walk away with..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold uppercase tracking-[0.08em] text-xs rounded-sm transition-all shadow-xs hover:shadow-sm active:scale-99 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Keynote Availability Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Representation Contact & Meeting Planner FAQ */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-sm bg-white border border-[rgba(217,217,217,0.7)] shadow-xs">
              <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A] mb-2">
                Speaker Bureau & Agent Inquiries
              </h3>
              <p className="text-xs text-[#4D4D4D] leading-[1.7] font-normal mb-5 font-body">
                Heather Monahan works seamlessly with all accredited domestic and international speakers bureaus. For urgent date holds or agency inquiries:
              </p>
              <div className="space-y-2.5 text-xs font-body">
                <div className="flex items-center gap-2.5 text-[#1A1A1A]">
                  <Mail className="w-3.5 h-3.5 text-[#E9202E]" />
                  <span>speaking@heathermonahan.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#1A1A1A]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#E9202E]" />
                  <span>Executive Office: (305) 555-0199</span>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-[rgba(217,217,217,0.6)]">
                <button
                  onClick={onOpenSpeakerKit}
                  className="w-full py-2.5 bg-[#FAFAFA] hover:bg-[#F8EEF0] border border-[rgba(217,217,217,0.8)] rounded-sm text-xs font-semibold uppercase tracking-[0.08em] text-[#1A1A1A] hover:text-[#E9202E] transition-colors flex items-center justify-center gap-2 cursor-pointer font-body"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E9202E]" />
                  <span>Download Media Kit & A/V Rider</span>
                </button>
              </div>
            </div>

            {/* Meeting Planner FAQs Accordion */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.16em] text-[#4D4D4D] font-semibold mb-2 font-body">
                Frequently Asked Questions:
              </h3>
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-sm border border-[rgba(217,217,217,0.7)] bg-white overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between text-xs sm:text-sm font-medium text-[#1A1A1A] hover:text-[#E9202E] transition-colors cursor-pointer font-body"
                    >
                      <span className="pr-4">{item.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#E9202E] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#4D4D4D] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-[#4D4D4D] font-normal leading-[1.7] border-t border-[rgba(217,217,217,0.5)] pt-3 font-body">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
