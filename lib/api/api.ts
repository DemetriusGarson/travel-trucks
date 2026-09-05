import { CamperById, CamperItem } from '@/types/camper';
import { Filters, FiltersData } from '@/types/filters';
import { Review } from '@/types/review';
import { User } from '@/types/user';
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
  campers: CamperItem[];
}

export async function getFilters(): Promise<Filters> {
  const { data } = await api.get<Filters>('campers/filters');
  console.log(data);
  return data;
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

export async function getCamperById(camperId: string): Promise<CamperById> {
  const { data } = await api.get<CamperById>(`/campers/${camperId}`);
  // console.log(data);
  return data;
}

export async function getCamperByIdReviews(
  camperId: string
): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/campers/${camperId}/reviews`);
  return data;
}

interface PostBookingProps {
  camperId: string;
  user: User;
}

interface PostBookingResponse {
  message: string;
}

export async function postBooking({
  camperId,
  user,
}: PostBookingProps): Promise<PostBookingResponse> {
  const { data } = await api.post<PostBookingResponse>(
    `/campers/${camperId}/booking-requests`,
    user
  );
  // console.log(data);
  return data;
}
