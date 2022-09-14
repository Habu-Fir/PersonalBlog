import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

const SectionOne = () => {
  SwiperCore.use(Autoplay);
  const bg = {
    background: "url('/images/banner2.jpg') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16 rounded" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionOne;

const Slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/Code.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-900">
              Website Development Solution{" "}
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">
              Septemper 15,2022
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-500">
              Your most unhappy customers are your greatest source of learning{" "}
            </a>
          </Link>
        </div>
        <p className="txt-gray-500 py-4">
          {" "}
          In my previous experience at Cloud Clearwater, I developed several
          web-based applications for a project management software client. These
          cloud-based applications tracked and managed information technology
          project information for several of the world's largest financial
          companies
        </p>
        <Author />
      </div>
    </div>
  );
};
