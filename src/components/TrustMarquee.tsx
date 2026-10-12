import React, { useMemo } from 'react';
import { PREVIOUS_ENGAGEMENT_LOGOS } from '../data/content';

export const TrustMarquee: React.FC = () => {
  // Single continuous seamless infinite loop of all 24 logos on one line
  const extendedLogos = useMemo(
    () => [...PREVIOUS_ENGAGEMENT_LOGOS, ...PREVIOUS_ENGAGEMENT_LOGOS],
    []
  );

  return (
    <section id="engagements" className="pt-16 sm:pt-20 pb-0 bg-[#FFFFFF] border-t border-[rgba(217,217,217,0.7)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Previous Engagements */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 sm:w-16 bg-[#E9202E]/40" />
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#E9202E] font-bold font-body">
              Previous Engagements
            </h3>
            <span className="h-px w-8 sm:w-16 bg-[#E9202E]/40" />
          </div>
          <p className="text-xs sm:text-sm text-[#4D4D4D] font-body mt-2.5 max-w-xl mx-auto font-medium">
            Keynotes, corporate training & executive programs trusted by Fortune 500 enterprises, media giants & premier academic institutions
          </p>
        </div>
      </div>

      {/* Pure Brand Red (#E9202E) Mathematical Color Matrix Filter
          - Stage 1: Converts all colored/monochrome inputs to grayscale luminance
          - Stage 2: Sharp contrast transfer: pushes all logo strokes to pure dark (0.0) and JPEG backgrounds to pure white (1.0)
          - Stage 3: Color Matrix: maps 0.0 directly to brand red (#E9202E) and 1.0 to pure white (#FFFFFF) with ZERO yellow
      */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <filter id="pure-brand-red-filter" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0.2126 0.7152 0.0722 0 0
                      0      0      0      1 0"
              result="gray"
            />
            <feComponentTransfer in="gray" result="contrast">
              <feFuncR type="linear" slope="4.5" intercept="-3.3" />
              <feFuncG type="linear" slope="4.5" intercept="-3.3" />
              <feFuncB type="linear" slope="4.5" intercept="-3.3" />
            </feComponentTransfer>
            <feColorMatrix
              in="contrast"
              type="matrix"
              values="0.0863 0 0 0 0.9137
                      0.8745 0 0 0 0.1255
                      0.8196 0 0 0 0.1804
                      0      0 0 1 0"
              result="redResult"
            />
          </filter>
        </defs>
      </svg>

      {/* Infinite Single-Row Logo Marquee */}
      <div className="relative w-full overflow-hidden marquee-container py-4">
        {/* Left & Right Edge Gradient Fades */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-44 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-44 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />

        {/* Single Row: Leftward Continuous Marquee with Enlarged, Crisp Red Logos */}
        <div className="flex animate-marquee-infinite items-center">
          {extendedLogos.map((logo, idx) => (
            <div
              key={`logo-${logo.id}-${idx}`}
              className="flex-shrink-0 mx-3 sm:mx-4 px-6 sm:px-8 py-4 rounded-xl bg-white border border-[#E9202E]/20 hover:border-[#E9202E] hover:shadow-lg shadow-xs transition-all duration-300 flex items-center justify-center group h-22 sm:h-26 min-w-[170px] sm:min-w-[210px] relative overflow-hidden"
              title={logo.name}
            >
              <img
                src={logo.imageUrl}
                alt={logo.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  filter: 'url(#pure-brand-red-filter)',
                }}
                className="max-h-13 sm:max-h-16 w-auto max-w-[140px] sm:max-w-[175px] object-contain mix-blend-multiply opacity-100 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    const span = document.createElement('span');
                    span.className = 'logo-fallback text-xs sm:text-sm font-bold tracking-wider text-[#E9202E] uppercase text-center line-clamp-1';
                    span.innerText = logo.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Editorial Divider Line below Marquee Section */}
      <div className="relative w-full flex items-center justify-center pt-8 sm:pt-12 pb-0 overflow-hidden" aria-hidden="true">
        {/* Full-width subtle gradient hairline */}
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(217,217,217,0.7)] via-25% via-[rgba(217,217,217,0.95)] via-75% to-transparent" />

        {/* Concentrated crimson & coral luxury glow in center */}
        <div className="absolute w-2/3 max-w-2xl h-[1.5px] bg-gradient-to-r from-transparent via-[#E88A90]/35 via-25% via-[#E9202E]/75 via-50% via-[#E88A90]/35 via-75% to-transparent" />

        {/* Central Luxury Crest / Diamond Accent */}
        <div className="relative z-10 flex items-center gap-3 px-6 bg-white">
          <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#E9202E]/40" />
          <div className="flex items-center gap-1.5 text-[#E9202E]">
            <span className="w-1 h-1 rounded-full bg-[#E9202E]/40" />
            <span className="w-2 h-2 rotate-45 border border-[#E9202E] bg-white shadow-xs" />
            <span className="w-1 h-1 rounded-full bg-[#E9202E]/40" />
          </div>
          <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#E9202E]/40" />
        </div>
      </div>
    </section>
  );
};
