import React, { useState } from 'react';
import { X, Download, FileText, Check, Mic2, Tv, Plane, Users } from 'lucide-react';
import { KEYNOTE_TOPICS, ASSETS } from '../data/content';

interface SpeakerKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const SpeakerKitModal: React.FC<SpeakerKitModalProps> = ({
  isOpen,
  onClose,
  onBookNow,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-[rgba(217,217,217,0.8)] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh] font-body">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(217,217,217,0.7)] bg-[#FAFAFA]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#E9202E]" />
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-[#E9202E] font-semibold">Official Meeting Planner Kit</span>
              <h3 className="text-sm sm:text-base font-serif-display font-medium text-[#1A1A1A]">Heather Monahan | Speaker One-Sheet & Technical Rider</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#4D4D4D] hover:text-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-white text-[#4D4D4D]">
          {/* Executive Overview Banner in Blush */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-5 rounded-sm bg-[#F8EEF0] border border-[rgba(232,138,144,0.4)]">
            <div className="sm:col-span-4 aspect-square rounded-sm overflow-hidden border border-[rgba(217,217,217,0.8)] bg-white">
              <img
                src={ASSETS.heroPortrait}
                alt="Heather Monahan speaker one sheet photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:col-span-8">
              <span className="text-xs uppercase tracking-[0.16em] text-[#E9202E] font-semibold">Keynote Speaker Profile</span>
              <h4 className="text-xl font-serif-display font-medium text-[#1A1A1A] mt-1 mb-2">Heather Monahan</h4>
              <p className="text-xs text-[#4D4D4D] font-normal leading-relaxed mb-4">
                Real Leaders Top 50 Keynote Speaker in the World. 20-Year Corporate C-Suite Media Veteran (Former Chief Revenue Officer). 2x Bestselling Author ("Confidence Creator" & "Overcome Your Villains"). Host of Top 10 Business Apple Podcast.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-[#1A1A1A] font-semibold uppercase tracking-wider">
                <span>Google</span> · <span>Amazon</span> · <span>Harvard</span> · <span>Verizon</span> · <span>MGM Resorts</span>
              </div>
            </div>
          </div>

          {/* Keynote Topics Summary */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A] font-semibold mb-3">
              Core Keynote Programs
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {KEYNOTE_TOPICS.map((topic) => (
                <div key={topic.id} className="p-3.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)] text-xs">
                  <p className="font-serif-display font-medium text-sm text-[#1A1A1A]">{topic.title}</p>
                  <p className="text-[#4D4D4D] text-[11px] mt-1 line-clamp-2 leading-relaxed">{topic.subtitle}</p>
                  <p className="text-[#E9202E] font-semibold text-[10px] mt-2 uppercase tracking-wider">Duration: {topic.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical A/V & Presentation Rider */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#1A1A1A] font-semibold mb-3">
              Technical A/V Rider & Staging Requirements
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)]">
                <Mic2 className="w-4 h-4 text-[#E9202E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Audio & Microphone</p>
                  <p className="text-[#4D4D4D] text-[11px] mt-0.5 leading-relaxed">Wireless hands-free lavalier or countryman headset. No handheld microphones for main keynote delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)]">
                <Tv className="w-4 h-4 text-[#E9202E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Screens & Visuals</p>
                  <p className="text-[#4D4D4D] text-[11px] mt-0.5 leading-relaxed">High-resolution 16:9 widescreen projection or LED wall. Confidence monitor facing the stage with slide timer.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)]">
                <Plane className="w-4 h-4 text-[#E9202E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Travel Logistics</p>
                  <p className="text-[#4D4D4D] text-[11px] mt-0.5 leading-relaxed">Departing from Miami, FL (MIA). Non-stop first-class or business class roundtrip airfare & ground transfers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)]">
                <Users className="w-4 h-4 text-[#E9202E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Pre-Event Discovery</p>
                  <p className="text-[#4D4D4D] text-[11px] mt-0.5 leading-relaxed">30-minute executive briefing call with conference chair 2–3 weeks prior to event for complete personalization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-[rgba(217,217,217,0.7)] bg-[#FAFAFA]">
          <a
            href="https://heathermonahan.com/wp-content/uploads/2024/11/Heather-Monahans-Sizzle-Sheet.pdf?_gl=1*7tiq5g*_ga*MTI5MjYyMTM3MS4xNzkxMjk0NDQ5*_ga_QW4BLG6EE3*czE3OTE0OTY5MjIkbzgkZzEkdDE3OTE0OTgxNDMkajU3JGwwJGgw"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-[#F8EEF0] text-[#1A1A1A] hover:text-[#E9202E] border border-[rgba(217,217,217,0.8)] rounded-sm text-xs font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer shadow-xs"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-[#E9202E]" />
                <span>Opening One-Sheet (PDF)...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#E9202E]" />
                <span>Download Speaker One-Sheet (PDF)</span>
              </>
            )}
          </a>

          <button
            onClick={() => {
              onClose();
              onBookNow();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#E9202E] hover:bg-[#1A1A1A] text-white rounded-sm text-xs font-semibold uppercase tracking-[0.08em] transition-colors cursor-pointer shadow-xs"
          >
            <span>Proceed to Keynote Booking</span>
          </button>
        </div>
      </div>
    </div>
  );
};
