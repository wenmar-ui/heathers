import React, { useState } from 'react';
import { X, ArrowRight, Download, Sparkles } from 'lucide-react';

interface VideoReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
  onViewKeynotes?: () => void;
  onOpenSpeakerKit?: () => void;
}

const SPEAKER_SHEET_URL =
  'https://heathermonahan.com/wp-content/uploads/2024/11/Heather-Monahans-Sizzle-Sheet.pdf?_gl=1*7tiq5g*_ga*MTI5MjYyMTM3MS4xNzkxMjk0NDQ5*_ga_QW4BLG6EE3*czE3OTE0OTY5MjIkbzgkZzEkdDE3OTE0OTgxNDMkajU3JGwwJGgw';

export const VideoReelModal: React.FC<VideoReelModalProps> = ({
  isOpen,
  onClose,
  onBookNow,
  onViewKeynotes,
  onOpenSpeakerKit,
}) => {
  const [twistingBtnIndex, setTwistingBtnIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const triggerIconTwist = (index: number) => {
    setTwistingBtnIndex(index);
    setTimeout(() => setTwistingBtnIndex(null), 700);
  };

  const handleViewKeynotes = () => {
    triggerIconTwist(0);
    setTimeout(() => {
      onClose();
      if (onViewKeynotes) {
        onViewKeynotes();
      } else {
        const el = document.getElementById('keynotes');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  };

  const handleBookNow = () => {
    triggerIconTwist(1);
    setTimeout(() => {
      onClose();
      onBookNow();
    }, 250);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl xl:max-w-7xl bg-white border border-[rgba(217,217,217,0.8)] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-[rgba(217,217,217,0.7)] bg-[#FAFAFA] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E9202E] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.20em] text-[#E9202E] font-semibold font-body">
              Official Keynote Reel & Profile
            </span>
            <span className="hidden sm:inline-block text-[rgba(217,217,217,0.7)] font-light">|</span>
            <h3 className="hidden sm:inline-block text-xs uppercase tracking-[0.14em] text-[#4D4D4D] font-medium font-body">
              Heather Monahan • Global Keynote Speaker
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#4D4D4D] hover:text-[#1A1A1A] rounded-sm hover:bg-[#F8EEF0] transition-colors cursor-pointer"
            aria-label="Close video card"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Split Body: Sticky Left Video, Scrollable Right Column */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0 bg-white">
          {/* LEFT COLUMN: Sticky Video Player */}
          <div className="lg:w-[54%] xl:w-[56%] shrink-0 bg-black flex flex-col justify-center relative lg:sticky lg:top-0">
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                src="https://player.vimeo.com/video/312000488?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                title="Heather Monahan Keynote Reel"
              />
            </div>
            {/* Subtle caption bar below video on desktop */}
            <div className="hidden lg:flex items-center justify-between px-4 py-2.5 bg-[#1A1A1A] text-[11px] text-white/60 font-body border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#E9202E]" />
                Live Stage Keynote Highlights
              </span>
              <span className="uppercase tracking-wider text-white/40">HD 1080p Vimeo</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Scrollable Detailed Text & Action Buttons */}
          <div className="lg:w-[46%] xl:w-[44%] flex-1 overflow-y-auto p-6 sm:p-8 space-y-5 bg-white selection:bg-[#E9202E] selection:text-white font-body text-[#4D4D4D] leading-relaxed">
            {/* Bio Title Section */}
            <div className="border-b border-[#F2C9CD]/50 pb-4">
              {/* Clickable Download Icon with Text at the top of Keynote Speaker & Bestselling Author */}
              <div className="mb-2.5">
                <a
                  href={SPEAKER_SHEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerIconTwist(2)}
                  className="group/download inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#E9202E] hover:text-[#1A1A1A] transition-colors cursor-pointer font-body select-none"
                  title="Download Heather Monahan Speaker Sheet (PDF - Opens in new window)"
                >
                  <span className={`animate-twist-icon shrink-0 inline-flex items-center justify-center text-[#E9202E] ${twistingBtnIndex === 2 ? 'is-twisting' : ''}`}>
                    <Download className="w-4 h-4" />
                  </span>
                  <span className="underline decoration-[#E9202E]/60 hover:decoration-[#1A1A1A] underline-offset-4 tracking-wide">
                    Download Speaker Sheet
                  </span>
                </a>
              </div>

              <span className="text-[11px] uppercase tracking-[0.2em] text-[#E9202E] font-bold font-body block">
                Keynote Speaker & Bestselling Author
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#1A1A1A] mt-1 tracking-tight">
                Heather Monahan
              </h4>
              <p className="text-xs text-[#4D4D4D] font-medium tracking-wide mt-1">
                Top 50 Keynote Speaker in the World • 2x Bestselling Author • Corporate Board Member
              </p>
            </div>

            {/* Paragraph 1 */}
            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              <a
                href="https://www.heathermonahan.com/heather-monahan-boss-in-heels/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#E9202E] hover:underline decoration-1 underline-offset-2"
              >
                Heather Monahan
              </a>{' '}
              is a best-selling author X2, Top 50 Keynote Speaker in the World 2022, Podcast Host of Creating Confidence, TedX speaker and has most recently been appointed to the Board of Directors of Healthlynked Corp. Having successfully climbed the corporate ladder for nearly 20 years, Heather Monahan is one of the few women to break the glass ceiling and claim her spot in the C-suite.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              As a Chief Revenue Officer in Media, Heather Monahan is a Glass Ceiling Award winner, named one of the most Influential Women in Radio in 2017, Thrive Global named her a Limit Breaking Female Founder in 2018 and in 2021 Girls Club named her the Thought Leader of the Year.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              Heather’s book{' '}
              <a
                href="https://www.amazon.com/Confidence-Creator-Heather-Monahan/dp/1544500769/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1522343000&sr=1-1&dpID=410ofs1pSeL&preST=_SY291_BO1,204,203,200_QL40_&dpSrc=detail"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#E9202E] hover:underline decoration-1 underline-offset-2"
              >
                Confidence Creator
              </a>{' '}
              shot to #1 on Amazon’s Business Biographies and Business Motivation lists the first week it debuted on Amazon. Forbes named Confidence Creator one of the 5 must have books for women in business in 2021.
            </p>

            {/* Paragraph 4 */}
            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              Heather’s show, Creating Confidence, debuted on the Top 200 shows on Apple podcast. Her guests include Sara Blakely, Gary Vaynerchuck, Ryan Serhant, Kaitlyn Bristowe among many other noteworthy celebrities and entrepreneurs.
            </p>

            {/* Paragraph 5 */}
            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              Heather was named one of the Top 40 Female Keynote Speaker in 2020 and Top 50 Keynote Speakers for 2022 by Real Leaders. Her TedX talk was promoted to TED and translated into 6 languages. Harper Collins Leadership published her new book Overcome Your Villains in November 2021.
            </p>

            {/* Paragraph 6 */}
            <p className="text-sm text-[#4D4D4D] leading-relaxed">
              Heather’s has been featured in USA Today, CNN, Forbes, Fast Company, Gary V’s Audio Experience and The Steve Harvey Show. Heather and her son Dylan reside in Miami.
            </p>

            {/* Action Buttons Container: Horizontally aligned one after another */}
            <div className="pt-5 sm:pt-6 border-t border-[rgba(217,217,217,0.7)] grid grid-cols-2 gap-3 w-full">
              {/* Button 1: View Keynote Topics */}
              <button
                onClick={handleViewKeynotes}
                className="group/btn flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-white hover:bg-[#F8EEF0] text-[#1A1A1A] hover:text-[#E9202E] font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.1em] rounded-sm border border-[rgba(217,217,217,0.8)] transition-all cursor-pointer font-body active:scale-[0.98] shadow-2xs text-center"
                title="View Keynote Topics"
              >
                <span className={`animate-twist-icon shrink-0 inline-flex items-center justify-center text-[#E9202E] ${twistingBtnIndex === 0 ? 'is-twisting' : ''}`}>
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="leading-tight">View Keynote Topics</span>
              </button>

              {/* Button 2: Book Heather To Speak */}
              <button
                onClick={handleBookNow}
                className="group/btn flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.1em] rounded-sm transition-all shadow-xs hover:shadow-sm cursor-pointer font-body active:scale-[0.98] text-center"
                title="Book Heather To Speak"
              >
                <span className="leading-tight">Book Heather To Speak</span>
                <span className={`animate-twist-icon shrink-0 inline-flex items-center justify-center ${twistingBtnIndex === 1 ? 'is-twisting' : ''}`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
