import { KeynoteTopic, Book, PodcastEpisode, Testimonial, EngagementLogo } from '../types';

export const ASSETS = {
  logo: '/heather.svg',
  logoWhite: '/heather-white.svg',
  heroPortrait: '/src/assets/images/hero_heather_portrait_1791397793131.jpg',
  heroDenimCutout: '/Glamorous Blonde Denim Cutout.png',
  heroDenimCutoutAsset: '/src/assets/images/heather_denim_cutout_1791479069441.jpg',
  confidenceCreatorBook: '/src/assets/images/book_confidence_creator_1791397812575.jpg',
  overcomeVillainsBook: '/src/assets/images/book_overcome_villains_1791397825701.jpg',
  speakingStage: '/src/assets/images/speaking_stage_keynote_1791397841387.jpg',
};

export const PREVIOUS_ENGAGEMENT_LOGOS: EngagementLogo[] = [
  {
    id: 'google',
    name: 'Google',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2021/05/Google-Speaker-Heather-Monahan.png',
    category: 'Technology',
  },
  {
    id: 'molson-coors',
    name: 'Molson Coors',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2021/05/Molson-Coors-logo-2.png',
    category: 'Enterprise',
  },
  {
    id: 'ypo',
    name: 'YPO',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2021/05/YPO-logo-2.png',
    category: 'Leadership Network',
  },
  {
    id: 'entrepreneurs-organization',
    name: "Entrepreneurs' Organization",
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2021/05/Entrepreneurs-Organization-logo-2.png',
    category: 'Global Network',
  },
  {
    id: 'bny-mellon',
    name: 'BNY Mellon',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo1.jpg',
    category: 'Finance',
  },
  {
    id: 'big-brothers-big-sisters',
    name: 'Big Brothers Big Sisters of Miami',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo2.jpg',
    category: 'Nonprofit',
  },
  {
    id: 'fiu',
    name: 'Florida International University',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo3.jpg',
    category: 'Education',
  },
  {
    id: 'university-of-miami',
    name: 'University of Miami',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo4.jpg',
    category: 'Education',
  },
  {
    id: 'wnba',
    name: 'WNBA',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo5.jpg',
    category: 'Sports & Entertainment',
  },
  {
    id: 'mgm',
    name: 'MGM Resorts',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo6.jpg',
    category: 'Hospitality',
  },
  {
    id: 'horizon-media',
    name: 'Horizon Media',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo7.jpg',
    category: 'Media & Advertising',
  },
  {
    id: 'zenith',
    name: 'Zenith',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo8.jpg',
    category: 'Media Agency',
  },
  {
    id: 'cumulus-media',
    name: 'Cumulus Media',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo9.jpg',
    category: 'Broadcasting',
  },
  {
    id: 'entercom',
    name: 'Entercom',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo10.jpg',
    category: 'Media',
  },
  {
    id: 'iheartmedia',
    name: 'iHeartMedia',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo11.jpg',
    category: 'Audio & Media',
  },
  {
    id: 'boise-state',
    name: 'Boise State University',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo12.jpg',
    category: 'Education',
  },
  {
    id: 'miami-dade-college',
    name: 'Miami Dade College',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo13.jpg',
    category: 'Education',
  },
  {
    id: 'blue-449',
    name: 'Blue 449',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo14.jpg',
    category: 'Media Agency',
  },
  {
    id: 'greenberg-traurig',
    name: 'Greenberg Traurig',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo15.jpg',
    category: 'Legal',
  },
  {
    id: 'she-summit-bacardi',
    name: 'S.H.E. Summit Bacardi',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo16.jpg',
    category: 'Leadership & Brand',
  },
  {
    id: 'royal-caribbean',
    name: 'Royal Caribbean',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo17.jpg',
    category: 'Travel & Hospitality',
  },
  {
    id: 'city-year',
    name: 'City Year',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo18.jpg',
    category: 'Civic Leadership',
  },
  {
    id: 'nab',
    name: 'National Association of Broadcasters (NAB)',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo19.jpg',
    category: 'Industry Association',
  },
  {
    id: 'books-and-books',
    name: 'Books & Books',
    imageUrl: 'https://heathermonahan.com/wp-content/uploads/2018/10/media-kit-logo20.jpg',
    category: 'Publishing & Retail',
  },
];

export const TRUST_CLIENTS = [
  { name: 'Google', category: 'Tech' },
  { name: 'Amazon', category: 'Tech' },
  { name: 'Harvard University', category: 'Education' },
  { name: 'Verizon', category: 'Telecom' },
  { name: 'MGM Resorts', category: 'Hospitality' },
  { name: 'Morgan Stanley', category: 'Finance' },
  { name: 'Salesforce', category: 'Tech' },
  { name: 'Deloitte', category: 'Consulting' },
];

