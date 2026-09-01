import { FiltersData } from '@/types/filters';
import { create } from 'zustand';

interface FiltersStore {
  filters: FiltersData;
  setFilters: (filters: FiltersData) => void;
  clearFilters: () => void;
}

export const useFiltersStore = create<FiltersStore>()(set => ({
  filters: { location: null, form: null, transmission: null, engine: null },
  setFilters: (filters: FiltersData) => {
    set(() => ({
      filters,
    }));
  },
  clearFilters: () => {
    set(() => ({
      filters: { location: null, form: null, transmission: null, engine: null },
    }));
  },
}));
