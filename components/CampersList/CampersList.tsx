'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import css from './CampersList.module.css';
import { getCampers } from '@/lib/api/api';
import { useFiltersStore } from '@/lib/store/filtersStore';
import Image from 'next/image';

export default function CampersList() {
  const filtersData = useFiltersStore(state => state.filters);
  //   console.log('CampersList filtersData:');
  //   console.log(filtersData);

  const {
    data,
    // fetchNextPage,
    // hasNextPage,
    // isFetchingNextPage,
    // isLoading,
    // isError,
    // isFetched,
  } = useInfiniteQuery({
    queryKey: ['campers', filtersData],
    queryFn: async ({ pageParam }) => {
      return await getCampers({
        filters: filtersData,
        page: pageParam,
        perPage: 4,
      });
    },
    initialPageParam: 1,
    getNextPageParam: lastResponse => {
      const nextPage = lastResponse.page + 1;
      return nextPage <= lastResponse.totalPages ? nextPage : undefined;
    },
    // enabled: isAuthenticated,
    select: data => {
      return {
        ...data,
        campers: data.pages.flatMap(page => page.campers),
      };
    },
  });

  const campers = data?.campers ?? [];
  console.log(campers);
  return (
    <>
      <div className={css.container}>
        <ul className={css.campersList}>
          {campers.map(camper => {
            return (
              <li key={camper.id} className={css.campersItem}>
                <div className={css.contentWrapper}>
                  <Image
                    className={css.coverImage}
                    src={camper.coverImage}
                    width={219}
                    height={240}
                    alt={camper.description}
                  />
                  <div className={css.infoWrapper}>
                    <div className={css.textWrapper}>
                      <div className={css.titleWrapper}>
                        <p className={css.camperTitle}>{camper.name}</p>
                        <p className={css.camperPrice}>{`€${camper.price}`}</p>
                      </div>
                      <div className={css.detailsWrapper}>
                        <div className={css.reviewWrapper}>
                          <svg className={css.iconStar} width={20} height={20}>
                            <use
                              href="/sprite.svg#icon-star"
                              aria-hidden="true"
                            ></use>
                          </svg>
                          <p
                            className={css.camperRating}
                          >{`${camper.rating}(${camper.totalReviews} Reviews)`}</p>
                        </div>
                        <div className={css.locationWrapper}>
                          <svg className={css.iconMap} width={16} height={16}>
                            <use
                              href="/sprite.svg#icon-map"
                              aria-hidden="true"
                            ></use>
                          </svg>
                          <p className={css.camperLocation}>
                            {camper.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className={css.supportingText}>{camper.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button type="button" className={css.loadMoreButton}>
          Load More
        </button>
      </div>
    </>
  );
}
