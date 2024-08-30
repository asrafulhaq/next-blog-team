import getSingleDevs from "@/libs/getSingleDevs";
import Image from "next/image";
import Link from "next/link";
import Team from "@/public/team1.png";

const page = async ({ params }) => {
  const { name, skill, photo } = await getSingleDevs(params.userId);

  return (
    <div className="bg-white  m-10 p-10 w-[700px] rounded-xl">
      <Image width={200} height={200} src="/team1.png" alt="" />
      <h1 className="font-bold">{name}</h1>
      <Link href="/team">Back</Link>
    </div>
  );
};

export default page;
