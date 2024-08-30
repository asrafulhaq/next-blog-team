import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ item }) => {
  return (
    <div className="blog-item bg-white shadow p-4 rounded-lg my-3 flex justify-start gap-4">
      <Image
        width={300}
        height={300}
        src={item.photo}
        alt="Prothom Alo"
        className="object-cover"
      />
      <div className="blog-content">
        <h2 className="font-bold text-2xl">{item.title}</h2>

        <p className="line-clamp-3">{item.desc}</p>

        <Link
          className="p-3 bg-blue-600 text-white table my-2 rounded-md"
          href={`/blog/${item.id}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
