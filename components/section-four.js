import Author from "./_child/author";
import Image from "next/image";
import Link from "next/link";

const SectionFour = () => {
  return (
    <section className="coontainer mx:auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Football</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Entertaiment</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/Code.jpg"}
              className="rounded"
              width={300}
              height={250}
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
