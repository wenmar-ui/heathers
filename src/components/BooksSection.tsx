import React, { useState } from 'react';
import { BOOKS } from '../data/content';
import { BookOpen, ExternalLink, Download, CheckCircle, Package } from 'lucide-react';

interface BooksSectionProps {
  onOpenBooking: (topic?: string) => void;
}

export const BooksSection: React.FC<BooksSectionProps> = ({ onOpenBooking }) => {
  const [downloadModalBook, setDownloadModalBook] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadModalBook(null);
      setEmailInput('');
    }, 3000);
  };

  return (
    <section id="books" className="py-24 bg-[#FAFAFA] border-t border-[rgba(217,217,217,0.7)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.20em] uppercase text-[#E9202E] mb-3 font-body">
            <BookOpen className="w-3.5 h-3.5 text-[#E9202E]" />
            <span>Two-Time Bestselling Author</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif-display font-normal text-[#1A1A1A] tracking-tight leading-tight mb-4">
            Required Reading for Fearless Leaders.
          </h2>
          <p className="text-base text-[#4D4D4D] font-normal leading-[1.7] font-body">
            Heather’s books provide the actionable blueprints that have guided hundreds of thousands of readers across 40+ countries to step into their power.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-[rgba(217,217,217,0.7)] rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#E88A90] transition-colors shadow-xs"
            >
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
                  {/* Book 3D Cover */}
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="w-44 sm:w-full aspect-[3/4] rounded-sm overflow-hidden shadow-md border border-[rgba(217,217,217,0.8)] bg-white">
                      <img
                        src={book.coverImage}
                        alt={`Book cover of ${book.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Book Metadata & Title */}
                  <div className="sm:col-span-7">
                    {/* Clean unboxed review metadata without star cliches */}
                    <div className="flex items-center gap-2 text-xs text-[rgba(26,26,26,0.6)] font-body mb-2">
                      <span className="font-semibold text-[#1A1A1A]">{book.rating}</span>
                      <span aria-hidden="true" className="text-[rgba(217,217,217,0.7)]">·</span>
                      <span>{book.reviewCount}</span>
                    </div>

                    <h3 className="text-2xl font-serif-display font-medium text-[#1A1A1A] leading-snug mb-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#E9202E] font-semibold uppercase tracking-[0.14em] mb-3 font-body">
                      {book.subtitle}
                    </p>
                    <p className="text-xs text-[#4D4D4D] font-normal leading-[1.7] mb-4 font-body">
                      {book.description}
                    </p>
                  </div>
                </div>

                {/* Endorsement Quotes (Playfair Display italic in white cards) */}
                <div className="space-y-3 mb-6 pt-4 border-t border-[rgba(217,217,217,0.7)]">
                  {book.endorsements.map((end, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-sm bg-[#FAFAFA] border border-[rgba(217,217,217,0.7)] text-xs"
                    >
                      <p className="font-serif-display italic text-[#1A1A1A] text-sm leading-relaxed mb-1.5">"{end.quote}"</p>
                      <p className="text-[11px] text-[#E9202E] font-semibold font-body uppercase tracking-wider">
                        {end.author} <span className="text-[#4D4D4D] font-normal lowercase tracking-normal">· {end.role}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Retailers & Free Sample */}
              <div className="pt-4 border-t border-[rgba(217,217,217,0.7)]">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs uppercase tracking-[0.14em] text-[#4D4D4D] font-medium font-body">
                    Order Your Copy:
                  </span>
                  <button
                    onClick={() => setDownloadModalBook(book.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E9202E] hover:text-[#1A1A1A] transition-colors cursor-pointer font-body underline decoration-[rgba(232,138,144,0.55)] underline-offset-4"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Free Chapter</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {book.retailers.map((ret) => (
                    <a
                      key={ret.name}
                      href={ret.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-center rounded-sm bg-[#FAFAFA] hover:bg-[#F8EEF0] border border-[rgba(217,217,217,0.8)] hover:border-[#E88A90] text-xs font-medium text-[#1A1A1A] hover:text-[#E9202E] transition-colors flex items-center justify-center gap-1 group font-body"
                    >
                      <span>{ret.name}</span>
                      <ExternalLink className="w-3 h-3 text-[#4D4D4D] group-hover:text-[#E9202E] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Bulk Order Banner in Blush (#F8EEF0) */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#F8EEF0] border border-[rgba(232,138,144,0.4)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-white text-[#E9202E] border border-[rgba(232,138,144,0.4)] flex items-center justify-center shrink-0">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif-display font-medium text-[#1A1A1A]">
                Bulk Books for Conference Attendees & Corporate Teams
              </h4>
              <p className="text-xs text-[#4D4D4D] font-normal mt-1 max-w-xl font-body leading-relaxed">
                Add 100 to 5,000+ hardcover copies to your keynote contract. Includes customized corporate bookplate stickers and an exclusive VIP author book-signing session.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Bulk Book Order for Keynote Event')}
            className="px-6 py-3.5 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.08em] rounded-sm transition-all whitespace-nowrap cursor-pointer font-body shadow-xs hover:shadow-sm"
          >
            Inquire About Bulk Pricing
          </button>
        </div>
      </div>

      {/* Free Chapter Download Modal */}
      {downloadModalBook && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md bg-white border border-[rgba(217,217,217,0.8)] rounded-sm p-6 sm:p-8 shadow-xl">
            {downloadSuccess ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-[#E9202E] mx-auto mb-3" />
                <h3 className="text-lg font-serif-display font-medium text-[#1A1A1A] mb-1">
                  Chapter Sent to Your Inbox!
                </h3>
                <p className="text-xs text-[#4D4D4D] font-body">
                  Check your email for your exclusive preview of {downloadModalBook}.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(217,217,217,0.7)]">
                  <h3 className="text-base font-serif-display font-medium text-[#1A1A1A]">
                    Free Chapter: {downloadModalBook}
                  </h3>
                  <button
                    onClick={() => setDownloadModalBook(null)}
                    className="text-[#4D4D4D] hover:text-[#1A1A1A] cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-[#4D4D4D] mb-4 font-body leading-relaxed">
                  Enter your executive email to instantly receive Chapter 1 and the accompanying workbook exercises.
                </p>
                <form onSubmit={handleDownloadSubmit} className="space-y-4 font-body">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] mb-1.5">
                      Business Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAFAFA] border border-[rgba(217,217,217,0.8)] rounded-sm text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E9202E]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E9202E] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.08em] rounded-sm transition-colors cursor-pointer shadow-xs"
                  >
                    Send Me Free Chapter 1
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
