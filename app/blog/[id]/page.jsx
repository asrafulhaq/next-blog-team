import { blogs } from "@/fake/data";
import getSinglePost from "@/libs/getSinglePost";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;

  const data = blogs.find((data) => data.id == id);

  return (
    <div className="single-blog w-[1000px]  mx-auto  shadow-sm rounded-lg bg-white mt-7 p-8">
      <Image src={data?.photo} alt="" width={1000} height={300} />
      <h1>{data?.title}</h1>
      <p>{data?.desc}</p>
    </div>
  );
};

export default page;
