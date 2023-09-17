import React from "react";
import Carousel from "./Carousel";



const Arrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
};

export default function Slider() {
  return (
    <div className="w-[70%]">
      <Carousel {...settings} /* className="[&_.slick-track]:space-x-2" */>
        <div className="h-[190px] lg:h-[256px]">
          <img
            className="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1649251855096-f8beda8f6b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
        <div className="h-[190px] lg:h-[256px]">
          <img
            className="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1649251855096-f8beda8f6b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
        <div className="h-[190px] lg:h-[256px]">
          <img
            className="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1649251855096-f8beda8f6b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}
