import React from "react";
import Slider from "react-slick";
import blackShoe from "./img/blackShoe.jpg";
import greenShoe from "./img/greenShoe.jpg";

const SliderCom = () => {
  const settings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider className="classTest" {...settings}>
        <div className="!flex items-center bg-[#f5f6f7] ">
          <div className="px-6">
            <div className="text-6xl font-bold">Lorem ipsum dolor</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              architecto animi tempora eius ipsum ipsa at incidunt ratione
              maxime cum. A voluptas enim similique quibusdam dolor harum aut
              animi iste?
            </div>
            <div className="border border-black rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center">Review</div>
          </div>
          <img className="h-[300px]" src={blackShoe} alt="" />
        </div>
        <div className="!flex items-center bg-[#b3e140]">
          <div className="px-6">
            <div className="text-6xl font-bold">Lorem ipsum dolor</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              architecto animi tempora eius ipsum ipsa at incidunt ratione
              maxime cum. A voluptas enim similique quibusdam dolor harum aut
              animi iste?
            </div>
            <div className="border border-black rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center">Review</div>
          </div>
          <img className="h-[300px]" src={greenShoe} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCom;
