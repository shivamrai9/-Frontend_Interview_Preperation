import React, { useEffect, useRef, useState } from "react";

const AutoComleteBar = () => {
  const [searchData, setSearchData] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(null);
  const [cache, setCache] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef(null);

  const fetchData = async () => {
    const query = searchData.trim();

    if (!query) {
      setResult([]);
      return;
    }

    if (cache[query]) {
      return setResult(cache[query]);
    }

    try {
      setLoading(true)
      const data = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchData}`
      );
      const response = await data.json();
      setResult(response?.recipes || []);
      setLoading(false)
      setCache((prev) => ({
        ...prev,
        [query]: response?.recipes || [],
      }));
    } catch (error) {}
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchData]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResult(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (!searchData.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % result.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev - 1) % result.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      alert(`You selected: ${result[activeIndex].name}`);
      setShowResult(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4" ref={containerRef}>
      <h2 className="text-center font-bold text-xl mb-4">
        Auto Complete Search Input
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full border-none outline-none p-2 bg-gray-700 text-white rounded-xl font-mono"
          onFocus={() => setShowResult(true)}
          onChange={(e) => setSearchData(e.target.value)}
          onKeyDown={handleKeyDown}
          value={searchData}
        />

        {showResult && (
          <div className="absolute z-10 top-full mt-2 w-full bg-gray-800 border border-gray-600 rounded-xl max-h-64 overflow-y-auto">
            {loading ? (
              <div className="p-3 text-sm text-gray-300 font-mono">
                Loading...
              </div>
            ) : result.length > 0 ? (
              <ul className="flex flex-col gap-1 p-2">
                <li className="text-xs text-gray-400 font-semibold px-2">
                  Search Results
                </li>
                {result.map((reci, index) => (
                  <li
                    key={reci.id}
                    className={`cursor-pointer px-3 py-2 rounded font-mono ${
                      index === activeIndex
                        ? "bg-gray-600 text-white"
                        : "hover:bg-gray-700"
                    }`}
                    onMouseDown={() => {
                      alert(`You selected: ${reci.name}`);
                      setSearchData(reci.name);
                      setShowResult(false);
                    }}
                  >
                    {reci.name}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-3 text-sm text-gray-300 font-mono">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComleteBar;
