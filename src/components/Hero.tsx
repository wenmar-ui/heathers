import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { HeatherMonogram } from './HeatherMonogram';
import { VideoReelModal } from './VideoReelModal';

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenVideoReel?: () => void;
  onOpenConfidenceAudit?: () => void;
  onOpenApplication?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenVideoReel,
  onOpenApplication,
}) => {
  const [imgSrc, setImgSrc] = useState('/Glamorous%20Blonde%20Denim%20Cutout.png');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isWatchIconTwisting, setIsWatchIconTwisting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isVideoModalOpen]);

  const handleWatchClick = () => {
    setIsWatchIconTwisting(true);
    setTimeout(() => setIsWatchIconTwisting(false), 700);
    if (onOpenVideoReel) {
      onOpenVideoReel();
    } else {
      setIsVideoModalOpen(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 isolate w-full bg-white flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[86vh] md:min-h-[92vh] lg:min-h-[96vh] selection:bg-white selection:text-[#1A1A1A]"
    >
      {/* =========================================================================
          LAYER 1: #FAFAFA Background (Provided by container bg-[#FAFAFA])
          ========================================================================= */}

      {/* =========================================================================
          LAYER 2: Large Right Slanted Panel (BEHIND the person/image, z-10)
          Extends underneath the image and peeks out from the right side,
          strictly parallel with the left diagonal slants.
          ========================================================================= */}
      <div
        className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Blush (#F8EEF0) Large Right Slanted Graphic Panel */}
        <div
          className="absolute inset-0 bg-[#F8EEF0] opacity-90 transition-all duration-300 hero-slant-right"
        />

        {/* Ghost Pink (#F2C9CD) Secondary Angular Depth Facet on Right */}
        <div
          className="absolute inset-0 bg-[#F2C9CD] opacity-40 transition-all duration-300 hero-slant-right-accent"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full flex items-center justify-center relative">
        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto">
          {/* =========================================================================
              LAYER 3: Main Hero Image (Shifted Right, Unaltered, z-20)
              ========================================================================= */}
          <img
            src={imgSrc}
            onError={() => {
              if (imgSrc !== '/heather-hero-denim.png') {
                setImgSrc('/heather-hero-denim.png');
              }
            }}
            alt="Heather Monahan - The Confident Creator"
            className="relative z-20 w-auto h-auto max-h-[72vh] sm:max-h-[78vh] md:max-h-[84vh] lg:max-h-[88vh] scale-[0.98] origin-bottom max-w-full object-contain mx-auto select-none pointer-events-none transition-all duration-300 translate-x-[45px] sm:translate-x-[95px] md:translate-x-[160px]"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* =========================================================================
          LAYER 4: Two Left Slanted Panels (z-30)
          Clean, continuous, bold diagonal slants matching the sports editorial reference.
          The slant passes to the left of her face/upper body and crosses over her feet.
          ========================================================================= */}
      <div
        className="absolute inset-0 z-30 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Left Panel 1: Underlying Ghost Pink (#F2C9CD) Bevel Layer */}
        <div
          className="absolute inset-0 bg-[#F2C9CD] opacity-95 transition-all duration-300 hero-slant-left-sub"
        />

        {/* Left Panel 2: Foreground Primary Red (#E9202E) Bold Angular Panel */}
        <div
          className="absolute inset-0 bg-[#E9202E] opacity-95 transition-all duration-300 hero-slant-left-main shadow-2xl"
        />

        {/* Subtle Coral Accent Hairline Edge along the diagonal boundary */}
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 40%, rgba(232,138,144,0.6) 55%, transparent 60%)',
          }}
        />
      </div>

      {/* =========================================================================
          LAYER 5: Headline inside the Left Slanted Area (z-40)
          "The Confident Creator." arranged with high-fashion editorial typography
          ========================================================================= */}
      <div className="absolute inset-y-0 left-0 z-40 flex items-center w-full pointer-events-none pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="w-full max-w-[85%] sm:max-w-[70%] md:max-w-[42%] lg:max-w-[38%] xl:max-w-[36%] pointer-events-auto py-8 selection:bg-white selection:text-[#1A1A1A] select-text">
            {/* Architectural Line Monogram Lockup with "Be Yourself, Be Unique." */}
            <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 mb-4 sm:mb-5 lg:mb-6 -translate-y-[60px] sm:-translate-y-[80px] md:-translate-y-[100px]">
              {/* Slogan Text: "Be Yourself, Be Unique." above the line in italic Playfair Display */}
              <div className="absolute left-0 bottom-1/2 pb-1 sm:pb-1.5 flex items-center gap-1.5 sm:gap-2 pointer-events-auto select-text z-10">
                <span className="font-serif-display italic text-white/95 text-xs sm:text-base md:text-xl lg:text-2xl xl:text-[1.65rem] font-normal tracking-tight leading-none drop-shadow-xs whitespace-nowrap select-text cursor-text">
                  Be Yourself,
                </span>
                <span className="font-serif-display italic text-white text-xs sm:text-base md:text-xl lg:text-2xl xl:text-[1.65rem] font-normal tracking-tight leading-none drop-shadow-xs whitespace-nowrap select-text cursor-text">
                  Be Unique.
                </span>
              </div>

              {/* Heather Monahan HM Monogram */}
              <div className="w-fit translate-x-[145px] sm:translate-x-[280px] md:translate-x-[400px] lg:translate-x-[500px]">
                <HeatherMonogram className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto text-white drop-shadow-md" />
              </div>
            </div>

            {/* Main Editorial Headline & Content (shifted up around 100px) */}
            <div className="-translate-y-[60px] sm:-translate-y-[80px] md:-translate-y-[100px]">
              <h1 className="font-serif-display uppercase text-white tracking-[0.02em] sm:tracking-[0.03em] leading-[0.98] sm:leading-[0.96]">
                <span className="block font-normal text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] xl:text-[4.65rem] drop-shadow-xs">
                  THE CONFIDENT
                </span>
                <span className="block font-normal text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] xl:text-[4.65rem] mt-1 sm:mt-2 drop-shadow-xs">
                  CREATOR.
                </span>
              </h1>

              {/* Editorial Subheadline (19px font) */}
              <p className="mt-4 sm:mt-5 lg:mt-6 text-[19px] text-white/90 font-normal leading-relaxed max-w-sm sm:max-w-md lg:max-w-xl font-sans-body">
                Shines light on the steps you need to <br className="hidden sm:inline" />
                take to elevate yourself in business and life.
              </p>

              {/* Action Buttons: Apply Now & Watch Video (Strictly alongside, no wrapping) */}
              <div className="mt-8 sm:mt-10 flex flex-nowrap items-center gap-2.5 sm:gap-3.5 w-max max-w-none">
                {/* Button 1: Dual-Content Apply Now Button */}
                <button
                  onClick={() => {
                    if (onOpenApplication) {
                      onOpenApplication();
                    } else if (onOpenBooking) {
                      onOpenBooking();
                    }
                  }}
                  className="group inline-flex items-center justify-center h-[50px] sm:h-[54px] bg-white active:scale-[0.99] transition-shadow rounded-sm shadow-sm hover:shadow-md px-4 sm:px-5.5 cursor-pointer border border-white/20 select-none font-sans-body shrink-0"
                >
                  {/* Left: Double line text format, smaller fonts */}
                  <span className="flex flex-col text-left">
                    <span className="text-[9.5px] sm:text-[10.5px] font-medium leading-tight text-[#4D4D4D] tracking-wide whitespace-nowrap">
                      Ready for your
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] font-semibold leading-tight text-[#1A1A1A] tracking-wide whitespace-nowrap">
                      transformation?
                    </span>
                  </span>

                  {/* Slant style before the Apply Now (matching hero diagonal slant) */}
                  <span
                    className="w-[1.5px] h-6 sm:h-7 bg-[#E9202E] -rotate-[16deg] transform origin-center rounded-full mx-3 sm:mx-3.5 shrink-0"
                    aria-hidden="true"
                  />

                  {/* Right: Apply Now (only this animates on hover) */}
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5 whitespace-nowrap">
                    <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#1A1A1A] group-hover:text-[#E9202E] transition-colors">
                      Apply Now
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E9202E] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>

                {/* Button 2: Watch Video Button with Animated Play Icon */}
                <button
                  onClick={handleWatchClick}
                  className="group/watch inline-flex items-center justify-center h-[50px] sm:h-[54px] gap-2 sm:gap-2.5 bg-white hover:bg-[#F8EEF0] active:scale-[0.98] transition-all rounded-sm shadow-sm hover:shadow-md px-4 sm:px-5 cursor-pointer border border-white/20 select-none font-sans-body shrink-0"
                  title="Watch Heather Monahan Keynote Reel"
                  aria-label="Watch Heather Monahan video reel"
                >
                  {/* Play Icon with Twist Animation on hover & click */}
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E9202E] text-white flex items-center justify-center shadow-xs transition-colors duration-200 group-hover/watch:bg-[#1A1A1A] shrink-0">
                    <span className={`animate-twist-icon inline-flex items-center justify-center ${isWatchIconTwisting ? 'is-twisting' : ''}`}>
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                    </span>
                  </span>

                  {/* Button Label: Watch */}
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#1A1A1A] group-hover/watch:text-[#E9202E] transition-colors whitespace-nowrap">
                    Watch
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popout Video Modal for Vimeo Reel */}
      <VideoReelModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookNow={() => {
          setIsVideoModalOpen(false);
          if (onOpenBooking) onOpenBooking();
        }}
      />
    </section>
  );
};
