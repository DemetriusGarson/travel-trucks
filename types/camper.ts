export interface CamperItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: 'automatic' | 'manual';
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric';
  amenities: string[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
}

export interface CamperById {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: 'automatic' | 'manual';
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric';
  amenities: string[];
  gallery: CamperImageEntity[];
  createdAt: string;
  updatedAt: string;
}

export interface CamperImageEntity {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}
