import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SciBg from "../components/SciBg";
import ExamResultsSection from "../components/ExamResultsSection";
import heroImage from "../images/logo1.jpg";
import heroImage2 from "../images/111.jpg";

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    let frame = 0;
    const tick = () => {
      cur += inc;
      frame++;
      setCount(frame >= steps ? target : Math.floor(cur));
      if (frame < steps) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  return { count, ref };
}

function StatItem({
  value,
  suffix = "+",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center px-6">
      <div className="font-display font-bold text-4xl lg:text-5xl text-brand-purple">
        {count}
        <span className="text-brand-gold">{suffix}</span>
      </div>
      <div className="font-sans text-sm text-brand-dark/60 mt-1 font-medium">
        {label}
      </div>
    </div>
  );
}

const features = [
  { icon: "🎓", title: "Malakali ustozlar", desc: "Tajribali va o'z fanini chuqur biladigan pedagoglar jamoasi." },
  { icon: "🎯", title: "Individual yondashuv", desc: "Har bir o'quvchining bilim darajasi va maqsadiga mos yondashuv." },
  { icon: "📈", title: "Natijaga yo'naltirilgan", desc: "Darslar nazariya bilan cheklanmay, amaliy natijaga qaratiladi." },
  { icon: "🔬", title: "Zamonaviy metodika", desc: "Zamonaviy pedagogik va interaktiv o'qitish usullaridan foydalaniladi." },
  { icon: "🌟", title: "Qulay muhit", desc: "O'quvchilar uchun motivatsion va qulay ta'lim muhiti yaratilgan." },
  { icon: "🔍", title: "Doimiy nazorat", desc: "O'quvchi rivojlanishini muntazam kuzatib boriladi." },
];

