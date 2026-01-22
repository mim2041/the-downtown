"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

type TickerItem = {
  id: number;
  title: string;
  image: { src: string };
};

export default function TopTicker({
  items,
}: {
  items: TickerItem[];
}) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full  bg-white p-3">
      <div className="flex items-stretch">
        <button
          className=" sm:flex w-8 items-center justify-center border border-gray-200 text-gray-500 hover:text-black"
          aria-label="Previous"
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ‹
        </button>

        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="!w-full"
          >
            {items.map((it, idx) => (
              <SwiperSlide key={it.id}>
                <div
                  className={[
                    "flex items-center gap-3 px-4 py-3",
                    idx !== items.length - 1
                      ? ""
                      : "",
                  ].join(" ")}
                >
                  <img
                    src={it.image.src}
                    alt={it.title}
                    className="h-12 w-12 shrink-0 object-cover"
                  />
                  <p className="text-[11px] font-semibold leading-snug text-gray-900">
                    {it.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className=" sm:flex w-8 items-center justify-center border border-gray-200 text-gray-500 hover:text-black"
          aria-label="Next"
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
}


