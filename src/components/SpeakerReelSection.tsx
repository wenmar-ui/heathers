import React from 'react';
import speakingStageImg from '../assets/images/speaking_stage_keynote_1791397841387.jpg';
import { ASSETS } from '../data/content';

interface SpeakerReelSectionProps {
  onOpenVideoReel?: () => void;
  onOpenBooking?: () => void;
}

export const SpeakerReelSection: React.FC<SpeakerReelSectionProps> = ({
  onOpenVideoReel,
}) => {
  return (
    <section
      id="speaker-reel"
      onClick={onOpenVideoReel}
      className={`relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] bg-[#F2C9CD] overflow-hidden select-none border-b border-[rgba(217,217,217,0.7)] ${
        onOpenVideoReel ? 'cursor-pointer' : ''
      }`}
    >
      {/* =========================================================================
          LAYER 1: #F2C9CD Background with Soft Keynote Stage Image Texture
          Fully covers the entire background in #F2C9CD while continuing the
          stage image along the slant
          ========================================================================= */}
      <div className="absolute inset-0 z-0 bg-[#F2C9CD]">
        <img
          src={speakingStageImg || ASSETS.speakingStage}
          alt="Heather Monahan keynote on stage"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_right] sm:object-center opacity-30 mix-blend-multiply transition-transform duration-700 hover:scale-[1.01]"
        />
      </div>

      {/* =========================================================================
          LAYER 2: Left Slanted Panels (Ghost Pink Bevel + Primary Red + Coral Hairline Edge)
          Matching the exact slant angles and transparent design from the Hero section
          ========================================================================= */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Left Panel 1: Underlying Ghost Pink (#F2C9CD) Bevel Layer */}
        <div className="absolute inset-0 bg-[#F2C9CD] opacity-95 transition-all duration-300 hero-slant-left-sub" />

        {/* Left Panel 2: Foreground Primary Red (#E9202E) Bold Angular Panel */}
        <div className="absolute inset-0 bg-[#E9202E] opacity-95 transition-all duration-300 hero-slant-left-main shadow-2xl" />

        {/* Subtle Coral Accent Hairline Edge along the diagonal boundary */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent 40%, rgba(232,138,144,0.6) 55%, transparent 60%)',
          }}
        />
      </div>
    </section>
  );
};
