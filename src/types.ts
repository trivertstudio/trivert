export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  isMandatory?: boolean;
  iconName: string;
  badge?: string;
  features: string[];
  image: string;
}

export interface AdditionalExtra {
  id: string;
  title: string;
  price: number;
  description: string;
  iconName: string;
}

export interface CalculatorState {
  selectedServiceIds: string[];
  selectedExtraIds: string[];
  diarias: number;
  clientName: string;
  eventDate: string;
  location: string;
  notes: string;
  whatsappNumber: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'institucional' | 'eventos' | 'reels' | 'drone' | 'comercial';
  categoryLabel: string;
  posterUrl: string;
  videoUrl: string;
  client: string;
  year: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
