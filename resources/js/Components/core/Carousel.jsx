import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();

export default function Carousel({ children }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperEl = swiperElRef.current;

    Object.assign(swiperEl, {
      slidesPerView: 2,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },

      slideTo: {
        speed: 8000,
      },
    });
    swiperEl.initialize();
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      pagination="false"
      space-between="30"
      navigation
      autoplay-disable-on-interaction="false"
    >
      {children.map((child, index) => (
        <swiper-slide key={index}>
          <div className="p-4">{child}</div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
