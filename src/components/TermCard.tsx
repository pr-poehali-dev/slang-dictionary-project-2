import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TermCardProps {
  term: string;
  definition: string;
  englishTerm?: string;
  type: "russian" | "english";
}

const TermCard = ({ term, definition, englishTerm, type }: TermCardProps) => {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{term}</h3>
          <Badge
            variant={type === "russian" ? "default" : "secondary"}
            className="ml-2"
          >
            {type === "russian" ? "RU" : "EN"}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{definition}</p>
        {englishTerm && (
          <p className="text-blue-600 text-sm mt-2 font-medium">
            🇬🇧 {englishTerm}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TermCard;
