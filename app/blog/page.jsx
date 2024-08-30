import BlogItem from "@/components/BlogItem";
import Skliton from "@/components/Skliton";
import { blogs } from "@/fake/data";
import getAllPosts from "@/libs/getAllPosts";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  const posts = blogs;

  return (
    <div className="blog-area mt-10 w-[1000px] mx-auto">
      <h1 className="text-5xl font-bold">Our Team</h1>
      <p className="font-normal mt-2 w-[1000px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati
        ratione alias aliquid sint nulla quae id eveniet dignissimos laborum?
      </p>

      <div className="blog-box">
        {posts.map((item) => {
          return (
            <Suspense key={item.id} fallback={<Skliton />}>
              <BlogItem item={item} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default page;
