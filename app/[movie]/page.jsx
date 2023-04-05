import Image from "next/image";
import { FiStar } from "react-icons/fi";
import { BsClock, BsFillInfoCircleFill } from "react-icons/bs";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mt-8 gap-6 p-4 bg-black rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-white">{res.title}</h1>
      <h2 className="text-lg text-gray-400">{new Date(res.release_date).getFullYear()}</h2>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <BsClock className="text-gray-400" /> 
          <span className="text-gray-400">{res.runtime} min</span>
        </div>
        <div className={`px-4 py-2 rounded-lg text-sm font-bold ${res.status === "Released" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-200"}`}>
          {res.status}
        </div>
      </div>
      <Image
        className="my-12 w-full rounded-lg shadow-md"
        src={`${imagePath}${res.backdrop_path}`}
        alt={res.title}
        width={1000}
        height={562}
        priority
      />
      <div className="text-lg leading-8 text-white">
        <p className="mb-4">{res.overview}</p>
        <div className="flex items-center gap-2">
          <FiStar className="text-yellow-500" />
          <span>{res.vote_average.toFixed(1)} ({res.vote_count} votes)</span>
        </div>
        <div className="flex items-center gap-2">
          <BsFillInfoCircleFill className="text-gray-400" />
          <span className="text-gray-400">{res.genres.map((genre) => genre.name).join(", ")}</span>
        </div>
      </div>
    </div>

  );
}