import Link from "next/link";
import Image from "next/image";
import Author from "./author";

const RelatedComp = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-12 ">Related </h1>
      <div className="flex flex-col gap-10">
        {post()}
        {post()}
        {post()}
      </div>
    </section>
  );
};

export default RelatedComp;

function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/Code.jpg"}
              className="rounded"
              width={300}
              height={200}
            />
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
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-500">
              Your most unhappy customers are your greatest source of learning{" "}
            </a>
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
}
