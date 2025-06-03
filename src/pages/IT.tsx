import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TermCard from "@/components/TermCard";
import Quiz from "@/components/Quiz";

const IT = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"terms" | "english" | "quiz">(
    "terms",
  );

  const russianTerms = [
    {
      term: "Фронтенд",
      definition:
        "Клиентская часть веб-приложения, с которой взаимодействует пользователь",
      englishTerm: "Frontend",
    },
    {
      term: "Бэкенд",
      definition: "Серверная часть приложения, обрабатывающая логику и данные",
      englishTerm: "Backend",
    },
    {
      term: "API",
      definition:
        "Интерфейс программирования приложений для взаимодействия между системами",
      englishTerm: "Application Programming Interface",
    },
    {
      term: "Деплой",
      definition: "Процесс развертывания приложения в рабочую среду",
      englishTerm: "Deploy",
    },
    {
      term: "Баг",
      definition: "Ошибка в программном коде",
      englishTerm: "Bug",
    },
    {
      term: "Рефакторинг",
      definition: "Улучшение структуры кода без изменения функциональности",
      englishTerm: "Refactoring",
    },
    {
      term: "Коммит",
      definition: "Сохранение изменений в системе контроля версий",
      englishTerm: "Commit",
    },
    {
      term: "Пулл реквест",
      definition: "Запрос на объединение изменений в основную ветку кода",
      englishTerm: "Pull Request",
    },
    {
      term: "Скрам",
      definition: "Методология гибкой разработки программного обеспечения",
      englishTerm: "Scrum",
    },
    {
      term: "Спринт",
      definition: "Короткий период разработки в agile-методологии",
      englishTerm: "Sprint",
    },
    {
      term: "Легаси",
      definition: "Устаревший код или система, которую сложно поддерживать",
      englishTerm: "Legacy",
    },
    {
      term: "Хотфикс",
      definition: "Срочное исправление критической ошибки в продакшене",
      englishTerm: "Hotfix",
    },
    {
      term: "Прототип",
      definition: "Ранняя версия продукта для тестирования идей",
      englishTerm: "Prototype",
    },
    {
      term: "Фреймворк",
      definition: "Программная платформа для разработки приложений",
      englishTerm: "Framework",
    },
    {
      term: "Библиотека",
      definition: "Набор готовых функций и классов для программирования",
      englishTerm: "Library",
    },
    {
      term: "ORM",
      definition: "Технология программирования для работы с базами данных",
      englishTerm: "Object-Relational Mapping",
    },
    {
      term: "CDN",
      definition: "Сеть доставки контента для ускорения загрузки сайтов",
      englishTerm: "Content Delivery Network",
    },
    {
      term: "Кеширование",
      definition: "Сохранение данных для быстрого повторного доступа",
      englishTerm: "Caching",
    },
    {
      term: "Микросервисы",
      definition: "Архитектурный подход с разделением на небольшие сервисы",
      englishTerm: "Microservices",
    },
    {
      term: "DevOps",
      definition: "Практики объединения разработки и эксплуатации",
      englishTerm: "Development Operations",
    },
  ];

  const englishTerms = [
    {
      term: "Debugging",
      definition: "The process of finding and fixing errors in code",
      englishTerm: "Отладка",
    },
    {
      term: "Scalability",
      definition: "The ability of a system to handle growing amounts of work",
      englishTerm: "Масштабируемость",
    },
    {
      term: "Repository",
      definition: "A storage location for software packages or source code",
      englishTerm: "Репозиторий",
    },
    {
      term: "Authentication",
      definition: "The process of verifying user identity",
      englishTerm: "Аутентификация",
    },
    {
      term: "Authorization",
      definition: "The process of giving permissions to authenticated users",
      englishTerm: "Авторизация",
    },
    {
      term: "Encryption",
      definition: "The process of encoding data to prevent unauthorized access",
      englishTerm: "Шифрование",
    },
    {
      term: "Load Balancing",
      definition: "Distributing workloads across multiple computing resources",
      englishTerm: "Балансировка нагрузки",
    },
    {
      term: "Database",
      definition: "An organized collection of structured information",
      englishTerm: "База данных",
    },
    {
      term: "Query",
      definition: "A request for data or information from a database",
      englishTerm: "Запрос",
    },
    {
      term: "Algorithm",
      definition: "A set of rules or instructions for solving a problem",
      englishTerm: "Алгоритм",
    },
    {
      term: "Compilation",
      definition: "The process of translating source code into machine code",
      englishTerm: "Компиляция",
    },
    {
      term: "Integration",
      definition: "The process of combining different systems or components",
      englishTerm: "Интеграция",
    },
    {
      term: "Optimization",
      definition: "The process of making something as effective as possible",
      englishTerm: "Оптимизация",
    },
    {
      term: "Version Control",
      definition: "A system for tracking changes in files over time",
      englishTerm: "Контроль версий",
    },
    {
      term: "Testing",
      definition: "The process of evaluating software to find defects",
      englishTerm: "Тестирование",
    },
    {
      term: "Documentation",
      definition: "Written text that explains how software works",
      englishTerm: "Документация",
    },
    {
      term: "Architecture",
      definition: "The fundamental organization of a software system",
      englishTerm: "Архитектура",
    },
    {
      term: "Middleware",
      definition:
        "Software that acts as a bridge between different applications",
      englishTerm: "Промежуточное ПО",
    },
    {
      term: "Containerization",
      definition:
        "A method of virtualizing applications and their dependencies",
      englishTerm: "Контейнеризация",
    },
    {
      term: "Cloud Computing",
      definition: "The delivery of computing services over the internet",
      englishTerm: "Облачные вычисления",
    },
  ];

  const quizQuestions = [
    {
      question: "Что такое фронтенд?",
      options: [
        "Серверная часть приложения",
        "Клиентская часть веб-приложения",
        "База данных",
        "API интерфейс",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Deploy'?",
      options: ["Удаление", "Развертывание", "Отладка", "Тестирование"],
      correctAnswer: 1,
    },
    {
      question: "Что такое рефакторинг?",
      options: [
        "Добавление новых функций",
        "Улучшение структуры кода без изменения функциональности",
        "Исправление ошибок",
        "Создание документации",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Authentication'?",
      options: [
        "Авторизация",
        "Проверка личности пользователя",
        "Шифрование",
        "Кеширование",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое API?",
      options: [
        "Интерфейс программирования приложений",
        "Система управления базами данных",
        "Протокол передачи данных",
        "Язык программирования",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что означает 'Scalability'?",
      options: [
        "Безопасность",
        "Масштабируемость",
        "Производительность",
        "Надежность",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое спринт в Scrum?",
      options: [
        "Быстрое исправление ошибки",
        "Короткий период разработки",
        "Тестирование приложения",
        "Планирование проекта",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Version Control'?",
      options: [
        "Контроль качества",
        "Контроль версий",
        "Контроль доступа",
        "Контроль производительности",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое микросервисы?",
      options: [
        "Маленькие программы",
        "Архитектурный подход с разделением на небольшие сервисы",
        "Быстрые функции",
        "Мобильные приложения",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Middleware'?",
      options: [
        "Среднее ПО",
        "Промежуточное ПО",
        "Системное ПО",
        "Прикладное ПО",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое легаси код?",
      options: [
        "Новый код",
        "Устаревший код, который сложно поддерживать",
        "Быстрый код",
        "Безопасный код",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Load Balancing'?",
      options: [
        "Загрузка данных",
        "Балансировка нагрузки",
        "Очистка памяти",
        "Сжатие файлов",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое CDN?",
      options: [
        "Система управления контентом",
        "Сеть доставки контента",
        "База данных",
        "Протокол связи",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Containerization'?",
      options: [
        "Упаковка товаров",
        "Метод виртуализации приложений",
        "Сжатие данных",
        "Архивирование файлов",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое DevOps?",
      options: [
        "Отдел разработки",
        "Практики объединения разработки и эксплуатации",
        "Инструмент разработки",
        "Методология тестирования",
      ],
      correctAnswer: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">IT специальности</h1>
        </div>

        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg max-w-md">
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "terms"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Русские термины
          </button>
          <button
            onClick={() => setActiveTab("english")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "english"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            English Terms
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "quiz"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Тест
          </button>
        </div>

        {activeTab === "terms" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {russianTerms.map((term, index) => (
              <TermCard
                key={index}
                term={term.term}
                definition={term.definition}
                englishTerm={term.englishTerm}
                type="russian"
              />
            ))}
          </div>
        )}

        {activeTab === "english" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {englishTerms.map((term, index) => (
              <TermCard
                key={index}
                term={term.term}
                definition={term.definition}
                englishTerm={term.englishTerm}
                type="english"
              />
            ))}
          </div>
        )}

        {activeTab === "quiz" && (
          <Quiz questions={quizQuestions} title="Тест по IT терминам" />
        )}
      </div>
    </div>
  );
};

export default IT;
