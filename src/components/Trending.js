import React from "react";
import CategoryTitle from "./CategoryTitle";
import TrendingSingle from "./TrendingSingle";

export default function Trending() {
  return (
    <div className="flex flex-col space-y-4">
      <CategoryTitle title="Trending" />
      <div className="flex flex-col space-y-6">
        <TrendingSingle />
        <TrendingSingle />
        <TrendingSingle />
        <TrendingSingle />
      </div>
    </div>
  );
}
