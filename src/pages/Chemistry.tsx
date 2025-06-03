import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TermCard from "@/components/TermCard";
import Quiz from "@/components/Quiz";

const Chemistry = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"terms" | "english" | "quiz">(
    "terms",
  );

  const russianTerms = [
    {
      term: "Буферный раствор",
      definition: "Раствор, способный поддерживать постоянное значение pH",
      englishTerm: "Buffer solution",
    },
    {
      term: "Титрование",
      definition:
        "Метод количественного анализа для определения концентрации вещества",
      englishTerm: "Titration",
    },
    {
      term: "Электролиз",
      definition:
        "Процесс разложения вещества под действием электрического тока",
      englishTerm: "Electrolysis",
    },
    {
      term: "Катализатор",
      definition: "Вещество, ускоряющее химическую реакцию без участия в ней",
      englishTerm: "Catalyst",
    },
    {
      term: "Дистилляция",
      definition:
        "Процесс разделения жидких смесей путем испарения и конденсации",
      englishTerm: "Distillation",
    },
    {
      term: "Осадок",
      definition:
        "Твердое вещество, выпадающее из раствора при химической реакции",
      englishTerm: "Precipitate",
    },
    {
      term: "Экстракция",
      definition:
        "Процесс извлечения одного или нескольких компонентов из смеси",
      englishTerm: "Extraction",
    },
    {
      term: "Реагент",
      definition: "Вещество, участвующее в химической реакции",
      englishTerm: "Reagent",
    },
    {
      term: "Эмульсия",
      definition: "Дисперсная система из двух несмешивающихся жидкостей",
      englishTerm: "Emulsion",
    },
    {
      term: "Кристаллизация",
      definition: "Процесс образования кристаллов из растворов или расплавов",
      englishTerm: "Crystallization",
    },
    {
      term: "Стехиометрия",
      definition: "Раздел химии о количественных соотношениях в реакциях",
      englishTerm: "Stoichiometry",
    },
    {
      term: "Хроматография",
      definition: "Метод разделения и анализа смесей веществ",
      englishTerm: "Chromatography",
    },
    {
      term: "Гидролиз",
      definition: "Реакция разложения вещества водой",
      englishTerm: "Hydrolysis",
    },
    {
      term: "Полимеризация",
      definition: "Процесс образования полимеров из мономеров",
      englishTerm: "Polymerization",
    },
    {
      term: "Изомеры",
      definition:
        "Соединения с одинаковой молекулярной формулой, но разным строением",
      englishTerm: "Isomers",
    },
    {
      term: "Спектроскопия",
      definition: "Метод исследования вещества по его спектрам",
      englishTerm: "Spectroscopy",
    },
    {
      term: "Элюент",
      definition: "Растворитель в хроматографии для разделения компонентов",
      englishTerm: "Eluent",
    },
    {
      term: "Адсорбция",
      definition:
        "Поглощение газов или растворенных веществ поверхностью твердого тела",
      englishTerm: "Adsorption",
    },
    {
      term: "Флокуляция",
      definition: "Процесс слипания мелких частиц в более крупные агрегаты",
      englishTerm: "Flocculation",
    },
    {
      term: "Коагуляция",
      definition: "Процесс укрупнения частиц дисперсной фазы",
      englishTerm: "Coagulation",
    },
  ];

  const englishTerms = [
    {
      term: "Synthesis",
      definition:
        "The production of chemical compounds by reaction from simpler materials",
      englishTerm: "Синтез",
    },
    {
      term: "Volatile",
      definition: "A substance that evaporates readily at normal temperatures",
      englishTerm: "Летучий",
    },
    {
      term: "Sublimation",
      definition:
        "The transition of a substance directly from solid to gas phase",
      englishTerm: "Сублимация",
    },
    {
      term: "Solubility",
      definition: "The ability of a substance to dissolve in a solvent",
      englishTerm: "Растворимость",
    },
    {
      term: "Precipitation",
      definition:
        "The formation of a solid from a solution during a chemical reaction",
      englishTerm: "Осаждение",
    },
    {
      term: "Equilibrium",
      definition:
        "A state where forward and reverse reactions occur at equal rates",
      englishTerm: "Равновесие",
    },
    {
      term: "Oxidation",
      definition: "A reaction that involves the loss of electrons",
      englishTerm: "Окисление",
    },
    {
      term: "Reduction",
      definition: "A reaction that involves the gain of electrons",
      englishTerm: "Восстановление",
    },
    {
      term: "Molarity",
      definition:
        "The concentration of a solution expressed in moles per liter",
      englishTerm: "Молярность",
    },
    {
      term: "Yield",
      definition: "The amount of product obtained from a chemical reaction",
      englishTerm: "Выход продукта",
    },
    {
      term: "Purification",
      definition: "The process of removing impurities from a substance",
      englishTerm: "Очистка",
    },
    {
      term: "Thermodynamics",
      definition: "The study of energy changes in chemical reactions",
      englishTerm: "Термодинамика",
    },
    {
      term: "Kinetics",
      definition: "The study of reaction rates and mechanisms",
      englishTerm: "Кинетика",
    },
    {
      term: "Analytical",
      definition:
        "Relating to the detailed examination of chemical composition",
      englishTerm: "Аналитический",
    },
    {
      term: "Quantitative",
      definition: "Relating to the measurement of quantity or amount",
      englishTerm: "Количественный",
    },
    {
      term: "Qualitative",
      definition: "Relating to the identification of components in a mixture",
      englishTerm: "Качественный",
    },
    {
      term: "Concentration",
      definition: "The amount of substance in a given volume of solution",
      englishTerm: "Концентрация",
    },
    {
      term: "Dilution",
      definition: "The process of reducing concentration by adding solvent",
      englishTerm: "Разбавление",
    },
    {
      term: "Calibration",
      definition:
        "The process of adjusting instruments to ensure accurate measurements",
      englishTerm: "Калибровка",
    },
    {
      term: "Standardization",
      definition:
        "The process of determining the exact concentration of a solution",
      englishTerm: "Стандартизация",
    },
  ];

  const quizQuestions = [
    {
      question: "Что такое буферный раствор?",
      options: [
        "Раствор, способный поддерживать постоянное значение pH",
        "Раствор с высокой концентрацией солей",
        "Раствор для промывки оборудования",
        "Раствор для титрования",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что такое 'Titration' на английском языке?",
      options: ["Осаждение", "Титрование", "Фильтрация", "Кристаллизация"],
      correctAnswer: 1,
    },
    {
      question: "Какой процесс называется дистилляцией?",
      options: [
        "Разделение смесей путем испарения и конденсации",
        "Разложение вещества электрическим током",
        "Образование кристаллов из раствора",
        "Извлечение компонентов из смеси",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что означает термин 'Catalyst'?",
      options: [
        "Продукт реакции",
        "Растворитель",
        "Вещество, ускоряющее реакцию",
        "Исходное вещество",
      ],
      correctAnswer: 2,
    },
    {
      question: "Что такое хроматография?",
      options: [
        "Метод разделения и анализа смесей",
        "Процесс окрашивания растворов",
        "Измерение оптической плотности",
        "Определение массы вещества",
      ],
      correctAnswer: 0,
    },
    {
      question: "Что означает 'Precipitation' в химии?",
      options: ["Испарение", "Осаждение", "Растворение", "Нагревание"],
      correctAnswer: 1,
    },
    {
      question: "Что такое стехиометрия?",
      options: [
        "Изучение скорости реакций",
        "Раздел о количественных соотношениях в реакциях",
        "Анализ структуры молекул",
        "Измерение температуры",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Molarity'?",
      options: [
        "Молекулярная масса",
        "Концентрация в молях на литр",
        "Количество молекул",
        "Объем раствора",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое гидролиз?",
      options: [
        "Реакция с участием водорода",
        "Разложение вещества водой",
        "Растворение в воде",
        "Выделение водорода",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Equilibrium' в химии?",
      options: [
        "Конец реакции",
        "Состояние равных скоростей прямой и обратной реакций",
        "Начало реакции",
        "Полное превращение реагентов",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое полимеризация?",
      options: [
        "Разложение полимеров",
        "Образование полимеров из мономеров",
        "Растворение полимеров",
        "Кристаллизация полимеров",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Volatile' substance?",
      options: [
        "Взрывчатое вещество",
        "Легко испаряющееся вещество",
        "Ядовитое вещество",
        "Растворимое вещество",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое изомеры?",
      options: [
        "Соединения с разной молекулярной формулой",
        "Соединения с одинаковой формулой, но разным строением",
        "Соединения одного класса",
        "Соединения с одинаковыми свойствами",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что означает 'Calibration'?",
      options: [
        "Измерение концентрации",
        "Настройка приборов для точных измерений",
        "Очистка оборудования",
        "Проведение анализа",
      ],
      correctAnswer: 1,
    },
    {
      question: "Что такое адсорбция?",
      options: [
        "Поглощение газов поверхностью твердого тела",
        "Растворение газов в жидкости",
        "Выделение газов из раствора",
        "Сжижение газов",
      ],
      correctAnswer: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
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
          <h1 className="text-3xl font-bold text-gray-800">
            Химические специальности
          </h1>
        </div>

        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg max-w-md">
          <button
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "terms"
                ? "bg-purple-500 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Русские термины
          </button>
          <button
            onClick={() => setActiveTab("english")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "english"
                ? "bg-purple-500 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            English Terms
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "quiz"
                ? "bg-purple-500 text-white"
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
          <Quiz questions={quizQuestions} title="Тест по химическим терминам" />
        )}
      </div>
    </div>
  );
};

export default Chemistry;
