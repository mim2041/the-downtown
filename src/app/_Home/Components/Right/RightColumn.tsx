import React from "react";
import { FaClock } from "react-icons/fa";

type Article = {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: { src: string };
};

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="mb-6 px-6 md:px-0 md:pr-6 lg:px-0 lg:pr-0">
      <div className="bg-white">
        <div className="relative w-full ">
        <img
          src={article.image.src}
          alt={article.title}
          className="h-[200px] w-full object-cover sm:h-[240px]"
        />
        <span
          className={`absolute left-3 top-3 ${article.categoryColor} px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white`}
        >
          {article.category}
        </span>
      </div>

      <div className="px-6 py-5">
        <h2 className="text-lg font-extrabold leading-tight text-gray-900 sm:text-xl">
          {article.title}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-[12px] text-gray-400">
          <span>
            by{" "}
            <span className="font-bold uppercase text-black">
              {article.author}
            </span>
          </span>
          <div className="flex items-center gap-1 text-gray-500">
            <FaClock className="w-3 h-3" />
            <span>{article.date}</span>
          </div>
        </div>

        <p className="mt-4  leading-relaxed text-gray-500">
          {article.excerpt}
        </p>
      </div>
      </div>
    </article>
  );
}

export default function RightColumn({
  articles,
}: {
  articles: Article[];
}) {
  return (
    <section className="">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}

