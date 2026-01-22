import React from "react";
import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

type Featured = {
  category: string;
  title: string;
  author: string;
  date: string;
  comments: number;
  excerpt: string;
  image: { src: string };
};

export default function FeaturedCard({ data }: { data: Featured }) {
  return (
    <article className="my-6 lg:my-10 border border-gray-200 bg-white">
      <div className="w-full z-1">
        <img
          src={data.image.src}
          alt={data.title}
          className="h-[280px] w-full object-cover sm:h-[380px]"
        />
      </div>

      <div className="lg:relative lg:h-[250px] w-full px-6 py-6 p-6">
        <div className="lg:absolute left-6 right-6 bg-white lg:px-6 lg:py-4 -top-16 z-10">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
          {data.category}
        </span>

        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-black sm:text-[28px]">
          {data.title}
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-3 lg:gap-6 text-[11px] text-gray-400">
          <span>
            by{" "}
            <span className="font-bold uppercase  text-black">
              {data.author}
            </span>
            {" "}and 2 others
          </span>
          <div className="flex items-center gap-1 text-gray-500"><FaClock /> <span>{data.date}</span></div>
          <div className="text-gray-500 flex items-center gap-1"><FaRegComment className="w-4 h-4" /> <span>{data.comments}</span></div>
        </div>

        <p className="mt-4 leading-relaxed text-gray-500 t">
          {data.excerpt}
        </p>

        <button
          type="button"
          className="mt-6 border border-gray-300 bg-white px-5 py-2 text-[11px] font-semibold uppercase  text-gray-600 hover:border-black hover:text-black transition-colors"
        >
          Read More
        </button>
        </div>
      </div>
    </article>
  );
}


