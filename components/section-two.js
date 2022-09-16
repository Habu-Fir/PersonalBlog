import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

const SectionTwo = () => {
  const { data, isLoading, isError } = Fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <section className="container mx-auto md:px-20 py-12">
      <h1 className="font-bold text-4xl py-12 text-center"> Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data?.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;

function Post({ data }) {
  const { id, category, img, published, title, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={img || "/"}
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flexjustify-center flex-col py">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-900">
              {category || "unknown"}
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">
              {published || "unknown"}
            </a>
          </Link>
          <div className="title">
            <Link href={"/"}>
              <a className="text-xl  font-bold text-gray-800 hover:text-gray-500">
                {title || "unknown"}
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
          {author ? <Author /> : <></>}
        </div>
      </div>
    </div>
  );
}