export const MEDIA_FEATURES = [
  'Forbes',
  'Bloomberg TV',
  'Today Show',
  'Steve Harvey Show',
  'CNN Business',
  'Real Leaders Top 50',
  'Success Magazine',
  'USA Today',
];

export const KEYNOTE_TOPICS: KeynoteTopic[] = [
  {
    id: 'confidence-creator',
    title: 'The Confidence Creator: Elevate Your Mindset & Take Unstoppable Action',
    subtitle: 'Building the daily psychological stamina required to thrive through disruption and change',
    description:
      'Confidence is not an innate personality trait reserved for the lucky few; it is a measurable muscle that can be systematically trained. In this high-energy keynote, Heather pulls back the curtain on how she transitioned from corporate executive to international entrepreneur by developing unshakeable self-belief. Audiences leave energized, equipped with concrete drills to immediately conquer imposter syndrome, eliminate hesitation, and execute with boldness.',
    takeaways: [
      'The 3 psychological traps that drain workplace confidence and how to dismantle them in minutes',
      'How to stop waiting for external permission and step into proactive ownership',
      'A daily 5-minute mental workout to silence imposter syndrome before high-stakes pitches',
      'The compounding effect of micro-courage in driving team performance and innovation',
    ],
    bestFor: 'Annual Conferences, All-Hands Summits, Global Leadership Forums',
    duration: '45 - 60 Minutes (plus optional 15-minute Q&A)',
    category: 'Mindset',
  },
  {
    id: 'overcome-your-villains',
    title: 'Overcome Your Villains: The 3-Step BAK Framework for Breakthroughs',
    subtitle: 'How to neutralize negative influences, conquer internal doubt, and achieve your biggest goals',
    description:
      'Based on Heather’s bestselling book "Overcome Your Villains", this transformative session introduces Heather’s proprietary 3-Step BAK (Beliefs, Actions, Knowledge) method. Whether facing toxic organizational politics, unexpected career derailments, or internal fears of failure, participants learn to dissect obstacles with emotional detachment and turn adversity into their greatest commercial competitive advantage.',
    takeaways: [
      'Master the BAK Method: Auditing limiting beliefs, shifting micro-actions, and acquiring lethal knowledge',
      'How to spot organizational "villains" without getting derailed by office politics',
      'Reframing high-stakes rejections as the exact springboard to executive advancement',
      'Action plans for boundary-setting and maintaining unwavering momentum during turbulence',
    ],
    bestFor: 'Executive Retreats, Sales Kickoffs, Mid-Year Growth Summits',
    duration: '45 - 75 Minutes',
    category: 'Leadership',
  },
  {
    id: 'harnessing-disruption',
    title: 'Harnessing Disruption as a Catalyst for Exponential Growth',
    subtitle: 'Transforming sudden industry shifts, downsizing, and market changes into unfair market advantages',
    description:
      'When Heather was unexpectedly fired from her role as Chief Revenue Officer of a multi-billion dollar media powerhouse, she had two choices: surrender to defeat or leverage disruption as her launching pad. In this riveting address, Heather teaches audiences how top performers navigate uncertainty, pivot faster than competitors, and uncover breakthrough revenue opportunities hiding inside chaos.',
    takeaways: [
      'The Agility Blueprint: Converting rapid market volatility into team motivation',
      'How to maintain strategic poise and decision speed under intense pressure',
      'Rewriting corporate narratives: from "victim of market change" to "driver of category disruption"',
      'Practical tools for resilient team morale during restructuring and mergers',
    ],
    bestFor: 'Industry Conventions, Enterprise Leadership Summits, Tech & Change Keynotes',
    duration: '45 - 60 Minutes',
    category: 'Leadership',
  },
  {
    id: 'confident-sales-team',
    title: 'The Confident Sales Team: Closing Multi-Million Dollar Deals with Authenticity',
    subtitle: 'Why authentic conviction outsells scripted pitches every single time',
    description:
      'Having led nationwide media sales teams generating hundreds of millions in advertising revenue, Heather understands the precise psychology of elite dealmakers. Clients do not buy pitch decks—they buy the unshakeable certainty of the person across the table. Heather delivers tactical strategies to accelerate sales pipelines, conquer call reluctance, and build deeply loyal enterprise relationships.',
    takeaways: [
      'The Certainty Transfer: Why buyers feel your confidence before they hear your pitch',
      'Eliminating call reluctance and fear of rejection in new account acquisition',
      'How to command the C-suite room and hold firm on premium pricing',
      'Building genuine client trust that turns single transactions into multi-year contracts',
    ],
    bestFor: 'Sales Kickoffs (SKO), Revenue Summits, Commercial Enablement Conferences',
    duration: '60 Minutes (Workshop expansion available)',
    category: 'Sales',
  },
  {
    id: 'confident-woman-in-business',
    title: 'Becoming a Confident Woman in Modern Business',
    subtitle: 'Breaking glass ceilings, claiming your seat at the table, and owning your true market value',
    description:
      'As one of very few women to reach the C-suite in commercial media broadcasting, Heather knows the unique obstacles female professionals face—from being talked over in boardrooms to negotiating compensation. This empowering session provides women leaders with the strategic playbook to advocate for themselves without apology, build cross-functional alliances, and accelerate their career trajectory.',
    takeaways: [
      'Negotiating like an executive: How to articulate your ROI and command your worth',
      'Overcoming the "perfectionist trap" that holds ambitious women back from applying for leadership roles',
      'Body language, vocal projection, and boardroom presence secrets from 20 years in media',
      'Creating reciprocal sponsor and mentor relationships that open executive doors',
    ],
    bestFor: 'Women in Leadership Summits, ERG Conferences, Diversity & Inclusion Gatherings',
    duration: '45 - 60 Minutes',
    category: 'Women in Business',
  },
];

