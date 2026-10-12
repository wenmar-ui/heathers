import React from 'react';
import { ASSETS } from '../data/content';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenConfidenceAudit: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onOpenConfidenceAudit,
}) => {
  return (
    <section id="about" className="py-24 bg-[#F8EEF0] border-t border-[rgba(217,217,217,0.7)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait with Editorial Pull Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[rgba(217,217,217,0.8)] bg-white shadow-xs">
              <img
                src={ASSETS.heroPortrait}
                alt="Heather Monahan keynote speaker and former corporate CRO"
                className="w-full h-[490px] object-cover object-top filter brightness-[0.98]"
              />

              {/* Editorial Caption Bar */}
              <div className="p-4 bg-white border-t border-[rgba(217,217,217,0.7)]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#E9202E] font-semibold font-body">Heather Monahan</p>
                <p className="text-xs text-[#4D4D4D] font-body mt-0.5">Author, International Keynote Speaker & Entrepreneur</p>
              </div>
            </div>

            {/* Editorial Pull Quote Living in Whitespace (Rule 12: The words become the visual) */}
            <div className="mt-6 p-6 bg-white/70 backdrop-blur-xs rounded-sm border border-[rgba(232,138,144,0.4)]">
              <p className="text-lg sm:text-xl font-serif-display italic text-[#1A1A1A] leading-relaxed">
                "Confidence isn’t a trait you’re born with. It is a decision you make and a muscle you build through daily micro-courage."
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-[#E9202E] font-semibold mt-3 font-body">
                — Heather Monahan
              </p>
            </div>
          </div>

          {/* Right Column: Bio Prose & The Journey */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.20em] uppercase text-[#E9202E] mb-3 font-body">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E9202E]" />
              <span>Meet Heather Monahan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif-display font-normal text-[#1A1A1A] tracking-tight leading-tight mb-6">
              From Corporate Boardrooms to Global Arenas.
            </h2>

            <div className="space-y-4 text-base text-[#4D4D4D] font-normal leading-[1.7] font-body">
              <p>
                Heather Monahan spent over two decades navigating the highest echelons of corporate media. As the Chief Revenue Officer of a multi-billion dollar publicly traded broadcasting empire, she led high-performing commercial sales divisions, closed nine-figure enterprise partnerships, and was recognized as one of the most influential women in radio.
              </p>
              <p>
                Then, the unthinkable happened. Following a corporate restructuring and standing up for her principles, she was abruptly terminated from her C-suite seat.
              </p>
              <p>
                Instead of shrinking back, Heather chose audacity. She wrote her debut book, <em className="text-[#1A1A1A] font-serif-display italic font-medium">Confidence Creator</em>, documenting the exact mental models required to overcome workplace trauma and reclaim personal sovereignty. It quickly shot to bestseller lists, followed by her critically acclaimed second work, <em className="text-[#1A1A1A] font-serif-display italic font-medium">Overcome Your Villains</em>.
              </p>
              <p>
                Today, Heather is celebrated by <span className="text-[#1A1A1A] font-semibold">Real Leaders</span> as one of the Top 50 Keynote Speakers in the World. She keynotes worldwide for global giants like Google, Amazon, Harvard, Verizon, and MGM Resorts—teaching teams how to weaponize confidence to outperform in any economic climate.
              </p>
            </div>

            {/* Milestones Grid (White cards, thin borders) */}
            <div className="mt-8 pt-8 border-t border-[rgba(217,217,217,0.7)] grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 font-body">
              <div className="p-4 rounded-sm bg-white border border-[rgba(217,217,217,0.7)] shadow-xs">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#E9202E] font-semibold">Founder</p>
                <p className="text-sm text-[#1A1A1A] font-medium mt-1">Boss In Heels, Inc.</p>
              </div>
              <div className="p-4 rounded-sm bg-white border border-[rgba(217,217,217,0.7)] shadow-xs">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#E9202E] font-semibold">Podcast</p>
                <p className="text-sm text-[#1A1A1A] font-medium mt-1">Top 10 Business Apple</p>
              </div>
              <div className="p-4 rounded-sm bg-white border border-[rgba(217,217,217,0.7)] shadow-xs">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#E9202E] font-semibold">Ranked</p>
                <p className="text-sm text-[#1A1A1A] font-medium mt-1">Top 50 (Real Leaders)</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.08em] rounded-sm transition-all shadow-xs hover:shadow-sm active:scale-98 cursor-pointer font-body"
              >
                <span>Book Heather to Speak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onOpenConfidenceAudit}
                className="text-xs text-[#4D4D4D] hover:text-[#E9202E] font-medium underline decoration-[rgba(232,138,144,0.55)] underline-offset-4 cursor-pointer font-body py-1"
              >
                Take the 2-Minute Confidence Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
