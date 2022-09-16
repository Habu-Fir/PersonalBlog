import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
const SectiontThree = () => {
  const { data, isLoading, isError } = Fetcher("api/popular");
  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div>
        <Error />
      </div>
    );
  return (
    <section className="container mx:auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">
        Most Popular Post
      </h1>
      <Swiper slidesPerView={2} loop={true} autoplay={{ delay: 2000 }}>
        {data.map((value, index) => (
          <SwiperSlide key={index}>{<Post data={value}></Post>}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectiontThree;

function Post({ data }) {
  const { id, category, img, published, title, description, author } = data;
  return (
    <div className="grid space-x-2">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={img} width={300} height={100} />
          </a>
        </Link>
      </div>
      <div className="info flexjustify-center flex-col py">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-900">{category}</a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">{published}</a>
          </Link>
          <div className="title">
            <Link href={"/"}>
              <a className="text-3xl md:text-4xl  font-bold text-gray-800 hover:text-gray-500">
                {title}
              </a>
            </Link>
          </div>
          <p className="txt-gray-500 py-4">{description}</p>
          <Author />
        </div>
      </div>
    </div>
  );
}
