import ProfessionCard from "@/components/ProfessionCard";

const Index = () => {
  const professions = [
    {
      title: "Химические специальности",
      description:
        "Профессиональный сленг химиков, лаборантов, технологов химического производства",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
      route: "/chemistry",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      title: "IT специальности",
      description:
        "Сленг программистов, разработчиков, веб-дизайнеров и других IT-специалистов",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      route: "/it",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100",
    },
    {
      title: "Системное администрирование",
      description:
        "Профессиональная терминология системных администраторов и DevOps-инженеров",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      route: "/sysadmin",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
    },
    {
      title: "Системная безопасность",
      description:
        "Сленг специалистов по информационной безопасности и кибербезопасности",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      route: "/security",
      color: "bg-gradient-to-br from-red-100 to-orange-100",
    },
    {
      title: "Аппаратчики",
      description:
        "Профессиональная терминология операторов химических и технологических процессов",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      route: "/operators",
      color: "bg-gradient-to-br from-yellow-100 to-amber-100",
    },
    {
      title: "Банковское дело",
      description: "Сленг банковских работников, финансистов и экономистов",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      route: "/banking",
      color: "bg-gradient-to-br from-indigo-100 to-purple-100",
    },
    {
      title: "Мехатроника и робототехника",
      description:
        "Терминология специалистов по мехатронике, робототехнике и автоматизации",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      route: "/mechatronics",
      color: "bg-gradient-to-br from-teal-100 to-cyan-100",
    },
    {
      title: "Системы диспетчерского управления",
      description:
        "Сленг диспетчеров, операторов SCADA-систем и систем управления процессами",
      termCount: 20,
      englishTermCount: 20,
      quizCount: 15,
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      route: "/dispatch",
      color: "bg-gradient-to-br from-slate-100 to-gray-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Профессиональный словарь 📚
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Изучайте профессиональный сленг из разных отраслей, расширяйте
            словарный запас и проверяйте свои знания с помощью интерактивных
            тестов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {professions.map((profession, index) => (
            <ProfessionCard
              key={index}
              title={profession.title}
              description={profession.description}
              termCount={profession.termCount}
              englishTermCount={profession.englishTermCount}
              quizCount={profession.quizCount}
              image={profession.image}
              route={profession.route}
              color={profession.color}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Как пользоваться словарем? 🚀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-3xl mb-2">📖</div>
                <h3 className="font-medium mb-1">Изучайте термины</h3>
                <p className="text-gray-600">
                  Изучите русские и английские профессиональные термины
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h3 className="font-medium mb-1">Запоминайте</h3>
                <p className="text-gray-600">
                  Каждый термин содержит подробное объяснение
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-medium mb-1">Проверяйте знания</h3>
                <p className="text-gray-600">
                  Проходите тесты для закрепления материала
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
