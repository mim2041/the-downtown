import React from "react";
import TopTicker from "./TopTicker";
import FeaturedCard from "./FeaturedCard";
import TwoUpGrid from "./TwoUpGrid";
import {
  middleFeatured,
  middleTicker,
  middleTwoUp,
} from "@/src/data/MiddleBlogData";

const Blog = () => {
  return (
    <section className="">
      <TopTicker items={middleTicker} />
      <FeaturedCard data={middleFeatured} />
      <TwoUpGrid items={middleTwoUp} />
    </section>
  );
};

export default Blog;