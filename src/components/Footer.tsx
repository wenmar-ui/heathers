import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/content';
import { HeatherLogo } from './HeatherLogo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterSent(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/theheathermonahan/' },
    { label: 'Instagram', href: 'https://www.instagram.com/heathermonahan/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/' },
    { label: 'X / Twitter', href: 'https://twitter.com/heathermonahan' },
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#1A1A1A] text-white/70 text-xs font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#" className="inline-block" aria-label="Heather Monahan - Home">
              <HeatherLogo
                color="#FFFFFF"
                className="h-8 sm:h-9 w-auto object-contain opacity-95 select-none"
              />
            </a>
            <p className="mt-4 text-xs sm:text-sm text-white/75 font-normal leading-relaxed max-w-sm">
              Real Leaders Top 50 Keynote Speaker in the World, two-time bestselling author, podcast host, and founder of Boss In Heels. Empowering leaders globally to step into unshakeable confidence.
            </p>

            {/* Social channels */}
            <div className="flex flex-wrap gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#E9202E] transition-colors flex items-center gap-1 group"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-[#E9202E] transition-colors">
                  Meet Heather Monahan
                </a>
              </li>
              <li>
                <a href="#keynotes" className="hover:text-[#E9202E] transition-colors">
                  Keynote Presentations
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-[#E9202E] transition-colors">
                  Bestselling Books
                </a>
              </li>
              <li>
                <a href="#podcast" className="hover:text-[#E9202E] transition-colors">
                  Creating Confidence Podcast
                </a>
              </li>
              <li>
                <a href="#praise" className="hover:text-[#E9202E] transition-colors">
                  Meeting Planner Praise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E9202E] transition-colors">
                  Book Heather to Speak
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Opt-in */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-2">
              The Monday Confidence Shot
            </p>
            <p className="text-xs text-white/75 font-normal mb-4 leading-relaxed">
              Join 100,000+ ambitious executives who receive Heather’s high-impact Monday morning strategies for leadership courage and career acceleration.
            </p>

            {newsletterSent ? (
              <div className="p-3 bg-white/5 border border-[#E9202E]/60 rounded-sm flex items-center gap-2 text-white">
                <CheckCircle2 className="w-4 h-4 text-[#E9202E] shrink-0" />
                <span className="text-xs">You're subscribed! Check your inbox Monday at 8 AM.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-sm text-xs text-white focus:outline-none focus:border-[#E9202E]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold uppercase tracking-[0.1em] text-[11px] rounded-sm transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Boss In Heels, LLC & Heather Monahan. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Speaker Bureau Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
