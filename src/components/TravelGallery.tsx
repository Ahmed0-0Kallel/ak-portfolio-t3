import React from "react";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import userData from "../constatnts/data";

//Will be extended in the future

const TravelGallery: React.FC = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {userData.countries.map((country)=>(
                    <SwiperSlide > <img src={country.ImageUrl} className="mx-auto bg-gradient-to-b from-black rounded w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96" alt={country.Name} /></SwiperSlide>
        ))}
       
      </Swiper>
    );
};

export default TravelGallery;
