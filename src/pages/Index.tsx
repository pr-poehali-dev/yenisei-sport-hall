import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const workouts = [
    {
      title: "Силовые тренировки",
      description: "Развитие силы и мышечной массы с профессиональными тренерами",
      icon: "Dumbbell",
      image: "https://cdn.poehali.dev/projects/b5193d16-5fe3-4242-bc19-e3a9c3666602/files/c4bafbf2-5390-44b6-a5d2-996416c9856e.jpg"
    },
    {
      title: "Групповые тренировки",
      description: "Энергичные занятия в команде единомышленников",
      icon: "Users",
      image: "https://cdn.poehali.dev/projects/b5193d16-5fe3-4242-bc19-e3a9c3666602/files/c5f076e4-01bc-423e-b872-b59a4037be5c.jpg"
    },
    {
      title: "Персональный тренинг",
      description: "Индивидуальный подход и максимальный результат",
      icon: "Target",
      image: "https://cdn.poehali.dev/projects/b5193d16-5fe3-4242-bc19-e3a9c3666602/files/0b95984a-9153-4f0a-b2b4-18816303916b.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/b5193d16-5fe3-4242-bc19-e3a9c3666602/files/c4bafbf2-5390-44b6-a5d2-996416c9856e.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            ЕНИСЕЙ
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Спортивный зал мирового уровня с государственной поддержкой
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-white/70 text-sm mb-1">При поддержке</p>
              <p className="text-white font-semibold">Министерство спорта РФ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-white/70 text-sm mb-1">При поддержке</p>
              <p className="text-white font-semibold">Правительство Красноярского края</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-white/70 text-sm mb-1">Национальный проект</p>
              <p className="text-white font-semibold">«Демография»</p>
            </div>
          </div>
          
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
            Записаться на тренировку
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="workouts" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-secondary">
              ТРЕНИРОВКИ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери программу под свои цели и достигай результатов вместе с профессионалами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workouts.map((workout, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Icon name={workout.icon as any} size={24} />
                      <h3 className="text-2xl font-bold">{workout.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{workout.description}</p>
                  <Button className="w-full group/btn">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            НАЧНИ СЕГОДНЯ
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Первая тренировка — бесплатно! Познакомься с залом и тренерами
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-0 text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ЕНИСЕЙ</h3>
              <p className="text-white/70">
                Спортивный зал с государственной поддержкой
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (391) 000-00-00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@enisey-gym.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Красноярск, ул. Спортивная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <p className="text-white/70">Пн-Вс: 6:00 - 23:00</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 Спортивный зал Енисей. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
