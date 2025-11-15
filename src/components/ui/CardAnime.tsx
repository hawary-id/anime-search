import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  image: string;
  score?: number;
  year?: number;
}

export default function CardAnime({ id, title, image, score, year }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/detail/${id}`)}
      className="p-3 cursor-pointer hover:shadow-lg transition-all duration-200 rounded-lg border border-gray-200 hover:scale-[1.02] bg-white"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] md:h-[350px] object-cover rounded-md"
        />

        {score && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-yellow-500 text-white font-bold shadow">
              ⭐ {score}
            </Badge>
          </div>
        )}
      </div>

      <div className="mt-3 space-y-2">
        <p className="font-semibold text-sm line-clamp-2">{title}</p>

        {year && (
          <Badge variant="secondary" className="text-xs">
            {year}
          </Badge>
        )}
      </div>
    </Card>
  );
}
