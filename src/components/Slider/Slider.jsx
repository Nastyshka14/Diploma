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
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: (
    //   <div>
    //     <div className={styles.next__slick_arrow}></div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className={styles.prev__slick_arrow}></div>
    //   </div>
    // ),
  };

  const slidesData = [
    {
      id: 1,
      src: "https://a.lmcdn.ru/bs2/2/69/w_1788x1122_ru_by.jpg",
      label: "",
    },
    {
      id: 2,
      src: "https://a.lmcdn.ru/pi/bs894x561/2/10/w_1788x1122_6555_az.jpeg",
      label: "",
    },
    {
      id: 3,
      src: "https://a.lmcdn.ru/pi/bs894x561/0/79/w_hp_1_warm-winter-collections.jpg",
      label: "Ut recusandae vel vitae molestiae id soluta.",
    },
  ];

  return (
    <div className={styles.slider}>
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
