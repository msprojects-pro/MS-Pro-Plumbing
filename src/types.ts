/**
 * Types and Interfaces for MS Pro Plumbing & Heating
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  iconName: string; // Used to dynamic render Lucide icons
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'plumbing' | 'heating' | 'boiler' | 'bathroom';
  imageUrl: string;
  description: string;
}

export interface ContactFormInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface QuoteFormInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: 'routine' | 'urgent' | 'emergency';
  message: string;
}
