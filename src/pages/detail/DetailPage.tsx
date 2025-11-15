import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchAnimeDetail, clearDetail } from "@/store/slices/detailSlice";
import DetailSkeleton from "@/components/ui/DetailSkeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useAppSelector((state) => state.detail);

  useEffect(() => {
    if (id) dispatch(fetchAnimeDetail(id));

    return () => {
      dispatch(clearDetail());
    };
  }, [id]);

  if (isLoading) return <DetailSkeleton />;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 pb-16">
      {/* Floating Back Button */}
      <div className="sticky top-4 left-4 z-50 px-6">
        <Button
          variant="outline"
          className="rounded-full shadow-md hover:shadow-lg transition"
          onClick={() => navigate(-1)}
        >
          ← Back
        </Button>
      </div>

      {/* HEADER SECTION */}
      <div className="w-full bg-white/40 backdrop-blur-xl border-b border-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Anime Image */}
          <div className="relative w-full md:w-1/3">
            <img
              src={data.images.jpg.large_image_url}
              className="w-full rounded-2xl shadow-xl object-cover"
            />

            {/* Score Badge */}
            {data.score && (
              <Badge className="absolute top-3 right-3 bg-yellow-500 text-white text-sm font-semibold shadow-lg">
                ⭐ {data.score}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              {data.title}
            </h1>

            {/* Synopsis */}
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
              {data.synopsis || "No synopsis available."}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap gap-2 mt-4">
              {data.year && (
                <Badge variant="outline" className="px-3 py-1 rounded-full">
                  Year: {data.year}
                </Badge>
              )}
              {data.status && (
                <Badge variant="outline" className="px-3 py-1 rounded-full">
                  {data.status}
                </Badge>
              )}
              {data.rating && (
                <Badge variant="outline" className="px-3 py-1 rounded-full">
                  {data.rating}
                </Badge>
              )}
              {data.episodes && (
                <Badge variant="secondary" className="px-3 py-1 rounded-full">
                  {data.episodes} episodes
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS CARD */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <Card className="p-6 shadow-sm border-gray-200 rounded-2xl bg-white/90 backdrop-blur">
          <h2 className="text-xl font-bold mb-4">Anime Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <p>
              <strong className="font-semibold text-gray-900">Episodes:</strong>{" "}
              {data.episodes || "?"}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Score:</strong>{" "}
              {data.score || "-"}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Rank:</strong> #
              {data.rank || "-"}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Status:</strong>{" "}
              {data.status || "-"}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Rating:</strong>{" "}
              {data.rating || "-"}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Year:</strong>{" "}
              {data.year || "-"}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
