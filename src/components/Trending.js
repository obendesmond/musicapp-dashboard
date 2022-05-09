import React from "react";
import { trending } from "../data/trendingData";
import CategoryTitle from "./CategoryTitle";
import TrendingSingle from "./TrendingSingle";

export default function Trending() {
  const determinePosition = i => {
    const pos = (i + 1).toString();
    if (pos.length === 1) {
      return "0" + pos;
    } else return pos;
  };
  return (
    <div className="flex flex-col space-y-4">
      <CategoryTitle title="Trending" />
      <div className="flex flex-col space-y-6">
        {trending.map(({ title, artist, type, len }, i) => (
          <TrendingSingle
            key={i}
            title={title}
            artist={artist}
            type={type}
            len={len}
            position={determinePosition(i)}
          />
        ))}
      </div>
    </div>
  );
}
