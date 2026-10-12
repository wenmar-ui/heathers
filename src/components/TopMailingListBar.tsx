import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';

export const TopMailingListBar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 4500);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/heathermonahanofficial/',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/heathermonahan.bsky.social',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 568 501" fill="currentColor">
          <path d="M123.121 33.664C188.241 82.552 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.209C492.35-.911 568-15.006 568 70.366c0 17.067-9.761 143.192-15.539 163.818-20.088 71.728-93.208 89.967-158.461 78.835 114.075 19.467 143.084 83.916 80.485 147.887-79.167 80.902-166.721-20.288-190.485-64.839-23.764 44.551-111.318 145.741-190.485 64.839-62.599-63.971-33.59-128.42 80.485-147.887-65.253 11.132-138.373-7.107-158.461-78.835C9.761 213.558 0 87.433 0 70.366 0-15.006 75.65-.911 123.121 33.664Z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@heathermonahan',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/heathermonahan',
      icon: (
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/theheathermonahan/',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@heathermonahan',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/stores/Heather-Monahan/author/B07DC6XQ2G',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 448 512" fill="currentColor">
          <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
        </svg>
      ),
    },
    {
      name: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/us/podcast/creating-confidence-with-heather-monahan/id1466190117',
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.25c4.832 0 8.75 3.918 8.75 8.75 0 2.21-.82 4.23-2.18 5.78l-1.33-1.12c1.07-1.24 1.71-2.87 1.71-4.66 0-3.83-3.12-6.95-6.95-6.95s-6.95 3.12-6.95 6.95c0 1.79.64 3.42 1.71 4.66l-1.33 1.12C4.07 16.23 3.25 14.21 3.25 12c0-4.832 3.918-8.75 8.75-8.75zm0 3.5c2.9 0 5.25 2.35 5.25 5.25 0 1.34-.5 2.56-1.33 3.5l-1.33-1.13c.54-.65.86-1.48.86-2.37 0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75c0 .89.32 1.72.86 2.37l-1.33 1.13c-.83-.94-1.33-2.16-1.33-3.5 0-2.9 2.35-5.25 5.25-5.25zm0 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm-.875 4.81h1.75l.44 5.69h-2.63l.44-5.69z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#F8EEF0] border-b border-[rgba(217,217,217,0.7)] text-[#1A1A1A] py-1.5 sm:py-2 px-3 sm:px-6 relative z-50 font-body">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Editorial Label + Social Icons with Brand Red (#E9202E) style matching the Mail icon */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5 shrink-0">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#E9202E]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] whitespace-nowrap">
              Sign Up To My Mailing List
            </span>
          </div>

          {/* Luxury Hairline Divider */}
          <span className="hidden sm:inline-block w-px h-3.5 bg-[#1A1A1A]/15 mx-0.5" />

          {/* Social Icons with hover twisting animation and #E9202E color identical to Search topics icon */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {socialLinks.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Heather Monahan on ${channel.name}`}
                title={channel.name}
                className="group/social w-6 h-6 rounded-full flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#E9202E] hover:bg-white/80 transition-colors duration-200 cursor-pointer"
              >
                <span className="animate-twist-icon inline-flex items-center justify-center">
                  {channel.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Text Bar and Sign Up Button / Confirmation */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-end">
          {isSubscribed ? (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E9202E] animate-in fade-in py-1">
              <Check className="w-3.5 h-3.5" />
              <span>Thank you for joining Heather's mailing list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full sm:w-auto max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-64 px-3 py-1 bg-white border border-[rgba(217,217,217,0.9)] rounded-sm text-xs text-[#1A1A1A] placeholder:text-[#4D4D4D]/60 focus:outline-none focus:border-[#E9202E] transition-colors font-body shadow-2xs"
                aria-label="Email address for mailing list"
              />
              <button
                type="submit"
                className="px-3.5 py-1 bg-[#E9202E] hover:bg-[#1A1A1A] text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] rounded-sm transition-colors whitespace-nowrap cursor-pointer shadow-2xs hover:shadow-xs font-body active:scale-98 shrink-0"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
