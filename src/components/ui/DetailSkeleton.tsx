import { Card } from "@/components/ui/card";

export default function DetailSkeleton() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="h-[450px] bg-gray-300 rounded-lg"></div>
        </div>

        <div className="space-y-4 flex-1">
          <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-300 rounded w-2/3"></div>
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>

          <div className="mt-6 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
