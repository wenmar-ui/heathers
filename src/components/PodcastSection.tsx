import React, { useState } from 'react';
import { PODCAST_EPISODES } from '../data/content';
import { Mic, Play, Pause, ExternalLink, Headphones, Radio } from 'lucide-react';

export const PodcastSection: React.FC = () => {
  const [playingEpisodeId, setPlayingEpisodeId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingEpisodeId(playingEpisodeId === id ? null : id);
  };

  return (
    <section id="podcast" className="py-24 bg-white border-t border-[rgba(217,217,217,0.7)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b border-[rgba(217,217,217,0.7)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.20em] uppercase text-[#E9202E] mb-3 font-body">
              <Mic className="w-3.5 h-3.5 text-[#E9202E]" />
              <span>Creating Confidence with Heather Monahan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif-display font-normal text-[#1A1A1A] tracking-tight leading-tight">
              Top 10 Business & Career Podcast.
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 flex flex-wrap items-center gap-3">
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAFAFA] hover:bg-[#F8EEF0] border border-[rgba(217,217,217,0.8)] rounded-sm text-xs font-medium text-[#1A1A1A] hover:text-[#E9202E] transition-colors font-body shadow-xs"
            >
              <Headphones className="w-3.5 h-3.5 text-[#E9202E]" />
              <span>Apple Podcasts</span>
              <ExternalLink className="w-3 h-3 text-[#4D4D4D]" />
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAFAFA] hover:bg-[#F8EEF0] border border-[rgba(217,217,217,0.8)] rounded-sm text-xs font-medium text-[#1A1A1A] hover:text-[#E9202E] transition-colors font-body shadow-xs"
            >
              <Radio className="w-3.5 h-3.5 text-[#E9202E]" />
              <span>Spotify</span>
              <ExternalLink className="w-3 h-3 text-[#4D4D4D]" />
            </a>
          </div>
        </div>

        {/* Featured Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PODCAST_EPISODES.map((ep) => {
            const isPlaying = playingEpisodeId === ep.id;
            return (
              <div
                key={ep.id}
                className={`p-6 sm:p-8 rounded-sm border transition-all ${
                  isPlaying
                    ? 'bg-white border-[#E9202E] shadow-sm'
                    : 'bg-[#FAFAFA] border-[rgba(217,217,217,0.7)] hover:border-[#E88A90] hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    {/* Unboxed metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[rgba(26,26,26,0.6)] mb-2 font-body">
                      <span className="text-[#E9202E] font-semibold">{ep.guest}</span>
                      <span aria-hidden="true" className="text-[rgba(217,217,217,0.7)]">·</span>
                      <span>{ep.guestRole}</span>
                      <span aria-hidden="true" className="text-[rgba(217,217,217,0.7)]">·</span>
                      <span className="font-medium text-[11px]">{ep.duration}</span>
                    </div>
                    <h3 className="text-xl font-serif-display font-medium text-[#1A1A1A] leading-snug">
                      {ep.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => togglePlay(ep.id)}
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-xs ${
                      isPlaying
                        ? 'bg-[#E9202E] text-white scale-105'
                        : 'bg-white text-[#E9202E] hover:bg-[#E9202E] hover:text-white border border-[rgba(217,217,217,0.8)]'
                    }`}
                    aria-label={isPlaying ? 'Pause episode preview' : 'Play episode preview'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                <p className="text-xs sm:text-[13px] text-[#4D4D4D] font-normal leading-[1.7] mb-5 font-body">
                  {ep.description}
                </p>

                {/* Animated Audio Waveform when Playing in Blush Container */}
                {isPlaying && (
                  <div className="p-3.5 mb-5 rounded-sm bg-[#F8EEF0] border border-[rgba(232,138,144,0.5)] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 h-5">
                      {[...Array(16)].map((_, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#E9202E] rounded-full animate-pulse"
                          style={{
                            height: `${Math.max(25, ((i % 5) + 1) * 20)}%`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#E9202E] font-body">
                      Playing audio preview excerpt...
                    </span>
                  </div>
                )}

                {/* Tags unboxed */}
                <div className="flex items-center gap-2 text-[11px] text-[rgba(26,26,26,0.6)] pt-4 border-t border-[rgba(217,217,217,0.6)] font-body">
                  <span className="text-[#1A1A1A] font-semibold uppercase tracking-wider text-[10px]">Themes:</span>
                  {ep.tags.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {idx < ep.tags.length - 1 && <span aria-hidden="true" className="text-[rgba(217,217,217,0.7)]">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Podcast Host Credentials Banner */}
        <div className="mt-12 text-center text-xs text-[#4D4D4D] font-body">
          <span>Weekly episodes released every Tuesday on Apple Podcasts, Spotify, iHeart, and YouTube.</span>
        </div>
      </div>
    </section>
  );
};
