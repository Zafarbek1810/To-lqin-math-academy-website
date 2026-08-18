import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SciBg from "../components/SciBg";
import aboutImage2 from "../images/222.jpg";
import direktor from "../images/direktor.jpg";

const teachers = [
  { subject: "Matematika", exp: "8 yil tajriba" },
  { subject: "Fizika", exp: "6 yil tajriba" },
  { subject: "Kimyo", exp: "10 yil tajriba" },
  { subject: "Ingliz tili", exp: "7 yil tajriba" },
  { subject: "Biologiya", exp: "5 yil tajriba" },
  { subject: "Informatika", exp: "9 yil tajriba" },
  { subject: "Ona tili", exp: "12 yil tajriba" },
  { subject: "Tarix", exp: "6 yil tajriba" },
];

const subjectsFull = [
  {
    icon: "∑",
    name: "Matematika",
    desc: "Algebra, geometriya, trigonometriya, analizning kirish kursi va olimpiada matematikasi. Abituriyentlar va olimpiadachilar uchun maxsus guruhlar mavjud.",
    tag: "Asosiy fan",
    tagColor: "bg-brand-purple/10 text-brand-purple",
  },
  {
    icon: "⚛",
    name: "Fizika",
    desc: "Mexanika, molekulyar fizika, elektromagnitizm, optika va kvant fizikasining asoslari. DTM va olimpiadalarga to'liq tayyorlov.",
    tag: "Aniq fanlar",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🧪",
    name: "Kimyo",
    desc: "Organik va noorganik kimyo, laboratoriya tajribalari va DTM testlari bo'yicha chuqur bilim berish.",
    tag: "Aniq fanlar",
    tagColor: "bg-green-100 text-brand-green",
  },
  {
    icon: "🧬",
    name: "Biologiya",
    desc: "Inson anatomiyasi, botanika, zoologiya, genetika va ekologiya bo'yicha kompleks ta'lim.",
    tag: "Tabiiy fanlar",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    icon: "🌐",
    name: "Ingliz tili",
    desc: "A1-dan C1 gacha barcha darajalar, IELTS va TOEFL tayyorgarlik, biznes ingliz tili.",
    tag: "Tillar",
    tagColor: "bg-amber-100 text-brand-gold",
  },
  {
    icon: "📚",
    name: "Ona tili va adabiyot",
    desc: "O'zbek tili grammatikasi, adabiy tahlil, insho yozish va DTM testlari.",
    tag: "Ijtimoiy fanlar",
    tagColor: "bg-rose-100 text-rose-700",
  },
  {
    icon: "🏛",
    name: "Tarix",
    desc: "O'zbekiston tarixi, jahon tarixi, manbashunosllik va DTM test savollari tahlili.",
    tag: "Ijtimoiy fanlar",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: "💻",
    name: "Informatika",
    desc: "Python, algoritmlar, ma'lumotlar tuzilmalari, olimpiada dasturlash va raqamli savodxonlik.",
    tag: "Texnologiya",
    tagColor: "bg-slate-100 text-slate-600",
  },
];

