import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
const SectiontThree = () => {
  return (
    <section className="container mx:auto md:px-20 py-20">
      <h1 className="font-bold text-4xl py-12 text-center">
        Most Popular Post
      </h1>
      <Swiper slidesPerView={2}>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SectiontThree;

function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={"/images/Code.jpg"} width={300} height={100} />
          </a>
        </Link>
      </div>
      <div className="info flexjustify-center flex-col py">
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
          <div className="title">
            <Link href={"/"}>
              <a className="text-3xl md:text-4xl  font-bold text-gray-800 hover:text-gray-500">
                Your most unhappy customers are your greatest source of learning{" "}
              </a>
            </Link>
          </div>
          <p className="txt-gray-500 py-4">
            {" "}
            In my previous experience at Cloud Clearwater, I developed several
            web-based applications for a project management software client.
            These cloud-based applications tracked and managed information
            technology project information for several of the world's largest
            financial companies
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
}
