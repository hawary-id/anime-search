import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setQuery,
  fetchAnime,
  clearResults,
  setPage,
} from "@/store/slices/searchSlice";
import { useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import CardAnime from "@/components/ui/CardAnime";
import { Button } from "@/components/ui/button";

export default function SearchPage() {
  const dispatch = useAppDispatch();
  const { query, results, isLoading, page, lastPage } = useAppSelector(
    (state) => state.search
  );

  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      dispatch(clearResults());
      return;
    }

    if (debouncedQuery.trim().length >= 2) {
      dispatch(fetchAnime({ query: debouncedQuery, page }));
    }
  }, [debouncedQuery, page]);

  return (
    <div className="min-h-screen w-full bg-white text-gray-800">
      <div
        className="
        w-full 
        bg-gradient-to-br from-indigo-600/10 via-purple-500/10 to-pink-500/10
        py-14 px-5 
        backdrop-blur-xl
        border-b border-gray-200
      "
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
            Discover Your Favorite Anime
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Search millions of anime titles—fast, smooth, beautiful.
          </p>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto relative">
            <Input
              placeholder="Search any anime... (Naruto, JJK, Bleach...)"
              className="
                h-14 text-lg rounded-2xl shadow-lg
                bg-white/60 backdrop-blur-md
                border border-gray-200
                transition-all duration-200
                focus-visible:ring-2 focus-visible:ring-indigo-400
                pl-5
              "
              value={query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
            />
          </div>

          {query.length >= 2 && (
            <p className="mt-3 text-sm text-gray-500">
              Showing results for:{" "}
              <span className="font-medium text-gray-800">{query}</span>
            </p>
          )}
        </div>
      </div>

      <div
        className="
        max-w-7xl mx-auto px-5 py-10
      "
      >
        {isLoading && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            gap-6 mt-4"
          >
            {[...Array(12)].map((_, i) => (
              <Card
                key={i}
                className="p-4 space-y-4 rounded-2xl shadow-sm animate-pulse"
              >
                <div className="h-[200px] md:h-[350px] bg-gray-300 rounded-xl"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && results.length === 0 && query.length >= 2 && (
          <div className="text-center py-20">
            <p className="text-2xl font-semibold text-gray-700">
              No results found 😢
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Try searching another title.
            </p>
          </div>
        )}

        {/* Results */}
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            gap-6 mt-4
          "
        >
          {results.map((anime) => (
            <CardAnime
              key={anime.mal_id}
              id={anime.mal_id}
              title={anime.title}
              image={anime.images.jpg.image_url}
              score={anime.score}
              year={anime.year}
            />
          ))}
        </div>

        {/* Pagination */}
        {results.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              disabled={page === 1}
              onClick={() => dispatch(setPage(page - 1))}
            >
              Previous
            </Button>

            <span className="text-gray-600 text-sm">
              Page {page} of {lastPage}
            </span>

            <Button
              variant="outline"
              disabled={page === lastPage}
              onClick={() => dispatch(setPage(page + 1))}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
