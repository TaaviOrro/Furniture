export type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  location?: string;
  description?: string;
  subtitle?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimal Stand',
    price: '$50',
    category: 'Tables',
    subtitle: 'Wooden design',
    location: 'New York, USA',
    description:
      'A modern table stand with clean lines and durable construction. Perfect for small apartments and minimalist rooms.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '2',
    name: 'Coffee Table',
    price: '$120',
    category: 'Tables',
    subtitle: 'Soft cushions',
    location: 'Los Angeles, USA',
    description:
      'A warm wooden coffee table with a timeless silhouette and premium finish. Ideal for living rooms and lounges.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '3',
    name: 'Minimal Lamp',
    price: '$30',
    category: 'Chairs',
    subtitle: 'Modern lighting',
    location: 'Austin, USA',
    description:
      'A sleek modern lamp with soft ambient lighting. A minimalist touch for cozy corners or bedside tables.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: '4',
    name: 'Soft Sofa',
    price: '$320',
    category: 'Sofas',
    subtitle: 'Plush cushions',
    location: 'Chicago, USA',
    description:
      'A comfortable sofa with plush cushions and elegant curves. Great for relaxing in style after a long day.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
];
