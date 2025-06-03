import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
}

const Quiz = ({ questions, title }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Тест завершен! 🎉</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {percentage}%
            </div>
            <p className="text-gray-600">
              Правильных ответов: {score} из {questions.length}
            </p>
          </div>
          <Button onClick={restartQuiz} className="w-full">
            Пройти тест снова
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline">
            {currentQuestion + 1} / {questions.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonClass =
                "w-full p-3 text-left rounded-lg border transition-all ";

              if (showResult) {
                if (index === questions[currentQuestion].correctAnswer) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (selectedAnswer === index) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                }
              } else {
                buttonClass +=
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult &&
                      index === questions[currentQuestion].correctAnswer && (
                        <span className="text-green-600 font-semibold">
                          ✓ Правильно
                        </span>
                      )}
                    {showResult &&
                      selectedAnswer === index &&
                      index !== questions[currentQuestion].correctAnswer && (
                        <span className="text-red-600 font-semibold">
                          ✗ Неверно
                        </span>
                      )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showResult && questions[currentQuestion].explanation && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-1">Объяснение:</h4>
            <p className="text-blue-800 text-sm">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}

        <Button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="w-full"
        >
          {currentQuestion + 1 === questions.length
            ? "Завершить тест"
            : "Следующий вопрос"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Quiz;
