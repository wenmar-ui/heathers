import { useState } from 'react';
import { TopMailingListBar } from './components/TopMailingListBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { OverviewSection } from './components/OverviewSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { VideoReelModal } from './components/VideoReelModal';
import { ConfidenceAuditModal } from './components/ConfidenceAuditModal';
import { SpeakerKitModal } from './components/SpeakerKitModal';
import { ApplicationModal } from './components/ApplicationModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isSpeakerKitModalOpen, setIsSpeakerKitModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState<string | undefined>(undefined);

  const scrollToBooking = (topicTitle?: string) => {
    if (topicTitle) {
      setBookingTopic(topicTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-body selection:bg-[#E9202E] selection:text-white">
      {/* Before the nav bar: Mailing list signup container (scrolls up with page, not sticky) */}
      <TopMailingListBar />

      <main className="flex-1 relative bg-white">
        {/* Transparent Header in Hero Area */}
        <Navbar onOpenBooking={() => scrollToBooking()} />

        {/* Slanted Editorial Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenVideoReel={() => setIsVideoModalOpen(true)}
          onOpenApplication={() => setIsApplicationModalOpen(true)}
        />

        {/* Global Clients & Media Logo Marquee */}
        <TrustMarquee />

        {/* 70/30 Executive Profile & Digital Mentor Section with Sticky Right Column */}
        <OverviewSection
          onOpenApplication={() => setIsApplicationModalOpen(true)}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* Executive Praise & Testimonials Section */}
        <TestimonialsSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoReelModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookNow={() => {
          setIsVideoModalOpen(false);
          scrollToBooking();
        }}
        onViewKeynotes={() => {
          setIsVideoModalOpen(false);
        }}
        onOpenSpeakerKit={() => {
          setIsVideoModalOpen(false);
          setIsSpeakerKitModalOpen(true);
        }}
      />

      <ConfidenceAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onSelectKeynote={(topic) => {
          setIsAuditModalOpen(false);
          scrollToBooking(topic);
        }}
      />

      <SpeakerKitModal
        isOpen={isSpeakerKitModalOpen}
        onClose={() => setIsSpeakerKitModalOpen(false)}
        onBookNow={() => {
          setIsSpeakerKitModalOpen(false);
          scrollToBooking();
        }}
      />

      {/* 3-Step Transformation Application Modal */}
      <ApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      />
    </div>
  );
}
