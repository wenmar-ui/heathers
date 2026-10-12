import React from 'react';
import { Quote } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title?: string;
  company?: string;
  event?: string;
  category?: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
}

/**
 * Real testimonials list:
 * The user will add real testimonials here.
 * When items are added to this array, they will automatically render as luxury cards.
 */
export const REAL_TESTIMONIALS: TestimonialItem[] = [
  // Paste real testimonials here, e.g.:
  // {
  //   id: '1',
  //   quote: 'Heather completely captivated our audience...',
  //   author: 'Jane Doe',
  //   title: 'VP of Global Events',
  //   company: 'Fortune 500 Enterprise',
  //   event: 'Annual Sales Kickoff',
  // },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = REAL_TESTIMONIALS,
}) => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#F8EEF0] border-t border-b border-[rgba(217,217,217,0.7)] overflow-hidden scroll-mt-16"
    >
      <div id="praise" className="absolute -top-20" aria-hidden="true" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* =========================================================================
              LEFT SIDE CORNER: Heather in Black Leather and Heels Cutout
              Positioned at the left corner, grounded flush to the bottom edge
              ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 relative z-30 flex justify-center items-end self-stretch pt-8 lg:pt-12 min-h-[calc(480px+3rem)] sm:min-h-[calc(580px+3rem)] lg:min-h-[calc(700px+3rem)] xl:min-h-[calc(820px+3rem)]">
            {/* Blonde cutout now sits where the main image was (centered, +100px) */}
            <img
              src="/glamorous-blonde-cutout.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 left-[calc(50%+100px)] -translate-x-1/2 z-30 w-auto h-[480px] sm:h-[580px] lg:h-[700px] xl:h-[820px] object-contain object-bottom select-none pointer-events-none"
            />
            {/* Main image now sits on the red band, right edge at the band's end */}
            <div className="absolute bottom-0 right-[calc(50%-401px)] z-20 group">
              {/* Red background: same width as the main image */}
              <div
                className="absolute left-[calc(20%+35px)] right-[calc(20%+35px)] -top-12 bottom-0 bg-[#E9202E] pointer-events-none"
                aria-hidden="true"
              />

              {/* Floor shadow anchor */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/10 blur-sm rounded-full pointer-events-none"
                aria-hidden="true"
              />
              {/* Invisible spacer keeps the wrapper (and red box) size unchanged */}
              <img
                src="/heather-black-leather.png"
                alt=""
                aria-hidden="true"
                className="invisible relative w-auto h-[480px] sm:h-[580px] lg:h-[700px] xl:h-[820px] object-contain"
              />
              {/* Visible image fills the red box exactly */}
              <img
                src="/heather-black-leather.png"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('Glamorous') === -1) {
                    target.src = '/Glamorous Blonde in Black Leather and Heels.png';
                  }
                }}
                alt="Heather Monahan in Black Leather and Heels"
                className="absolute inset-x-0 -top-12 bottom-0 z-10 w-full h-[calc(100%+3rem)] opacity-40 object-cover object-bottom select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* =========================================================================
              RIGHT SIDE: Testimonials Area (Matching Reference Design)
              ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 self-stretch pt-6 sm:pt-8 lg:pt-10 pb-16 flex flex-col justify-start relative z-10 min-h-[calc(480px+3rem)] sm:min-h-[calc(580px+3rem)] lg:min-h-[calc(700px+3rem)] xl:min-h-[calc(820px+3rem)]">
            {/* Stage audience photo at the bottom: anchored cleanly below metrics, bleeding right to screen edge */}
            <div
              className="absolute -left-12 sm:-left-16 lg:-left-24 -right-16 sm:-right-24 lg:-right-[calc((100vw-100%)/2)] bottom-0 h-[34%] sm:h-[36%] lg:h-[38%] max-h-[300px] pointer-events-none overflow-hidden -z-10"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.4) 88%, rgba(0,0,0,0) 100%)',
              }}
            >
              <img
                src="/heather-stage-speaking.jpeg"
                alt="Keynote audience and stage"
                className="w-full h-full object-cover object-bottom select-none"
              />
            </div>

            <div className="relative z-10">
              {/* Header with red quote mark and accent line matching reference */}
              <div className="mb-8 pb-5 border-b border-[rgba(217,217,217,0.7)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-[0.20em] uppercase text-[#E9202E] mb-3 font-body">
                      <span>Client Results</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif-display font-normal text-[#1A1A1A] tracking-tight leading-tight">
                      What happens when people{' '}
                      <span className="text-[#E9202E] font-medium text-[1.2em] inline-block">
                        bet on themselves.
                      </span>
                    </h2>
                  </div>
                  {/* Giant red quotation mark matching reference */}
                  <div
                    className="text-6xl sm:text-7xl font-serif-display text-[#E9202E] font-bold leading-none select-none pl-3"
                    aria-hidden="true"
                  >
                    ”
                  </div>
                </div>

                {/* Red accent divider line matching reference */}
                <div className="w-14 h-0.5 bg-[#E9202E] mt-4 mb-3" />

                <p className="text-sm sm:text-base text-[#4D4D4D] font-body max-w-2xl">
                  Real words from real clients, founders, executives, speakers, and entrepreneurs who did the work. Written, video, and straight from LinkedIn.
                </p>
              </div>

              {/* Testimonials Container */}
              {testimonials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="p-7 sm:p-8 rounded-sm bg-white/95 backdrop-blur-sm border border-[rgba(217,217,217,0.7)] flex flex-col justify-between hover:border-[#E88A90] transition-colors shadow-xs relative"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[rgba(217,217,217,0.5)]">
                          <span className="text-xs uppercase tracking-[0.18em] text-[#E9202E] font-semibold font-body">
                            {t.author.toUpperCase()}{t.title ? ` · ${t.title.toUpperCase()}` : ''}
                          </span>
                          {t.category && (
                            <span className="text-[11px] uppercase tracking-[0.12em] text-[rgba(26,26,26,0.6)] font-body">
                              {t.category}
                            </span>
                          )}
                        </div>
                        <Quote className="w-5 h-5 text-[rgba(232,138,144,0.4)] mb-3" />
                        <blockquote className="text-base sm:text-lg font-serif-display italic text-[#1A1A1A] leading-relaxed mb-6">
                          "{t.quote}"
                        </blockquote>
                      </div>
                      {(t.company || t.event) && (
                        <div className="pt-3 border-t border-[rgba(217,217,217,0.6)] flex items-center justify-between text-xs font-body">
                          <div>
                            {t.company && <p className="text-sm font-semibold text-[#1A1A1A]">{t.company}</p>}
                            {t.event && <p className="text-[11px] text-[#4D4D4D] mt-0.5">{t.event}</p>}
                          </div>
                          <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(26,26,26,0.6)] font-medium">
                            Verified Client
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                /* Highlighted client results (Pure editorial typography) */
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-8 text-xs font-semibold tracking-[0.22em] uppercase text-[rgba(26,26,26,0.6)] font-body">
                    <span>A few of the results</span>
                    <span className="text-[#E9202E] font-bold">↓</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-2">
                    {[
                      { value: '993%', label: 'LinkedIn Growth', sub: 'in one quarter' },
                      { value: '10X', label: 'Business Profit', sub: 'in one month' },
                      { value: '6', label: 'TEDx Talks', sub: 'among clients below' },
                      { value: '2X', label: 'Level-Ups', sub: 'one COO, one year' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col border-l border-[rgba(26,26,26,0.2)] pl-4 sm:pl-5 py-1"
                      >
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-serif-display text-[#E9202E] tracking-tight leading-none mb-2.5">
                          {stat.value}
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-[#1A1A1A] font-body tracking-tight leading-snug">
                          {stat.label}
                        </p>
                        <p className="text-xs sm:text-[13px] text-[#4D4D4D] font-body mt-1 leading-normal font-light">
                          {stat.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
