import React from 'react';
import { ArrowRight, Star, ExternalLink, BookOpen, Headphones, GraduationCap } from 'lucide-react';
import { ASSETS } from '../data/content';

interface OverviewSectionProps {
  onOpenApplication?: () => void;
  onOpenBooking?: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onOpenApplication,
  onOpenBooking,
}) => {
  return (
    <section id="about-overview" className="relative py-16 sm:py-24 bg-white text-[#1A1A1A] border-b border-[rgba(217,217,217,0.7)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start relative">
          {/* =========================================================================
              LEFT COLUMN (70% Width):
              - The ENTIRE column is a unified, ethereal luxury glassy blurred canvas
              - Authentic frosted glass depth: ambient blush/crimson light, blurred silhouette,
                and micro-frosted texture spanning across 100% of the column width & height
              - Top area:
                * Left side: Heather's bigger image with clear box aperture in tack-sharp focus
                * Right side: ONLY "Heather Monahan" and subtitle accolades
              - Below them: The remaining text (narrative bio + Digital Mentor Program)
              ========================================================================= */}
          <div className="w-full lg:w-[68%] xl:w-[70%] shrink-0 relative group">
            {/* Ambient backlight under the glass column ensuring backdrop-blur is intensely visible */}
            <div
              className="absolute -inset-3 sm:-inset-4 rounded-3xl pointer-events-none opacity-50"
              style={{
                background:
                  'radial-gradient(circle at 18% 28%, rgba(233,32,46,0.18) 0%, rgba(248,238,240,0.75) 45%, rgba(233,32,46,0.06) 80%, transparent 100%)',
                filter: 'blur(32px)',
              }}
            />

            {/* THE UNIFIED GLASSY BLURRED COLUMN PANEL */}
            <div
              className="relative rounded-3xl overflow-hidden border border-[rgba(217,217,217,0.85)] backdrop-blur-3xl bg-white/90 p-6 sm:p-8 lg:p-10"
              style={{
                boxShadow:
                  '0 20px 45px -12px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 1px rgba(255,255,255,0.95)',
              }}
            >
              {/* =====================================================================
                  FULL-COLUMN GLASSY BLUR ATMOSPHERE
                  Spans 100% across the entire left column (left, center, and right)
                  ===================================================================== */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                {/* 1. Luminous Rose & Champagne Ambient Gradients across full column */}
                <div
                  className="absolute inset-0 opacity-65 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 15% 25%, rgba(233,32,46,0.16) 0%, rgba(248,238,240,0.75) 42%, rgba(255,255,255,0.4) 80%)',
                  }}
                />

                {/* 2. Soft crimson atmospheric wash drifting into right & bottom */}
                <div
                  className="absolute -right-16 -bottom-16 w-[420px] h-[420px] rounded-full pointer-events-none opacity-25"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(233,32,46,0.22) 0%, rgba(242,201,205,0.45) 50%, transparent 75%)',
                    filter: 'blur(50px)',
                  }}
                />

                {/* 3. Heather's Red Gown Silhouette blurred dynamically across the background */}
                <img
                  src="/heather-red-gown.png"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('Brand%20guide')) {
                      target.src = '/Brand guide/Glamorous Woman in Red Gown.png';
                    }
                  }}
                  alt=""
                  className="absolute left-[-20px] bottom-[-20px] h-[115%] w-auto max-w-none object-contain object-bottom filter blur-3xl opacity-35 select-none pointer-events-none"
                />

                {/* 4. Frosted Glass Micro-Texture across the ENTIRE Column */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* 5. Frosted Glass Glaze Overlay across the entire column */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl pointer-events-none" />

                {/* 6. Diagonal Specular Glass Light Sheen */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    background:
                      'linear-gradient(115deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.45) 100%)',
                  }}
                />
              </div>

              {/* FOREGROUND CONTENT */}
              <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
                {/* ===================================================================
                    TOP BLOCK:
                    - Left: Bigger image with clear box aperture in tack-sharp focus
                    - Right: ONLY Heather Monahan & Subtitle Accolades
                    =================================================================== */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Side: Bigger Image of Heather (Cropped at knee level) */}
                  <div className="md:col-span-7 lg:col-span-7 flex flex-col items-center justify-end relative">
                    {/* The Image Stage (locked to Heather's knee-crop aspect ratio 682/1040) */}
                    <div className="relative h-[480px] sm:h-[540px] lg:h-[600px] aspect-[682/1040] max-w-full flex items-end justify-center select-none">
                      {/* Subtle pedestal glow under Heather */}
                      <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-28 pointer-events-none opacity-40"
                        style={{
                          background:
                            'radial-gradient(ellipse at center, rgba(233,32,46,0.3) 0%, rgba(248,238,240,0.6) 55%, transparent 75%)',
                          filter: 'blur(20px)',
                        }}
                      />

                      {/* Base Figure: Glassy Blurred Heather (Knee-crop) */}
                      <img
                        src="/heather-red-gown-knee.png"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('heather-red-gown')) {
                            target.src = '/heather-red-gown.png';
                          }
                        }}
                        alt="Heather Monahan - Glassy Blurred Figure"
                        className="absolute inset-0 w-full h-full object-contain object-bottom filter blur-xl sm:blur-2xl opacity-75 scale-105 select-none pointer-events-none z-0"
                      />

                      {/* Frosted Glass Sheen over base figure */}
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none z-0" />

                      {/* ===================================================================
                          THE CLEAR BOX & 3D POP-OUT LAYERING:
                          - Clear box positioned at top: 27%, height: 31% (bottom at 58%)
                          - Top border at 27% (z-10, behind neck/shoulders, well below mouth & chin)
                          - Top border is masked across Heather's silhouette (24% to 70% of box)
                            so NO line can ever touch or cut across her mouth, face, or chin
                          - Heather's unblurred figure (z-20): Head & face (0-27%) are outside the box,
                            flawless, in tack-sharp focus
                          - Torso inside box (27% to 58%) in tack-sharp focus
                          - Bottom border at 58% (z-30, in front of the red gown body)
                          - Below 58%: Gown flows down to knee in glassy blur
                          =================================================================== */}

                      {/* LAYER 1 (z-10): Upper + side borders, BEHIND Heather (she is z-20, opaque, so she covers the line) */}
                      <div
                        style={{
                          left: '8%',
                          top: '27%',
                          width: '84%',
                          height: '31%',
                        }}
                        className="absolute border-t-2 border-l-2 border-r-2 border-[#E9202E] rounded-none z-10 pointer-events-none"
                      />

                      {/* LAYER 2 (z-20): Crystal Clear Unblurred Cutout */}
                      {/* Head & face (0% to 27%) are outside the box & NOT blurred */}
                      {/* Torso is inside the box (27% to 58%, unblurred) */}
                      {/* Clipped at 58% so lower body down to knees reveals the glassy blurred base image */}
                      <img
                        src="/heather-red-gown-knee.png"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('heather-red-gown')) {
                            target.src = '/heather-red-gown.png';
                          }
                        }}
                        alt="Heather Monahan - Crystal Clear Focus"
                        style={{
                          clipPath: 'polygon(0% 0%, 100% 0%, 100% 58%, 0% 58%)',
                          WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 58%, 0% 58%)',
                        }}
                        className="absolute inset-0 w-full h-full object-contain object-bottom filter-none drop-shadow-xl z-20 select-none pointer-events-none"
                      />

                      {/* LAYER 3 (z-30): Clear Box Lower Border (ABOVE the Image Body) */}
                      <div
                        style={{
                          left: '8%',
                          top: '27%',
                          width: '84%',
                          height: '31%',
                        }}
                        className="absolute border-b-2 border-l-2 border-r-2 border-t-0 border-[#E9202E] rounded-none z-30 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Right Side: THIS TEXT ONLY */}
                  <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center py-4 md:-translate-y-[100px]">
                    {/* Main Headline Name */}
                    <h2 className="font-serif-display font-medium whitespace-nowrap text-2xl sm:text-3xl md:text-[1.7rem] lg:text-[2.1rem] xl:text-4xl tracking-tight text-[#1A1A1A] leading-[1.08] mb-4">
                      Heather Monahan
                    </h2>

                    {/* Subtitle / Accolades */}
                    <p className="text-xs sm:text-sm lg:text-[14.5px] uppercase tracking-[0.14em] text-[#E9202E] font-semibold font-body leading-relaxed">
                      Top 50 Keynote Speaker, Best Selling Author, Podcast Host and Confidence Creator Expert
                    </p>
                  </div>
                </div>

                {/* ===================================================================
                    BOTTOM BLOCK: Below them the remaining text
                    - Sits on an elegant frosted glass panel within the glassy column
                    - Narrative bio with bold red keywords and Boss in Heels link
                    - Digital Mentor Program with description and action button
                    =================================================================== */}
                <div className="bg-white/75 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-9 border border-[rgba(217,217,217,0.7)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col gap-8 -mt-20 sm:-mt-32 lg:-mt-52 relative z-20">
                  {/* Body Paragraphs with Red Highlighted Keywords */}
                  <div className="space-y-4 text-sm sm:text-[16px] text-[#1A1A1A] font-body font-normal leading-relaxed">
                    <p>
                      In an unpredictable world, having the ability to see the upside of a challenging situation is priceless. It is this kind of{' '}
                      <span className="text-[#E9202E] font-semibold">confident attitude</span> and{' '}
                      <span className="text-[#E9202E] font-semibold">personal agency</span> that every organization is looking to instill in their people, no matter their role or responsibility.
                    </p>

                    <p>
                      With two bestselling books, a 20-year career in the c-suite of a multi-billion dollar media company, and a top 10 podcast called Creating Confidence,{' '}
                      <a
                        href="https://heathermonahan.com/heather-monahan-boss-in-heels/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E9202E] font-semibold underline underline-offset-4 decoration-[#E9202E]/40 hover:decoration-[#E9202E] transition-colors inline-flex items-center gap-1 group"
                      >
                        Heather Monahan
                        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>{' '}
                      has become a trusted guide on sharing{' '}
                      <span className="text-[#E9202E] font-semibold">tangible confidence strategies</span> that every individual can use to lead with more agency at work and in life.
                    </p>

                    <p>
                      In times of turmoil, Heather’s stories resonate with audiences, demonstrating that a{' '}
                      <span className="text-[#E9202E] font-semibold">confident mindset</span> is the key to transforming challenges into opportunities for success.
                    </p>
                  </div>

                  {/* Subsection: Digital Mentor Program */}
                  <div className="pt-6 border-t border-[rgba(217,217,217,0.7)]">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="h-5 w-1 bg-[#E9202E] rounded-full" />
                      <h3 className="font-serif-display font-medium text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                        Digital Mentor Program
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#4D4D4D] font-body font-normal leading-relaxed">
                      Heather Monahan is a dynamic leader who rapidly climbed the ranks in corporate America before making her mark in the broadcasting industry, eventually becoming the Chief Revenue Officer of Beasley Broadcasting. Her journey of resilience and empowerment led her to found Boss In Heels, where she leverages her experiences to inspire others towards confidence and success. She is also a celebrated author of “Confidence Creator,” a best-seller that underscores her commitment to empowering individuals. Ask Heather about elevating yourself in both business and life!
                    </p>

                    {/* Action Button: Click to Learn More */}
                    <div className="mt-6">
                      <button
                        onClick={() => {
                          if (onOpenApplication) {
                            onOpenApplication();
                          } else if (onOpenBooking) {
                            onOpenBooking();
                          }
                        }}
                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#E9202E] hover:bg-[#1A1A1A] text-white text-xs sm:text-[13px] uppercase tracking-[0.14em] font-semibold rounded-sm transition-all shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer font-body"
                      >
                        <span>Click to Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (30% Width, Sticky): Three Vertical Cards
              1. Amazon Book
              2. Apple Podcast
              3. Digital Mentor Program Course
              ========================================================================= */}
          <div className="w-full lg:w-[32%] xl:w-[30%] lg:sticky lg:top-20 self-start flex flex-col gap-4">
            {/* Card 1: Amazon Book */}
            <div className="w-full bg-white rounded-[24px] border border-neutral-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden group">
              {/* Top Cover Banner */}
              <div className="relative h-32 sm:h-34 w-full overflow-hidden bg-[#111111]">
                <img
                  src={ASSETS.overcomeVillainsBook}
                  alt="Overcome Your Villains"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
                {/* Platform Badge in Bottom-Right Corner of Cover */}
                <div className="absolute bottom-2.5 right-3.5 flex items-center gap-1.5 text-white/90">
                  <span className="text-[9.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    Amazon #1
                  </span>
                </div>
              </div>

              {/* Bottom White Content Section */}
              <div className="px-4.5 sm:px-5 pb-4.5 pt-1">
                {/* Overlapping Avatar Row with Action Button */}
                <div className="flex items-end justify-between -mt-7 sm:-mt-8 mb-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-[#111111] shadow-md flex items-center justify-center text-white shrink-0 z-10 font-serif-display font-bold text-base sm:text-lg tracking-wider">
                    HM
                  </div>
                  <a
                    href="https://www.amazon.com/Overcome-Your-Villains-Mastering-Workplace/dp/1400225792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-1.5 bg-black hover:bg-[#E9202E] text-white text-[11.5px] font-semibold rounded-full transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <span>Get Book</span>
                  </a>
                </div>

                {/* Title & Verified Badge */}
                <div className="flex items-center gap-1 mt-0.5">
                  <h4 className="font-bold text-[15.5px] sm:text-base text-[#111111] tracking-tight">
                    Overcome Your Villains
                  </h4>
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#1D9BF0] text-white shrink-0 ml-1">
                    <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>

                {/* Handle / Category */}
                <p className="text-[11px] text-[#737373] font-medium mt-0.5">
                  @heathermonahan · Amazon Bestseller
                </p>

                {/* Bio Description */}
                <p className="text-[11.5px] text-[#525252] font-body leading-relaxed mt-2 line-clamp-2">
                  Mastering your inner dialogue, overcoming toxic people, and turning adversity into unstoppable momentum with the 3-step BAK method.
                </p>

                {/* Metrics Footer */}
                <div className="flex items-center gap-4 mt-3 pt-2.5 border-t border-neutral-100 text-[11px]">
                  <div>
                    <span className="font-bold text-[#111111]">4.9★</span>{' '}
                    <span className="text-[#737373]">Rating</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">1,450+</span>{' '}
                    <span className="text-[#737373]">Reviews</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">#1</span>{' '}
                    <span className="text-[#737373]">New Release</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Apple Podcast */}
            <div className="w-full bg-white rounded-[24px] border border-neutral-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden group">
              {/* Top Cover Banner */}
              <div className="relative h-32 sm:h-34 w-full overflow-hidden bg-[#111111]">
                <img
                  src={ASSETS.speakingStage}
                  alt="Creating Confidence Podcast"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
                {/* Platform Badge in Bottom-Right Corner of Cover */}
                <div className="absolute bottom-2.5 right-3.5 flex items-center gap-1.5 text-white/90">
                  <span className="text-[9.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    Apple Top 10
                  </span>
                </div>
              </div>

              {/* Bottom White Content Section */}
              <div className="px-4.5 sm:px-5 pb-4.5 pt-1">
                {/* Overlapping Avatar Row with Action Button */}
                <div className="flex items-end justify-between -mt-7 sm:-mt-8 mb-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-[#1A1A1A] shadow-md flex items-center justify-center text-white shrink-0 z-10">
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href="https://podcasts.apple.com/us/podcast/creating-confidence-with-heather-monahan/id1466547617"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-1.5 bg-black hover:bg-[#E9202E] text-white text-[11.5px] font-semibold rounded-full transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <span>Listen</span>
                  </a>
                </div>

                {/* Title & Verified Badge */}
                <div className="flex items-center gap-1 mt-0.5">
                  <h4 className="font-bold text-[15.5px] sm:text-base text-[#111111] tracking-tight">
                    Creating Confidence
                  </h4>
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#1D9BF0] text-white shrink-0 ml-1">
                    <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>

                {/* Handle / Category */}
                <p className="text-[11px] text-[#737373] font-medium mt-0.5">
                  @creatingconfidence · Podcast
                </p>

                {/* Bio Description */}
                <p className="text-[11.5px] text-[#525252] font-body leading-relaxed mt-2 line-clamp-2">
                  Raw, unfiltered conversations with Fortune 500 CEOs, global icons, and world champions on conquering imposter syndrome.
                </p>

                {/* Metrics Footer */}
                <div className="flex items-center gap-4 mt-3 pt-2.5 border-t border-neutral-100 text-[11px]">
                  <div>
                    <span className="font-bold text-[#111111]">4.9★</span>{' '}
                    <span className="text-[#737373]">Rating</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">350+</span>{' '}
                    <span className="text-[#737373]">Episodes</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">Top 10</span>{' '}
                    <span className="text-[#737373]">Global</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Digital Mentor Course */}
            <div className="w-full bg-white rounded-[24px] border border-neutral-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.09)] transition-all duration-300 overflow-hidden group">
              {/* Top Cover Banner */}
              <div className="relative h-32 sm:h-34 w-full overflow-hidden bg-[#111111]">
                <img
                  src={ASSETS.heroPortrait}
                  alt="The Confidence Accelerator"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
                {/* Platform Badge in Bottom-Right Corner of Cover */}
                <div className="absolute bottom-2.5 right-3.5 flex items-center gap-1.5 text-white/90">
                  <span className="text-[9.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#E9202E]/90 backdrop-blur-md border border-white/20">
                    Enrolling
                  </span>
                </div>
              </div>

              {/* Bottom White Content Section */}
              <div className="px-4.5 sm:px-5 pb-4.5 pt-1">
                {/* Overlapping Avatar Row with Action Button */}
                <div className="flex items-end justify-between -mt-7 sm:-mt-8 mb-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-[#E9202E] shadow-md flex items-center justify-center text-white shrink-0 z-10">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <button
                    onClick={() => {
                      if (onOpenApplication) {
                        onOpenApplication();
                      } else if (onOpenBooking) {
                        onOpenBooking();
                      }
                    }}
                    className="inline-flex items-center justify-center px-5 py-1.5 bg-black hover:bg-[#E9202E] text-white text-[11.5px] font-semibold rounded-full transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>Apply</span>
                  </button>
                </div>

                {/* Title & Verified Badge */}
                <div className="flex items-center gap-1 mt-0.5">
                  <h4 className="font-bold text-[15.5px] sm:text-base text-[#111111] tracking-tight">
                    Confidence Accelerator
                  </h4>
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#1D9BF0] text-white shrink-0 ml-1">
                    <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>

                {/* Handle / Category */}
                <p className="text-[11px] text-[#737373] font-medium mt-0.5">
                  @heathermonahan · Masterclass
                </p>

                {/* Bio Description */}
                <p className="text-[11.5px] text-[#525252] font-body leading-relaxed mt-2 line-clamp-2">
                  Heather’s proprietary masterclass to build unstoppable executive presence, c-suite authority, and boundary mastery.
                </p>

                {/* Metrics Footer */}
                <div className="flex items-center gap-4 mt-3 pt-2.5 border-t border-neutral-100 text-[11px]">
                  <div>
                    <span className="font-bold text-[#111111]">100%</span>{' '}
                    <span className="text-[#737373]">Online</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#111111]">12</span>{' '}
                    <span className="text-[#737373]">Modules</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#E9202E]">Open</span>{' '}
                    <span className="text-[#737373]">Cohort</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
