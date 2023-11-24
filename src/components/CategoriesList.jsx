import Category from "./Category"
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useContext } from "react";
import { CategoryGlobalContext } from "../context/CategoryContext";

function CategoriesList() {
  const {categories} = useContext(CategoryGlobalContext)

  return (
    <section className="px-2">
      <Swiper
        className="text-xs pb-8"
        spaceBetween={8}
        modules={[Pagination, A11y]}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><Category /></SwiperSlide>
        {categories.map(ctg => <SwiperSlide key={ctg.id}><Category category={ctg} /></SwiperSlide>)}
      </Swiper>
    </section>
  )
}

export default CategoriesList