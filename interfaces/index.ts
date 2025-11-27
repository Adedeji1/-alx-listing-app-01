export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;

  gallery?: string[];

  reviews?: {
    user: string;
    comment: string;
    rating: number;
  }[];

  host?: {
    name: string;
    avatar?: string;
    about?: string;
  };
}
