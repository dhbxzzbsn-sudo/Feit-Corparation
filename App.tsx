
import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Layout, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Phone, 
  MessageCircle 
} from 'lucide-react';

// --- Components ---

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-sm rotate-45 flex items-center justify-center">
            <Printer className="text-white -rotate-45 w-5 h-5" />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter uppercase italic">Feit <span className="text-blue-500">Corparation</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-widest uppercase">
          <a href="#offer" className="hover:text-blue-500 transition-colors">Услуги</a>
          <a href="#about" className="hover:text-blue-500 transition-colors">Достижения</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Контакты</a>
          <a href="tel:87000787848" className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2">
            <Phone size={16} /> 8 7000 78 78 48
          </a>
        </div>
        <a href="https://wa.me/77000787848" target="_blank" className="md:hidden text-blue-500">
          <MessageCircle size={28} />
        </a>
      </div>
    </nav>
  );
};

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={`py-24 md:py-32 px-6 ${className}`}>
    <div className="container mx-auto max-w-6xl">
      {children}
    </div>
  </section>
);

const FloatElement: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`relative transition-transform duration-700 hover:-translate-y-4 ${className}`}>
    <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full -z-10 transform scale-75"></div>
    {children}
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="antialiased">
      <Navbar />

      {/* 1. ПРИВЛЕЧЕНИЕ ВНИМАНИЯ (Hero) */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent -z-10"></div>
        <div className="absolute -right-20 -top-20 w-1/2 h-full bg-blue-600/5 rotate-12 -z-10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase italic">
              «Печать — это искусство делать мысли видимыми»
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none italic uppercase">
              Ваша Идея — <br />
              <span className="text-transparent border-t-2 border-b-2 border-blue-600 py-1" style={{ WebkitTextStroke: '1px rgba(37, 99, 235, 1)' }}>Наш Отпечаток</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg font-light leading-relaxed">
              Feit Corparation — это полиграфия нового поколения. Мы не просто печатаем, мы создаем визуальные акценты вашего бизнеса под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#offer" className="group bg-white text-black px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-300">
                Заказать сейчас <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="https://wa.me/77000787848" className="bg-transparent border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
                WhatsApp <MessageCircle />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <FloatElement className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional Printing Machine" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </FloatElement>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/20 backdrop-blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 w-32 h-32 border-r-4 border-t-4 border-blue-500 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* 2. ОПРЕДЕЛЕНИЕ ПРОБЛЕМЫ */}
      <Section className="bg-[#0e0e0e] diagonal-clip relative">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
             <h2 className="text-4xl font-display font-black italic uppercase text-blue-500 mb-6">Проблема</h2>
             <p className="text-gray-500 leading-loose">Устали от тусклых цветов, кривых наклеек и сорванных сроков?</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              "Некачественные материалы, которые выцветают через неделю",
              "Сложности с дизайном и подготовкой макетов",
              "Долгое ожидание и отсутствие связи с исполнителем",
              "Переплаты посредникам за 'простые' задачи"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 p-6 glass rounded-xl border-l-4 border-l-red-500/50">
                <AlertTriangle className="text-red-500 shrink-0" />
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. ПРЕДЛОЖЕНИЕ РЕШЕНИЯ */}
      <Section id="solution">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-display font-black italic uppercase">Решение от <span className="text-blue-500">Feit Corparation</span></h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Мы берем на себя весь цикл: от разработки креативного макета до монтажа готовой продукции.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Layout className="w-8 h-8"/>, title: "Дизайн под ключ", desc: "Наши дизайнеры создадут макет, который заставит ваш бренд сиять." },
            { icon: <Printer className="w-8 h-8"/>, title: "Топ Оборудование", desc: "Используем японские станки последнего поколения для идеальной цветопередачи." },
            { icon: <CheckCircle className="w-8 h-8"/>, title: "Контроль Качества", desc: "Проверяем каждый миллиметр перед тем, как отдать заказ вам." }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-blue-500 group-hover:h-full transition-all duration-500"></div>
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. ПРЕДСТАВЛЕНИЕ ДОСТИЖЕНИЙ */}
      <Section id="about" className="bg-blue-600 diagonal-clip-reverse text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "10+", label: "Лет на рынке" },
            { val: "5000+", label: "Довольных клиентов" },
            { val: "1М+", label: "Отпечатков в год" },
            { val: "24/7", label: "Поддержка" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl md:text-6xl font-display font-black tracking-tighter">{stat.val}</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. ДЕМОНСТРАЦИЯ ПРЕИМУЩЕСТВ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-full h-full border border-blue-500/20 translate-x-4 translate-y-4 -z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop" 
               className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm" 
               alt="Industrial Offset Printing Machine" 
             />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-black italic uppercase">Почему выбирают нас</h2>
            <div className="space-y-6">
              {[
                { title: "Скорость", text: "Срочная печать визиток и листовок за 2 часа.", icon: <Clock /> },
                { title: "Экологичность", text: "Используем безопасные эко-чернила без запаха.", icon: <ShieldCheck /> },
                { title: "Масштабируемость", text: "От 10 наклеек до 1000 кв. метров баннера.", icon: <TrendingUp /> }
              ].map((b, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">{b.icon}</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight mb-1">{b.title}</h4>
                    <p className="text-gray-400 font-light">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 6. СОЦИАЛЬНЫЕ ДОКАЗАТЕЛЬСТВА */}
      <Section className="bg-[#0e0e0e]">
        <h2 className="text-3xl font-display font-black italic uppercase text-center mb-16">Нам доверяют лидеры</h2>
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="p-8 glass italic relative">
             <div className="text-5xl text-blue-500 absolute -top-4 left-4 opacity-50">"</div>
             <p className="text-gray-300 relative z-10">Заказывали оформление выставочного стенда. Все было сделано идеально в срок. Цвета просто сочные, как на экране!</p>
             <div className="mt-4 font-bold uppercase text-xs tracking-widest">— Артем К., CEO TechLine</div>
          </div>
          <div className="p-8 glass italic relative">
             <div className="text-5xl text-blue-500 absolute -top-4 left-4 opacity-50">"</div>
             <p className="text-gray-300 relative z-10">Лучшие наклейки в городе. Не стираются даже после агрессивной мойки. Будем работать только с Feit Corparation.</p>
             <div className="mt-4 font-bold uppercase text-xs tracking-widest">— Мария П., Studio 42</div>
          </div>
        </div>
      </Section>

      {/* 7. ПРЕДЛОЖЕНИЕ ПРОДУКТА */}
      <Section id="offer">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-black italic uppercase mb-4">Наши возможности</h2>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Печатаем и производим под ключ</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {[
            { name: "Визитки", desc: "Премиум картон, Soft Touch, лак" },
            { name: "Листовки", desc: "Все форматы, любая плотность бумаги" },
            { name: "Наклейки", desc: "Контурная резка, влагостойкие" },
            { name: "Баннеры", desc: "Широкоформатная печать 1440dpi" },
            { name: "Вывески", desc: "Объемные буквы, световые короба" },
            { name: "Таблички", desc: "Пластик, металл, композит" }
          ].map((p, i) => (
            <div key={i} className="group p-12 border border-white/5 hover:bg-blue-600 transition-all duration-500 cursor-default">
              <h4 className="text-2xl font-display font-black uppercase mb-4 group-hover:translate-x-2 transition-transform">{p.name}</h4>
              <p className="text-gray-500 group-hover:text-white/80 transition-colors">{p.desc}</p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="https://wa.me/77000787848" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-white">Узнать цену <ArrowRight size={14}/></a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. СОЗДАНИЕ ЭФФЕКТА ДЕФИЦИТА */}
      <Section className="bg-red-600/10 border-y border-red-500/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-2">
              <h3 className="text-3xl font-display font-black italic uppercase text-red-500">Только на этой неделе</h3>
              <p className="text-gray-400">Осталось всего <span className="text-white font-bold">4 свободных слота</span> для разработки дизайна бесплатно!</p>
           </div>
           <div className="text-4xl font-display font-black tracking-tighter animate-pulse text-red-500">
              04 : 12 : 55
           </div>
        </div>
      </Section>

      {/* 9. ПРЕДОСТАВЛЕНИЕ ГАРАНТИИ */}
      <Section>
        <div className="max-w-3xl mx-auto p-12 glass border-2 border-blue-500/30 rounded-3xl text-center space-y-6">
           <div className="inline-block p-4 bg-blue-500 text-white rounded-full"><Award size={48} /></div>
           <h2 className="text-3xl font-display font-black uppercase italic tracking-tighter">Гарантия результата</h2>
           <p className="text-gray-400 leading-relaxed italic text-lg">
             Мы гарантируем 100% соответствие утвержденному макету. Если вы обнаружите брак или неточность по нашей вине — мы перепечатаем весь тираж за свой счет в течение 24 часов.
           </p>
        </div>
      </Section>

      {/* 10. ПРИЗЫВ К ДЕЙСТВИЮ */}
      <Section id="contact" className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[150px] -z-10"></div>
        <div className="text-center space-y-12">
           <h2 className="text-6xl md:text-8xl font-display font-black uppercase italic tracking-tighter leading-none">
             Начни свой проект <br /> <span className="text-blue-500">Сегодня</span>
           </h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a href="tel:87000787848" className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={32} />
                </div>
                <span className="text-2xl font-bold">8 7000 78 78 48</span>
              </a>
              <div className="w-px h-12 bg-white/20 hidden md:block"></div>
              <a href="https://wa.me/77000787848" className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform">
                <div className="w-20 h-20 rounded-full border-2 border-green-500/20 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={32} />
                </div>
                <span className="text-2xl font-bold">WhatsApp</span>
              </a>
           </div>
        </div>
      </Section>

      {/* 11. ПРЕДУПРЕЖДЕНИЕ */}
      <Section className="bg-[#111] py-16">
        <div className="flex gap-6 items-center border-l-4 border-red-600 p-8 glass">
          <AlertTriangle className="text-red-600 shrink-0" size={40} />
          <div>
            <h4 className="text-xl font-bold uppercase mb-2">Остерегайтесь дешевых подделок</h4>
            <p className="text-gray-500 text-sm">Низкая цена часто означает токсичные краски и тонкий материал, который придет в негодность через месяц. Ваш имидж стоит дороже сомнительной экономии.</p>
          </div>
        </div>
      </Section>

      {/* 12. ЗАВЕРШЕНИЕ НАПОМИНАНИЕМ */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-sm rotate-45 flex items-center justify-center">
                <Printer className="text-white -rotate-45 w-4 h-4" />
              </div>
              <span className="text-xl font-display font-black tracking-tighter uppercase italic">Feit <span className="text-blue-500">Corparation</span></span>
            </div>
            <p className="text-gray-600 max-w-sm">Мы создаем будущее полиграфии. Профессионализм, эстетика и качество в каждом пикселе.</p>
          </div>
          <div className="text-right space-y-2">
             <div className="text-gray-500 uppercase text-xs tracking-widest font-bold">Связаться напрямую:</div>
             <a href="tel:87000787848" className="text-2xl md:text-4xl font-display font-black italic hover:text-blue-500 transition-colors">8 7000 78 78 48</a>
             <div className="text-gray-700 text-xs mt-8">&copy; 2024 Feit Corparation. Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
