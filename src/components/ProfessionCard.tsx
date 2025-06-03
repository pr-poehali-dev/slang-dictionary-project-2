import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ProfessionCardProps {
  title: string;
  description: string;
  termCount: number;
  englishTermCount: number;
  quizCount: number;
  image: string;
  route: string;
  color: string;
}

const ProfessionCard = ({
  title,
  description,
  termCount,
  englishTermCount,
  quizCount,
  image,
  route,
  color,
}: ProfessionCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${color} border-0`}
      onClick={() => navigate(route)}
    >
      <CardHeader className="pb-4">
        <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-white/50">
            {termCount} терминов
          </Badge>
          <Badge variant="secondary" className="bg-white/50">
            {englishTermCount} English
          </Badge>
          <Badge variant="secondary" className="bg-white/50">
            {quizCount} вопросов
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionCard;
