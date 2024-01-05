import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CarouselContens = ({ items }) => {
  return (
    <div className="my-10 px-4 lg:px-24 h-full">
      <div className="h-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full cursor-pointer"
          style={{ height: "100%" }}
        >
          {items.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="relative h-full">
                {/* Container with fixed width and height */}
                <div className="w-64 h-64">
                  {/* Image fitting inside the container */}
                  <img
                    src={item.imageURL}
                    className="w-full h-full object-cover"
                    alt={`Slide ${item._id}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselContens;