export const BOOKS: Book[] = [
  {
    id: 'overcome-your-villains',
    title: 'Overcome Your Villains',
    subtitle: 'Mastering Your Inner Dialogue, Overcoming Toxic People, and Breaking Limiting Beliefs',
    description:
      'In "Overcome Your Villains", Heather delivers a step-by-step masterclass on navigating adversity, silencing inner critics, and breaking past toxic individuals standing in the way of your ambitions. Introducing the revolutionary 3-Step BAK process (Beliefs, Actions, Knowledge), this bestselling guide provides the exact tactical playbook needed to flip negative energy into unstoppable momentum.',
    coverImage: ASSETS.overcomeVillainsBook,
    rating: '4.9 / 5.0',
    reviewCount: '1,450+ Reviews',
    endorsements: [
      {
        quote: 'Heather Monahan is a powerhouse. Overcome Your Villains gives you the exact tools to step up, speak out, and take control of your destiny.',
        author: 'Mel Robbins',
        role: 'Bestselling Author & Speaker',
      },
      {
        quote: 'A must-read for anyone who feels stuck or held back by circumstances. Heather shows you how to turn obstacles into rocket fuel.',
        author: 'Gary Vaynerchuk',
        role: 'CEO of VaynerMedia & Serial Entrepreneur',
      },
    ],
    retailers: [
      { name: 'Amazon', url: 'https://www.amazon.com', format: 'Hardcover & Kindle' },
      { name: 'Audible', url: 'https://www.audible.com', format: 'Audiobook (Narrated by Heather)' },
      { name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com', format: 'Hardcover' },
      { name: 'Books-A-Million', url: 'https://www.booksamillion.com', format: 'Hardcover' },
    ],
  },
  {
    id: 'confidence-creator',
    title: 'Confidence Creator',
    subtitle: 'How to Build Confidence, Claim Your Seat, and Unleash Your Potential',
    description:
      'Heather’s breakout bestselling debut details her climb through corporate America and the shocking betrayal that ended in her termination from the C-suite. Rather than giving in to despair, she broke down the exact formula of how confidence is built, repaired, and weaponized to achieve extraordinary breakthroughs.',
    coverImage: ASSETS.confidenceCreatorBook,
    rating: '4.8 / 5.0',
    reviewCount: '2,200+ Reviews',
    endorsements: [
      {
        quote: 'Raw, honest, and wildly practical. Confidence Creator will change how you view your own power and your future.',
        author: 'Sara Blakely',
        role: 'Founder of SPANX',
      },
      {
        quote: 'If you want practical advice on how to build confidence from someone who has lived it in the highest corporate boardrooms, read this book.',
        author: 'Ed Mylett',
        role: 'Host of The Ed Mylett Show',
      },
    ],
    retailers: [
      { name: 'Amazon', url: 'https://www.amazon.com', format: 'Paperback & Kindle' },
      { name: 'Audible', url: 'https://www.audible.com', format: 'Audiobook' },
      { name: 'Barnes & Noble', url: 'https://www.barnesandnoble.com', format: 'Paperback' },
      { name: 'Apple Books', url: 'https://books.apple.com', format: 'Digital Edition' },
    ],
  },
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-mel-robbins',
    title: 'The High 5 Habit & How to Overcome Debilitating Self-Doubt',
    guest: 'Mel Robbins',
    guestRole: 'New York Times Bestselling Author',
    duration: '48 min',
    publishDate: 'Recent Release',
    description:
      'Mel Robbins sits down with Heather to unpack why so many high achievers struggle to celebrate their wins, the neurobiology of self-encouragement, and how a simple morning habit resets your entire day.',
    tags: ['Mindset', 'Neuroscience', 'Habits'],
  },
  {
    id: 'ep-gary-vee',
    title: 'Auditory Self-Awareness & Building an Unapologetic Personal Brand',
    guest: 'Gary Vaynerchuk',
    guestRole: 'Chairman of VaynerX & CEO of VaynerMedia',
    duration: '52 min',
    publishDate: 'Fan Favorite',
    description:
      'GaryVee joins Heather to discuss tuning out the critics, why accountability is the ultimate peace of mind, and how to stay radically authentic in an age of social media algorithms.',
    tags: ['Branding', 'Sales', 'Resilience'],
  },
  {
    id: 'ep-sara-blakely',
    title: 'Failing Your Way to a Billion-Dollar Empire',
    guest: 'Sara Blakely',
    guestRole: 'Founder of SPANX',
    duration: '55 min',
    publishDate: 'Classic Episode',
    description:
      'Sara reveals the early days of cold calling department store buyers with zero funding, reframing failure as a badge of effort, and maintaining infectious enthusiasm against all odds.',
    tags: ['Entrepreneurship', 'Sales', 'Innovation'],
  },
  {
    id: 'ep-heather-solo',
    title: 'The 3-Step BAK Framework: How to Reprogram Your Inner Monologue',
    guest: 'Heather Monahan',
    guestRole: 'Solo Masterclass',
    duration: '34 min',
    publishDate: 'Masterclass',
    description:
      'Heather breaks down how listeners can audit their inner circle, identify unconscious fear triggers, and use micro-wins to create unshakeable momentum before entering difficult meetings.',
    tags: ['Tactical', 'Leadership', 'Confidence'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Heather Monahan was the absolute highlight of our Global Sales Summit. She received a standing ovation from 2,500 enterprise executives and our team is still quoting her 3-Step BAK framework months later. High energy, authentic, and immediately applicable.',
    author: 'Sarah Jenkins',
    title: 'VP of Global Events & Enablement',
    company: 'Enterprise Tech & Cloud Summit',
    event: 'Global Annual Kickoff (Las Vegas)',
    rating: 5,
    category: 'Sales Kickoff',
  },
  {
    id: 'test-2',
    quote:
      'We book dozens of speakers every year, but Heather’s ability to connect on a human level while providing heavyweight executive strategies is unmatched. Our post-conference survey rated her keynote 4.98 out of 5—the highest in our 12-year history.',
    author: 'Marcus Vance',
    title: 'Chief People Officer',
    company: 'Fortune 100 Financial Services',
    event: 'Executive Leadership Symposium',
    rating: 5,
    category: 'Leadership',
  },
  {
    id: 'test-3',
    quote:
      'Heather brought the house down! Her story of overcoming sudden career disruption resonated deeply with our retail leadership team during our brand transformation. She delivered the exact shot of inspiration and courage our organization needed.',
    author: 'Elena Rostova',
    title: 'Senior Director of Talent & Culture',
    company: 'Global Hospitality Group',
    event: 'National Managers Conference (Chicago)',
    rating: 5,
    category: 'Corporate',
  },
  {
    id: 'test-4',
    quote:
      'If you want a speaker who talks WITH your audience rather than AT them, hire Heather Monahan. Her vulnerability about getting fired from the C-suite followed by her meteoric rise gave our attendees the license to be audacious.',
    author: 'Claire D’Agostino',
    title: 'President & Board Chair',
    company: 'National Women in Leadership Network',
    event: 'Women’s Executive Summit',
    rating: 5,
    category: 'Women',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'How do I book Heather Monahan for our upcoming event?',
    a: 'You can submit the booking form below or have your speaker bureau reach out directly. Our team reviews event dates, themes, and formats within 24 hours to verify Heather’s calendar availability and provide tailored fee quotes.',
  },
  {
    q: 'Does Heather customize her keynote presentations for our company?',
    a: 'Yes! Heather conducts a dedicated pre-event discovery call with meeting planners and executive stakeholders to understand your company’s unique culture, goals, current challenges, and terminology, ensuring the keynote resonates seamlessly.',
  },
  {
    q: 'Can we include copies of Heather’s bestselling books for attendees?',
    a: 'Absolutely. Bulk book packages (discounted hardcover copies of "Overcome Your Villains" or "Confidence Creator") can be bundled directly into your keynote contract, often accompanied by a personalized VIP book signing session onsite.',
  },
  {
    q: 'Does Heather provide virtual keynotes and webinars?',
    a: 'Yes, Heather regularly delivers high-impact virtual keynotes broadcast directly from her professional multi-camera studio with interactive polling, live chat integration, and moderated Q&A.',
  },
];
