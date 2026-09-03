'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import css from './CamperSwiper.module.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { CamperImageEntity } from '@/types/camper';
import Image from 'next/image';

interface CamperSwiperProps {
  gallery: CamperImageEntity[];
}

export default function CamperSwiper({ gallery }: CamperSwiperProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.swipersWrapper}>
      <Swiper
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.swiperTop}
      >
        {gallery.map(image => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                src={image.original}
                alt={image.id}
                width={638}
                height={505}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.swiperBottom}
      >
        {gallery.map(image => {
          return (
            <SwiperSlide key={image.id} className={css.mySwiperSlide}>
              <Image
                src={image.thumb}
                alt={image.id}
                width={136}
                height={144}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
