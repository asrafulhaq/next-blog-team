import TeamItem from "@/components/TeamItem/TeamItem";
import getAllDevsData from "@/libs/getAllDevsData";

import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  const devs = await getAllDevsData();
  return (
    <div className="team-area mt-10">
      <h1 className="text-5xl font-bold text-center">Our Team</h1>
      <p className="text-center font-normal mt-2 w-[700px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus obcaecati
        ratione alias aliquid sint nulla quae id eveniet dignissimos laborum?
      </p>

      <div className="team-box flex w-[1100px] mx-auto mt-[50px] gap-3 text-center justify-center flex-wrap">
        {devs.map((item) => {
          return (
            <Suspense key={item.id} fallback={<h1>Loading . . . </h1>}>
              <TeamItem item={item} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default page;
