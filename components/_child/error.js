import Image from "next/image";
import React from "react";

export default function error() {
  return (
    <div className="text-center py-10">
      <Image src={"/images/notfound.jpg"} width={400} height={400}></Image>
      <h1 className="text-3xl font-bold text-orange-600 py-10 ">
        Something went wrong
      </h1>
    </div>
  );
}
