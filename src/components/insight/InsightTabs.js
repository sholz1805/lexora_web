export default function InsightTabs({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
            activeCategory === category
              ? "bg-signal text-paper"
              : "bg-paper text-ink hover:bg-panel"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}