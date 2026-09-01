import { Camper } from '@/types/camper';
import { FiltersData } from '@/types/filters';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://campers-api.goit.study',
});

interface GetCampersRequest {
  filters: FiltersData;
  page: number;
  perPage: number;
}

interface GetCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export async function getCampers({
  filters,
  page,
  perPage,
}: GetCampersRequest): Promise<GetCampersResponse> {
  const { data } = await api.get<GetCampersResponse>('/campers', {
    params: {
      ...filters,
      page,
      perPage,
    },
  });
  return data;
}
