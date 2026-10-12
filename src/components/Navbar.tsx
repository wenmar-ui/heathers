import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Search, Sparkles, ChevronDown } from 'lucide-react';
import { KEYNOTE_TOPICS } from '../data/content';
import { HeatherLogo } from './HeatherLogo';

interface NavbarProps {
  onOpenBooking: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
    { label: 'Keynote Speaker', href: '#keynotes' },
    { label: 'About Heather', href: '#about' },
    {
      label: 'Books',
      href: '#books',
      children: [
        { label: 'Overcome Your Villains', href: '#books' },
        { label: 'Confidence Creator Book', href: '#books' },
        { label: 'Free E-Book', href: '#books' },
      ],
    },
    {
      label: 'Press',
      href: '#media',
      children: [{ label: 'Featured Videos', href: '#media' }],
    },
    {
      label: 'Monahan Method',
      href: '#podcast',
      children: [
        { label: '30 Days Accountability Partner', href: '#podcast' },
        { label: '30 More Days Accountability Partner', href: '#podcast' },
        { label: 'Confidence Tips', href: '#podcast' },
        { label: 'Mind Movie', href: '#podcast' },
      ],
    },
    {
      label: 'Coaching & Courses',
      href: '#praise',
      children: [
        { label: 'Courses', href: '#praise' },
        { label: 'The Elite Mastermind', href: '#praise' },
        { label: 'Get in Touch for 1:1 Coaching', href: '#praise' },
      ],
    },
  ];

  const filteredTopics = searchQuery.trim()
    ? KEYNOTE_TOPICS.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.takeaways.some((tk) => tk.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : KEYNOTE_TOPICS;

  const handleSelectTopic = (topicTitle: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    const element = document.getElementById('keynotes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTopic = (topicTitle: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    onOpenBooking(topicTitle);
  };

  return (
    <header
      className={`sticky top-0 z-[80] left-0 right-0 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -mb-[68px] sm:-mb-[76px] ${
        scrolled
          ? 'pt-0 px-0'
          : 'pt-2.5 sm:pt-4 px-3 sm:px-6 lg:px-8'
      }`}
    >
      {/* =========================================================================
          MORPHING GLASS CONTAINER:
          Pill floating container when unscrolled -> Morphs to full-width header when scrolled
          ========================================================================= */}
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto backdrop-blur-xl border border-solid will-change-[max-width,border-radius,padding,background-color,border-color,box-shadow] ${
          scrolled
            ? 'w-full max-w-[100vw] rounded-none bg-white/95 border-[#1A1A1A]/10 border-t-transparent border-x-transparent shadow-xs py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8'
            : 'max-w-7xl rounded-[28px] bg-white/85 border-white/70 shadow-[0_8px_32px_rgba(26,26,26,0.06)] py-2 sm:py-2.5 px-3.5 sm:px-6'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* =====================================================================
              ZONE 1 (LEFT): Logo + Search for Topic Bar (With Twisting Magnifier)
              ===================================================================== */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Official Heather Monahan Logo */}
            <a
              href="#"
              className="flex items-center group py-0.5 shrink-0"
              aria-label="Heather Monahan - Home"
            >
              <HeatherLogo
                color="#1A1A1A"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:opacity-85"
              />
            </a>

            {/* Vertical hairline divider */}
            <div className="hidden sm:block h-6 w-px bg-[#1A1A1A]/12" />

            {/* Search for Topic Bar */}
            <div ref={searchRef} className="relative flex items-center">
              <div className="group/search relative flex items-center bg-[#FAFAFA]/95 hover:bg-white focus-within:bg-white border border-[#1A1A1A]/12 hover:border-[#1A1A1A]/25 focus-within:border-[#E9202E] focus-within:ring-2 focus-within:ring-[#E9202E]/20 rounded-full pl-3 pr-3.5 py-1.5 transition-all duration-200 shadow-2xs">
                {/* Magnifying Glass Icon with Twisting Hover Animation */}
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1A1A1A]/60 group-hover/search:text-[#E9202E] animate-twist-icon transition-colors duration-200 shrink-0 mr-2 cursor-pointer" />

                <input
                  type="text"
                  placeholder="Search topics (e.g. Confidence, Resilience)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsSearchOpen(false);
                      const el = document.getElementById('keynotes');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-transparent text-xs text-[#1A1A1A] placeholder:text-[#4D4D4D]/60 focus:outline-none w-24 sm:w-32 md:w-36 lg:w-40 font-body"
                />

                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="text-[#4D4D4D]/60 hover:text-[#1A1A1A] p-0.5 rounded-full transition-colors ml-1"
                    aria-label="Clear search"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Search Topic Suggestions Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full left-0 mt-2.5 w-72 sm:w-88 md:w-96 bg-white/98 backdrop-blur-2xl border border-[#1A1A1A]/10 rounded-2xl shadow-xl py-3 px-3 z-[90] animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-[#1A1A1A]/8">
                    <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#4D4D4D] font-body flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#E9202E]" />
                      Keynote Topics
                    </span>
                    <span className="text-[10px] text-[#4D4D4D]/60 font-body">
                      {filteredTopics.length} available
                    </span>
                  </div>

                  {/* Topic Items List */}
                  <div className="max-h-64 overflow-y-auto space-y-1.5 pr-1">
                    {filteredTopics.length > 0 ? (
                      filteredTopics.map((topic) => (
                        <div
                          key={topic.id}
                          className="group/item p-2.5 rounded-lg hover:bg-[#F8EEF0]/60 transition-colors cursor-pointer border border-transparent hover:border-[#F2C9CD]"
                          onClick={() => handleSelectTopic(topic.title)}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="inline-block text-[9px] font-semibold tracking-wider uppercase text-[#E9202E] bg-[#F8EEF0] px-1.5 py-0.5 rounded-xs mb-1 font-body">
                                {topic.category}
                              </span>
                              <h4 className="text-xs font-semibold text-[#1A1A1A] group-hover/item:text-[#E9202E] transition-colors leading-snug font-body">
                                {topic.title}
                              </h4>
                              <p className="text-[11px] text-[#4D4D4D] line-clamp-1 mt-0.5 font-body">
                                {topic.subtitle}
                              </p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBookTopic(topic.title);
                              }}
                              className="shrink-0 text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded-sm bg-[#1A1A1A] text-white hover:bg-[#E9202E] transition-colors font-body mt-1"
                            >
                              Book
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-4 text-center text-xs text-[#4D4D4D] font-body">
                        No topics matching "{searchQuery}". Try "Confidence" or "Resilience".
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* =====================================================================
              ZONE 2 (RIGHT): Menus Moved to the Right Side + Primary CTA Button
              ===================================================================== */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-7">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 text-[9px] xl:text-[10px] font-semibold tracking-[0.03em] uppercase font-body">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className="relative flex items-center gap-1 py-1.5 whitespace-nowrap text-[#1A1A1A] hover:text-[#E9202E] transition-colors duration-200"
                  >
                    <span className="relative z-10">{link.label}</span>
                    {link.children && (
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    {/* Soft Red Underline that shines on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E9202E] rounded-full transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_#E9202E,0_0_12px_rgba(233,32,46,0.4)]" />
                  </a>
                  {link.children && (
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-[95]">
                      <div className="min-w-[240px] bg-white/98 backdrop-blur-2xl border border-[#1A1A1A]/10 rounded-2xl shadow-xl p-2">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-3.5 py-2.5 rounded-lg text-[11px] font-semibold normal-case tracking-normal text-[#1A1A1A] hover:bg-[#F8EEF0] hover:text-[#E9202E] transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold tracking-[0.08em] uppercase text-white bg-[#E9202E] hover:bg-[#1A1A1A] rounded-full transition-all duration-200 shadow-xs hover:shadow-sm active:scale-98 whitespace-nowrap cursor-pointer font-body"
            >
              <span>Book Heather</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#1A1A1A] hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          Mobile Drawer: Includes Topic Search + Links + CTA
          ========================================================================= */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden transition-all duration-300 ${
            scrolled
              ? 'w-full bg-white/98 backdrop-blur-2xl border-b border-[#1A1A1A]/10 px-4 sm:px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200'
              : 'max-w-7xl mx-auto px-3 sm:px-6 mt-2'
          }`}
        >
          <div
            className={
              scrolled
                ? 'max-w-7xl mx-auto'
                : 'bg-white/98 backdrop-blur-2xl border border-[#1A1A1A]/10 rounded-2xl p-6 shadow-xl animate-in slide-in-from-top-3 duration-200'
            }
          >
            {/* Mobile Topic Search Bar */}
            <div className="mb-5">
              <label className="block text-[10px] font-semibold tracking-wider uppercase text-[#4D4D4D] mb-2 font-body">
                Search Topics
              </label>
              <div className="flex items-center bg-[#FAFAFA] border border-[#1A1A1A]/15 rounded-full px-3.5 py-2 focus-within:border-[#E9202E]">
                <Search className="w-4 h-4 text-[#1A1A1A]/60 mr-2 shrink-0 animate-twist-icon" />
                <input
                  type="text"
                  placeholder="Confidence, Resilience, Mindset..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-[#1A1A1A] focus:outline-none w-full font-body"
                />
              </div>

              {/* Mobile Quick Topic Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {['Mindset', 'Resilience', 'Confidence', 'Branding'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      setMobileMenuOpen(false);
                      const el = document.getElementById('keynotes');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#F8EEF0] text-[#E9202E] border border-[#F2C9CD] hover:bg-[#E9202E] hover:text-white transition-colors font-body"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 border-t border-[#1A1A1A]/10 pt-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-[#1A1A1A]/5">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold tracking-wide uppercase text-[#1A1A1A] hover:text-[#E9202E] transition-colors py-2 font-body flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                  {link.children && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[13px] text-[#4D4D4D] hover:text-[#E9202E] transition-colors py-1 font-body"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center py-3 text-xs font-semibold tracking-[0.1em] uppercase text-white bg-[#E9202E] hover:bg-[#1A1A1A] rounded-full transition-colors font-body shadow-sm"
                >
                  Book Heather to Speak
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
