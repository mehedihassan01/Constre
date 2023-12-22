/* eslint-disable react/prop-types */

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useState } from "react";
import {

  MdOutlineChair,
} from "react-icons/md";

const KeenSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper Container">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className=" group">
              <div className="service-card-img ">
                <img src="/images/service-1.jpg" alt="img" />
              </div>

              <div className=" relative z-[1] w-full -top-[30px] left-[30px] [box-shadow:0_0_16px_rgb(0_0_0_/_10%)] pt-[25px] px-[30px] pb-[40px] bg-[#fff]">
                <div className="absolute -top-[40px] right-[60px] bg-[#fff] px-[24px] py-[25px] rounded-[50%] transition:all [box-shadow:0_0_60px_rgb(0_0_0_/_10%)]  ">
                  <span className="service-chair-outline">
                    <MdOutlineChair className="text-[35px] text-SecondaryColor-0 group-hover:text-white transition:all duration-500 " />
                  </span>
                </div>

                <h1 className="text-[#0a1027] text-[27px] font-Yantramanav font-bold  my-1">
                  Architecture
                </h1>
                <p className=" text-[#565969] font-Archivo">
                  A factory is a business that produces goods or products goods
                  can range from consumer products such as clothing
                </p>
                <button className="primary-btn2">Read More</button>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </div>
      {/* dot function */}
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};
export default KeenSlider;
