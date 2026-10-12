export interface KeynoteTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  takeaways: string[];
  bestFor: string;
  duration: string;
  category: 'Leadership' | 'Sales' | 'Mindset' | 'Women in Business';
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  rating: string;
  reviewCount: string;
  endorsements: { quote: string; author: string; role: string }[];
  retailers: { name: string; url: string; format: string }[];
}

export interface PodcastEpisode {
  id: string;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  publishDate: string;
  description: string;
  audioSampleUrl?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  event: string;
  rating: number;
  category: 'Corporate' | 'Sales Kickoff' | 'Leadership' | 'Women';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  eventDate: string;
  eventLocation: string;
  eventType: 'in-person' | 'virtual' | 'hybrid';
  audienceSize: string;
  selectedTopic: string;
  budgetRange: string;
  notes: string;
}

export interface EngagementLogo {
  id: string;
  name: string;
  imageUrl: string;
  category?: string;
}
