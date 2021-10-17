import styles from "./Slider.module.css";
import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SliderContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className={styles.next__slick_arrow}></div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className={styles.prev__slick_arrow}></div>
      </div>
    ),
  };

  const slidesData = [
    {
      id: 1,
      src: "https://a.lmcdn.ru/bs2/2/69/w_1788x1122_ru_by.jpg",
      label: "Dolorem officiis temporibus.",
    },
    {
      id: 2,
      title:
        "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2021/microsoftteams-image-(10).png",
      label: "Officia non provident dolor esse et neque.",
    },
    {
      id: 3,
      src: "https://imgcdn.zarina.ru/upload/iblock/d49/d494327a6d85b74f898c9fb410e2aeef.jpg",
      label: "Ut recusandae vel vitae molestiae id soluta.",
    },
  ];

  return (
    <div className="App">
      <div className={styles.slider__wrapper}>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div className={styles.slick__slide} key={slide.id}>
              <img className={styles.slick__slide_image} src={slide.src} />
              <label className={styles.slick__slide_label}>{slide.label}</label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