function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14">
      <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-3">
        {tag}
      </span>
      <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-brand-dark/55 font-sans max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function About() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Page header */}
      <section className="relative py-16 lg:py-24 bg-brand-dark overflow-hidden">
        <SciBg color="#ffffff" opacity={0.6} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/80 to-brand-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-gold uppercase mb-4">
              O&rsquo;quv Markazi
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-5">
              Biz haqimizda
            </h1>
            <p className="font-sans text-white/65 text-lg leading-relaxed">
              To&rsquo;lqinbek Math Academy — akademik kuchli, natijaga
              yo&rsquo;naltirilgan va o&rsquo;quvchi markazida
              bo&rsquo;lgan zamonaviy ta&rsquo;lim muassasasi.
            </p>
          </div>
        </div>
      </section>

      {/* Markaz haqida */}
      <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
        <SciBg color="#5B21B6" opacity={0.5} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-4">
                Markaz haqida
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark leading-tight mb-6">
                Zamonaviy ta&rsquo;lim{" "}
                <span className="text-brand-purple">yangi formatda</span>
              </h2>
              <p className="font-sans text-brand-dark/60 leading-relaxed mb-4">
                To&rsquo;lqinbek Math Academy — o&rsquo;quvchilarni
                maktabdan universitetgacha bo&rsquo;lgan yo&rsquo;lda
                qo&rsquo;llab-quvvatlovchi, natijaga yo&rsquo;naltirilgan
                zamonaviy ta&rsquo;lim markazi.
              </p>
              <p className="font-sans text-brand-dark/55 leading-relaxed mb-6">
                Biz faqat dars bermaymiz — biz har bir o&rsquo;quvchining
                maqsadini tushunib, unga eng mos ta&rsquo;lim
                yo&rsquo;lini quramiz. Malakali ustozlar jamoasi,
                zamonaviy metodikalar va qulay ta&rsquo;lim muhiti bilan
                o&rsquo;quvchilarimizni eng yuqori natijalarga
                tayyorlaymiz.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "500+", l: "Bitiruvchilar" },
                  { n: "95%", l: "Muvaffaqiyat" },
                  { n: "10+", l: "Yillik tajriba" },
                  { n: "8+", l: "Fan yo'nalishlari" },
                ].map((item) => (
                  <div
                    key={item.l}
                    className="bg-white rounded-xl p-4 border border-brand-purple/10"
                  >
                    <div className="font-display font-bold text-2xl text-brand-purple">
                      {item.n}
                    </div>
                    <div className="font-sans text-xs text-brand-dark/55 mt-0.5">
                      {item.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* <ImagePlaceholder
                label="[MARKAZ RASMI]\nO'quv markaz binosi yoki ichki ko'rinish"
                icon="classroom"
                className="w-full aspect-[4/3]"
              /> */}
              <img src={aboutImage2} alt="About" className="w-full aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Ta'sischi */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Rahbariyat"
            title={
              <>
                Markaz{" "}
                <span className="text-brand-purple">ta&rsquo;sischisi</span>
              </>
            }
          />

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
             <img src={direktor} alt="Direktor" className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h3 className="font-display font-bold text-3xl text-brand-dark">
                    Olimboyev To'lqinbek G'ayrat o'g'li
                  </h3>
                  <p className="font-sans text-brand-purple font-medium mt-1">
                    Ta&rsquo;sischi va rahbar
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative bg-brand-purple/5 border-l-4 border-brand-purple rounded-r-2xl p-6 mb-7">
                <svg
                  className="absolute top-4 left-6 w-8 h-8 text-brand-purple/15"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="font-display text-lg font-semibold text-brand-dark leading-relaxed pl-8">
                  Ta&rsquo;lim — inson kelajagiga kiritilgan eng katta
                  sarmoyadir.
                </p>
              </blockquote>

              <div className="space-y-4 font-sans text-brand-dark/60 leading-relaxed">
                <p>
                  [Ta&rsquo;sischi haqida qisqacha ma&rsquo;lumot. Bu
                  yerda ta&rsquo;sischining ta&rsquo;lim sohasidagi
                  faoliyati, tajribasi va markaz tashkil etishga
                  bo&rsquo;lgan motivatsiyasi haqida yoziladi.]
                </p>
                <p>
                  [Ta&rsquo;sischining akademik ma&rsquo;lumoti,
                  kasbiy yutuqlari va o&rsquo;quv markazga
                  qo&rsquo;shgan hissasi haqida.]
                </p>
                <p>
                  [Ta&rsquo;lim metodologiyasi va o&rsquo;quvchilarga
                  bo&rsquo;lgan yondashuviga oid fikrlar.]
                </p>
              </div>

              <div className="flex items-center gap-3 mt-7">
                <a
                  href="https://t.me/JOKKER_OLIM"
                  className="inline-flex items-center gap-2 text-brand-purple text-sm font-display font-semibold hover:underline"
                >
                  Telegram orqali murojaat
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fanlar */}
      <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
        <SciBg color="#5B21B6" opacity={0.5} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Ta'lim yo'nalishlari"
            title={
              <>
                Bizning{" "}
                <span className="text-brand-purple">fanlarimiz</span>
              </>
            }
            subtitle="Keng qamrovli ta'lim dasturlari orqali har bir o'quvchining maqsadiga erishishiga yordam beramiz."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjectsFull.map((s, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-brand-purple/10 hover:border-brand-purple/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-mono mb-4">{s.icon}</div>
                <span
                  className={`inline-block text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${s.tagColor} mb-3`}
                >
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-brand-dark text-base mb-2">
                  {s.name}
                </h3>
                <p className="font-sans text-xs text-brand-dark/55 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ustozlar */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Jamoamiz"
            title={
              <>
                Bizning{" "}
                <span className="text-brand-purple">ustozlar</span>
              </>
            }
            subtitle="Har bir ustoz o'z fanining mutaxassisi va o'quvchilarga g'amxo'r bo'lgan pedagogdir."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.map((t, i) => (
              <div
                key={i}
                className="group bg-brand-cream rounded-2xl overflow-hidden border border-brand-purple/10 hover:shadow-xl hover:shadow-brand-purple/8 hover:-translate-y-1 transition-all duration-300"
              >
                <ImagePlaceholder
                  label={`[USTOZ RASMI]\n${t.subject} o'qituvchisi`}
                  icon="person"
                  className="w-full aspect-square rounded-none border-none"
                />
                <div className="p-4">
                  <p className="font-display font-bold text-brand-dark text-sm">
                    [Ustoz F.I.Sh.]
                  </p>
                  <p className="text-brand-purple text-xs font-medium mt-0.5">
                    {t.subject}
                  </p>
                  <p className="text-brand-dark/45 text-xs mt-1 font-sans">
                    {t.exp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-purple-pale border-t border-brand-purple/15">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-display font-bold text-3xl text-brand-dark mb-4">
            Markaz bilan tanishishni xohlaysizmi?
          </h3>
          <p className="font-sans text-brand-dark/55 mb-8">
            Biz sizga shaxsan murojaat qilishingizni taklif etamiz.
          </p>
          <Link
            to="/aloqa"
            className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-4 rounded-xl font-display font-bold hover:bg-brand-purple-dark transition-all shadow-lg shadow-brand-purple/30"
          >
            Bog&rsquo;lanish
          </Link>
        </div>
      </section>
    </main>
  );
}
