import React, { useState } from 'react';
import { KEYNOTE_TOPICS } from '../data/content';
import { Check, Clock, Users, ArrowRight, Sparkles, FileText } from 'lucide-react';

interface KeynotesSectionProps {
  onOpenBooking: (topicTitle?: string) => void;
  onOpenSpeakerKit: () => void;
}

export const KeynotesSection: React.FC<KeynotesSectionProps> = ({
  onOpenBooking,
  onOpenSpeakerKit,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState(KEYNOTE_TOPICS[0].id);

  const activeTopic =
    KEYNOTE_TOPICS.find((t) => t.id === selectedTopicId) || KEYNOTE_TOPICS[0];

  return (
    <section id="keynotes" className="py-24 bg-[#FAFAFA] border-t border-[rgba(217,217,217,0.7)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[rgba(217,217,217,0.7)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.20em] uppercase text-[#E9202E] mb-3 font-body">
              <Sparkles className="w-3.5 h-3.5 text-[#E9202E]" />
              <span>Signature Keynotes & Masterclasses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif-display font-normal text-[#1A1A1A] tracking-tight leading-tight">
              Speeches Crafted for High-Impact Breakthroughs.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={onOpenSpeakerKit}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.08em] text-[#1A1A1A] hover:text-[#E9202E] bg-white hover:bg-[#F8EEF0] border border-[rgba(217,217,217,0.8)] rounded-sm transition-colors cursor-pointer font-body shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#E9202E]" />
              <span>Download Speaker Kit (PDF)</span>
            </button>
          </div>
        </div>

        {/* Keynote Topics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Topic Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <p className="text-xs uppercase tracking-[0.18em] text-[#4D4D4D] font-semibold mb-1 font-body">
              Select Keynote Presentation:
            </p>
            {KEYNOTE_TOPICS.map((topic, index) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`text-left p-4 sm:p-5 rounded-sm border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-white border-l-[3px] border-l-[#E9202E] border-y-[rgba(217,217,217,0.7)] border-r-[rgba(217,217,217,0.7)] shadow-xs'
                      : 'bg-white border border-[rgba(217,217,217,0.7)] hover:border-[#E88A90] hover:bg-[#FAFAFA]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5 font-body">
                    <span className="font-semibold text-[#E9202E]">0{index + 1}</span>
                    <span className="text-[#4D4D4D] text-[11px] uppercase tracking-[0.14em] font-medium">
                      {topic.category}
                    </span>
                  </div>
                  <h3
                    className={`text-base font-serif-display font-medium leading-snug transition-colors ${
                      isSelected ? 'text-[#1A1A1A]' : 'text-[#4D4D4D]'
                    }`}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[rgba(26,26,26,0.6)] mt-2 line-clamp-2 font-normal font-body">
                    {topic.subtitle}
                  </p>

                  {isSelected && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:block text-[#E9202E]">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive on Active Topic */}
          <div className="lg:col-span-7 bg-white border border-[rgba(217,217,217,0.7)] rounded-sm p-6 sm:p-8 lg:p-10 shadow-xs relative">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[rgba(217,217,217,0.7)]">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E9202E] font-body">
                Keynote Overview
              </span>
              <div className="flex items-center gap-4 text-xs text-[#4D4D4D] font-body">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E9202E]" />
                  {activeTopic.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#E9202E]" />
                  {activeTopic.bestFor.split(',')[0]}
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-display font-normal text-[#1A1A1A] mt-6 mb-4">
              {activeTopic.title}
            </h3>

            <p className="text-base text-[#4D4D4D] leading-[1.7] font-normal mb-8 font-body">
              {activeTopic.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] mb-4 font-body">
                Core Audience Takeaways & Business ROI:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTopic.takeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)] text-xs text-[#1A1A1A] leading-relaxed font-body"
                  >
                    <Check className="w-4 h-4 text-[#E9202E] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience Note */}
            <div className="p-4 rounded-sm bg-[#F8EEF0] border border-[rgba(232,138,144,0.4)] text-xs text-[#4D4D4D] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-body">
              <div>
                <span className="text-[#1A1A1A] font-medium">Ideal Event Setting: </span>
                <span>{activeTopic.bestFor}</span>
              </div>
              <span className="text-[#E9202E] font-semibold text-[11px] shrink-0 uppercase tracking-wider">
                Tailored for Your Theme
              </span>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(217,217,217,0.7)]">
              <p className="text-xs text-[rgba(26,26,26,0.6)] font-body">
                Hold this keynote topic for your upcoming event date.
              </p>
              <button
                onClick={() => onOpenBooking(activeTopic.title)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.08em] rounded-sm transition-all shadow-xs hover:shadow-sm active:scale-98 cursor-pointer font-body"
              >
                <span>Inquire About This Keynote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Meeting Planner Promise Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-sm bg-white border border-[rgba(217,217,217,0.7)] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-xs text-[#4D4D4D] font-body">
          <div>
            <p className="text-[#1A1A1A] font-semibold uppercase tracking-[0.14em] mb-1.5">
              Zero-Friction Meeting Planner Experience
            </p>
            <p className="leading-relaxed">
              Heather and her management team deliver seamless coordination, pre-event tech checks, customized discovery calls, and punctual arrivals.
            </p>
          </div>
          <div>
            <p className="text-[#1A1A1A] font-semibold uppercase tracking-[0.14em] mb-1.5">
              Customized Executive Alignment
            </p>
            <p className="leading-relaxed">
              Every speech is adapted to mirror your company’s internal vernacular, strategic priorities, and organizational challenges.
            </p>
          </div>
          <div>
            <p className="text-[#1A1A1A] font-semibold uppercase tracking-[0.14em] mb-1.5">
              VIP Attendee Experiences
            </p>
            <p className="leading-relaxed">
              Option to include signed copies of her bestselling books, exclusive executive breakfast roundtables, and VIP photo meet-and-greets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
