"use client";

import { useMemo, useState } from "react";

import FeaturedInsight from "./FeaturedInsight";
import InsightCard from "./InsightCard";
import InsightTabs from "./InsightTabs";

import {
  insightCategories,
  insights,
} from "./insightData";

export default function InsightGrid() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const featuredArticle = insights.find(
    (item) => item.featured
  );

  const filteredInsights = useMemo(() => {
    let filtered = insights.filter(
      (item) => !item.featured
    );

    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category === activeCategory
      );
    }

    return filtered;
  }, [activeCategory]);

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-container px-6 lg:px-12">
        {/* Tabs */}
        <InsightTabs
          categories={insightCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Featured */}
        {featuredArticle && (
          <div className="mb-10">
            <FeaturedInsight article={featuredArticle} />
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredInsights.map((article, index) => (
            <InsightCard
              key={index}
              article={article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}