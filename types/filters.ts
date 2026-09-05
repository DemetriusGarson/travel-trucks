export interface Filters {
  forms: ('alcove' | 'panel_van' | 'integrated' | 'semi_integrated')[];
  transmissions: ('automatic' | 'manual')[];
  engines: ('diesel' | 'petrol' | 'hybrid' | 'electric')[];
}

export interface FiltersData {
  location: string | null;
  form: 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated' | null;
  transmission: 'automatic' | 'manual' | null;
  engine: 'diesel' | 'petrol' | 'hybrid' | 'electric' | null;
}