const subjects = [
  { icon: "∑", name: "Matematika", desc: "Algebra, geometriya, analiz va olimpiada matematikasi.", color: "from-brand-purple/10 to-violet-50", border: "border-brand-purple/20", iconColor: "text-brand-purple" },
  { icon: "⚛", name: "Fizika", desc: "Mexanika, termodinamika, elektromagnetizm va optika.", color: "from-blue-50 to-indigo-50", border: "border-blue-200", iconColor: "text-blue-600" },
  { icon: "🧪", name: "Kimyo", desc: "Organik va noorganik kimyo, reaksiyalar va formulalar.", color: "from-green-50 to-emerald-50", border: "border-brand-green/20", iconColor: "text-brand-green" },
  { icon: "🧬", name: "Biologiya", desc: "Anatomiya, botanika, zoologiya va genetika asoslari.", color: "from-teal-50 to-cyan-50", border: "border-teal-200", iconColor: "text-teal-600" },
  { icon: "🌐", name: "Ingliz tili", desc: "So'zlashuv, grammatika, IELTS va TOEFL tayyorgarlik.", color: "from-amber-50 to-yellow-50", border: "border-brand-gold/20", iconColor: "text-brand-gold" },
  { icon: "📚", name: "Ona tili va adabiyot", desc: "Til qoidalari, badiiy tahlil va yozish mahorati.", color: "from-rose-50 to-pink-50", border: "border-rose-200", iconColor: "text-rose-600" },
  { icon: "🏛", name: "Tarix", desc: "O'zbekiston va jahon tarixi, manbashunosllik.", color: "from-orange-50 to-amber-50", border: "border-orange-200", iconColor: "text-orange-600" },
  { icon: "💻", name: "Informatika", desc: "Dasturlash asoslari, algoritmlar va raqamli savodxonlik.", color: "from-slate-50 to-gray-100", border: "border-slate-200", iconColor: "text-slate-600" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-cream">
        <SciBg color="#5B21B6" opacity={0.9} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-green/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-brand-purple text-xs font-display font-semibold tracking-widest uppercase">
                  O&rsquo;quv Markazi
                </span>
              </div>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-brand-dark mb-4">
                Bilim.{" "}
                <span className="text-brand-purple">Natija.</span>{" "}
                <span className="text-brand-green">Kelajak.</span>
              </h1>
              <p className="font-sans text-lg text-brand-dark/60 leading-relaxed mb-3 max-w-lg">
                To&rsquo;g&rsquo;ri bilim — katta natijalarning boshlanishi.
              </p>
              <p className="font-sans text-base text-brand-dark/50 leading-relaxed mb-8 max-w-lg">
                To&rsquo;lqinbek Math Academy — matematika va boshqa fanlardan
                yuqori sifatli ta&rsquo;lim beruvchi, o&rsquo;quvchilarni bilim,
                imtihon va kelajakdagi maqsadlariga tayyorlovchi zamonaviy
                o&rsquo;quv markaz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/aloqa"
                  className="inline-flex items-center gap-2 bg-brand-purple text-white px-7 py-3.5 rounded-xl font-display font-semibold hover:bg-brand-purple-dark transition-all shadow-lg shadow-brand-purple/30 hover:-translate-y-0.5"
                >
                  Bog&rsquo;lanish
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/biz-haqimizda"
                  className="inline-flex items-center gap-2 bg-white border-2 border-brand-purple/20 text-brand-purple px-7 py-3.5 rounded-xl font-display font-semibold hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all"
                >
                  Markaz haqida
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="To'lqinbek Math Academy"
                  className="w-full aspect-[4/4] object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-brand-purple/10 z-20">
                <span className="font-mono text-brand-purple font-bold text-xl">π = 3.14…</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-purple rounded-2xl px-4 py-2.5 shadow-xl z-20">
                <span className="font-mono text-white font-bold text-lg">√x · Σ · ∫</span>
              </div>
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-brand-gold-pale rounded-xl px-3 py-2 shadow-lg border border-brand-gold/20 z-20">
                <span className="font-display text-brand-gold font-bold text-sm">a² + b² = c²</span>
              </div>
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand-purple/10 to-brand-green/10 -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-brand-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem value={500} label="O'quvchilar" />
            <StatItem value={20} label="Tajribali ustozlar" />
            <StatItem value={10} label="Fan yo'nalishlari" />
            <StatItem value={95} suffix="%" label="Ijobiy natijalar" />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
        <SciBg color="#5B21B6" opacity={0.6} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-3">
              Afzalliklarimiz
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
              Nega aynan <span className="text-brand-purple">biz?</span>
            </h2>
            <p className="mt-4 text-brand-dark/55 font-sans max-w-xl mx-auto">
              Biz har bir o&rsquo;quvchi uchun eng yaxshi natijani ta&rsquo;minlashga intilamiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group bg-white rounded-2xl p-7 border border-brand-purple/10 hover:border-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/8 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-brand-purple/15 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">{f.title}</h3>
                <p className="font-sans text-sm text-brand-dark/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-3">
              Ta&rsquo;lim yo&rsquo;nalishlari
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
              Bizning <span className="text-brand-purple">fanlarimiz</span>
            </h2>
            <p className="mt-4 text-brand-dark/55 font-sans max-w-xl mx-auto">
              Matematikadan tashqari ko&rsquo;plab fanlar bo&rsquo;yicha professional ta&rsquo;lim beramiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjects.map((s, i) => (
              <div key={i} className={`group bg-gradient-to-br ${s.color} rounded-2xl p-6 border ${s.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                <div className={`text-3xl font-mono font-bold ${s.iconColor} mb-4`}>{s.icon}</div>
                <h3 className="font-display font-bold text-brand-dark text-base mb-2">{s.name}</h3>
                <p className="font-sans text-xs text-brand-dark/55 leading-relaxed mb-4">{s.desc}</p>
                <Link
                  to="/biz-haqimizda"
                  className={`inline-flex items-center gap-1 text-xs font-display font-semibold ${s.iconColor} hover:opacity-70 transition-opacity`}
                >
                  Batafsil
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              {/* <ImagePlaceholder
                label="[AKADEMIYA RASMI]\nMarkaz binosi yoki dars jarayoni"
                icon="classroom"
                className="w-full aspect-[4/3]"
              /> */}
              <img
                  src={heroImage2}
                  alt="To'lqinbek Math Academy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              <div className="absolute -bottom-5 -right-5 bg-brand-purple text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display font-bold text-3xl">10+</div>
                <div className="font-sans text-xs text-white/70 mt-0.5">Yillik tajriba</div>
              </div>
            </div>
            <div>
              <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-4">
                Biz haqimizda
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark leading-tight mb-5">
                To&rsquo;g&rsquo;ri ta&rsquo;lim —{" "}
                <span className="text-brand-purple">mustahkam kelajak</span> poydevori.
              </h2>
              <p className="font-sans text-brand-dark/60 leading-relaxed mb-4">
                To&rsquo;lqinbek Math Academy — natijaga yo&rsquo;naltirilgan, o&rsquo;quvchi markazida
                bo&rsquo;lgan va akademik jihatdan kuchli zamonaviy ta&rsquo;lim muassasasi.
              </p>
              <p className="font-sans text-brand-dark/55 leading-relaxed mb-8">
                Har bir dars — bu o&rsquo;quvchining kelajagiga kiritilgan sarmoya. Biz faqat bilim
                bermaylik, biz yutug&rsquo;ni maqsad qilamiz.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Malakali jamoamiz", "Zamonaviy usullar", "Tasdiqlangan natijalar"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-display font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/biz-haqimizda"
                className="inline-flex items-center gap-2 border-2 border-brand-purple text-brand-purple px-7 py-3.5 rounded-xl font-display font-semibold hover:bg-brand-purple hover:text-white transition-all"
              >
                Biz haqimizda
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exam results */}
      <ExamResultsSection />

      {/* CTA */}
      <section className="relative py-20 lg:py-28 bg-brand-dark overflow-hidden">
        <SciBg color="#ffffff" opacity={0.5} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark/80 to-brand-dark/90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="text-brand-gold text-xs font-display font-semibold tracking-widest uppercase">
              Bugundan boshlang
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-white mb-5 leading-tight">
            Farzandingizning kelajagini{" "}
            <span className="text-brand-gold">bugundan</span> boshlang.
          </h2>
          <p className="font-sans text-white/60 text-lg max-w-xl mx-auto mb-10">
            Ta&rsquo;limdagi kichik qadamlar katta natijalarga olib keladi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/aloqa"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-xl font-display font-bold hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/30 hover:-translate-y-0.5 text-lg"
            >
              Bog&rsquo;lanish
            </Link>
            <Link
              to="/biz-haqimizda"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-display font-semibold hover:border-white/60 hover:bg-white/10 transition-all text-lg"
            >
              Fanlarni ko&rsquo;rish
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
