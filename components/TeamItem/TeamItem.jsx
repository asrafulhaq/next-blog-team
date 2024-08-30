import Image from "next/image";
import Link from "next/link";

const TeamItem = ({ item }) => {
  return (
    <div className="team-item shadow rounded-xl bg-white p-[50px]">
      <Image
        className="rounded-full object-cover w-[200px] h-[200px]"
        src={item.photo}
        alt="Photo"
        width={200}
        height={200}
      />
      <h2 className="mt-3 font-bold">{item.name}</h2>
      <p>{item.skill}</p>

      <Link
        className="py-3 px-8 bg-slate-600 rounded text-white mt-2 block"
        href={`/team/${item.id}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default TeamItem;
