import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, release_date, poster_path, id }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="shadow-lg rounded-md overflow-hidden transition-transform duration-200 ease-out transform hover:scale-105">
      <Link href={`/${id}`} legacyBehavior>
        <a className="block relative overflow-hidden">
          <Image
            src={imagePath + poster_path}
            width={800}
            height={800}
            alt={title}
            priority
            className="w-full h-full object-cover"
          />
        </a>
      </Link>
      <div className="bg-black p-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-gray-500 text-sm">{release_date}</p>
      </div>
    </div>
  );
}