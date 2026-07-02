export interface Sweet {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: 'popular' | 'signature' | 'traditional' | 'fresh';
  type: 'sweet' | 'dairy';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
