import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import SciBg from "../components/SciBg";
import alisherPdf from "../sertificat/alisher.pdf";
import asalhonPdf from "../sertificat/asalhon.pdf";
import baxtigulPdf from "../sertificat/baxtigul.pdf";
import dilshodaPdf from "../sertificat/dilshoda.pdf";
import diyorbekPdf from "../sertificat/diyorbek.pdf";
import inomjonPdf from "../sertificat/inomjon.pdf";
import madinaPdf from "../sertificat/madina.pdf";
import shodmonjonPdf from "../sertificat/shodmonjon.pdf";
import shohidaPdf from "../sertificat/shohida.pdf";
import shoxidaPdf from "../sertificat/shoxida.pdf";
import zahroPdf from "../sertificat/zahro.pdf";
import zarnigorPdf from "../sertificat/zarnigor.pdf";

const badges = [
  {
    label: "TOP NATIJA",
    color: "bg-brand-gold text-white",
    border: "border-brand-gold",
  },
  {
    label: "OLIMPIADA G'OLIBI",
    color: "bg-brand-purple text-white",
    border: "border-brand-purple",
  },
  {
    label: "YUKSAK NATIJA",
    color: "bg-brand-green text-white",
    border: "border-brand-green",
  },
  {
    label: "SERTIFIKAT",
    color: "bg-white text-brand-gold border-brand-gold/50",
    border: "border-brand-gold",
  },
];

type Achievement = {
  name: string;
  pdf: string;
};

const achievements: Achievement[] = [
  { name: "Baxtiyorov Alisher", pdf: alisherPdf },
  { name: "Qazaqova Asalxon", pdf: asalhonPdf },
  { name: "Botirova Baxtigul", pdf: baxtigulPdf },
  { name: "Ro'zmatova Dilshoda", pdf: dilshodaPdf },
  { name: "Abdiraximov Diyorbek", pdf: diyorbekPdf },
  { name: "Karimov Inomjon", pdf: inomjonPdf },
  { name: "Otajonova Madina", pdf: madinaPdf },
  { name: "Satimova Shodmonjon", pdf: shodmonjonPdf },
  { name: "Achilova Shohida", pdf: shohidaPdf },
  { name: "Sobirova Shoxida", pdf: shoxidaPdf },
  { name: "Jumaboyeva Zahro", pdf: zahroPdf },
  { name: "Iskandarova Zarnigor", pdf: zarnigorPdf },
];

const growthData = [
  { year: "2020", students: 80 },
  { year: "2021", students: 145 },
  { year: "2022", students: 220 },
  { year: "2023", students: 340 },
  { year: "2024", students: 440 },
  { year: "2025", students: 500 },
];

const subjectData = [
  { subject: "Matematika", natija: 94 },
  { subject: "Fizika", natija: 88 },
  { subject: "Kimyo", natija: 91 },
  { subject: "Ingliz", natija: 87 },
  { subject: "Biologiya", natija: 85 },
  { subject: "Informatika", natija: 93 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-brand-purple/20 rounded-xl px-4 py-2 shadow-lg">
        <p className="font-display font-semibold text-brand-dark text-sm">
          {label}
        </p>
        <p className="font-sans text-brand-purple text-sm">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function Results() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <main className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 bg-brand-dark overflow-hidden">
        <SciBg color="#ffffff" opacity={0.5} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-gold uppercase mb-4">
            Yutuqlar
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-5">
            Natijalarimiz
          </h1>
          <p className="font-sans text-white/65 text-lg max-w-xl leading-relaxed">
            Biz uchun eng katta natija — o&rsquo;quvchilarimizning
            yutug&rsquo;i.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-brand-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "500+",
                l: "O'quvchi",
                desc: "Jami o'qigan",
                c: "text-brand-purple",
              },
              {
                n: "100+",
                l: "Yuqori natija",
                desc: "Ajoyib ko'rsatkich",
                c: "text-brand-green",
              },
              {
                n: "12+",
                l: "Sertifikatlar",
                desc: "Xalqaro va mahalliy",
                c: "text-brand-gold",
              },
              {
                n: "XX+",
                l: "Olimpiada g'oliblari",
                desc: "Turli darajalarda",
                c: "text-brand-purple",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-brand-cream rounded-2xl p-6 border border-brand-purple/10 text-center"
              >
                <div
                  className={`font-display font-bold text-4xl ${s.c} mb-1`}
                >
                  {s.n}
                </div>
                <div className="font-display font-semibold text-brand-dark text-sm">
                  {s.l}
                </div>
                <div className="font-sans text-brand-dark/45 text-xs mt-1">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
        <SciBg color="#5B21B6" opacity={0.5} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-3">
              Statistika
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
              O&rsquo;sish{" "}
              <span className="text-brand-purple">ko&rsquo;rsatkichlari</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Growth chart */}
            <div className="bg-white rounded-2xl p-7 border border-brand-purple/10 shadow-sm">
              <h3 className="font-display font-bold text-brand-dark text-lg mb-1">
                O&rsquo;quvchilar soni dinamikasi
              </h3>
              <p className="font-sans text-brand-dark/45 text-xs mb-6">
                Yillar bo&rsquo;yicha o&rsquo;quvchilar soni
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EDE9FE" />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11, fontFamily: "Inter" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fontFamily: "Inter" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="students"
                    stroke="#5B21B6"
                    strokeWidth={3}
                    dot={{ fill: "#5B21B6", r: 5, strokeWidth: 2, stroke: "#fff" }}
                    activeDot={{ r: 7, stroke: "#5B21B6", strokeWidth: 2, fill: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Subject results */}
            <div className="bg-white rounded-2xl p-7 border border-brand-purple/10 shadow-sm">
              <h3 className="font-display font-bold text-brand-dark text-lg mb-1">
                Fanlar bo&rsquo;yicha natijalar
              </h3>
              <p className="font-sans text-brand-dark/45 text-xs mb-6">
                O&rsquo;rtacha muvaffaqiyat foizi (%)
              </p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={subjectData} barSize={28}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#EDE9FE" vertical={false} />
                  <XAxis
                    dataKey="subject"
                    tick={{ fontSize: 10, fontFamily: "Inter" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[75, 100]}
                    tick={{ fontSize: 11, fontFamily: "Inter" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="natija"
                    fill="#5B21B6"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Badge legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {badges.map((b, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-display font-bold border ${b.color} ${b.border}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-3">
              Yutuqlar
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
              O&rsquo;quvchilar{" "}
              <span className="text-brand-purple">yutug&rsquo;lari</span>
            </h2>
            <p className="mt-4 font-sans text-brand-dark/55 max-w-xl mx-auto">
              Har bir o&rsquo;quvchimizning muvaffaqiyati — bizning
              g&rsquo;ururimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a) => {
              const badge = badges[3];
              return (
                <article
                  key={a.name}
                  className="group bg-brand-cream rounded-2xl overflow-hidden border border-brand-purple/10 hover:shadow-xl hover:shadow-brand-purple/8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative bg-white">
                    <iframe
                      src={`${a.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title={`${a.name} sertifikati`}
                      className="w-full aspect-[4/3] border-0 pointer-events-none"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      onClick={() => setSelected(a)}
                      className="absolute inset-0 z-10 cursor-pointer"
                      aria-label={`${a.name} sertifikatini ochish`}
                    />
                    <div className="absolute top-3 right-3 z-20 pointer-events-none">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-display font-bold border ${badge.color} ${badge.border} shadow-md`}
                      >
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="font-display font-bold text-brand-dark">
                      {a.name}
                    </p>
                    <p className="text-brand-purple text-xs font-medium mt-0.5">
                      O&rsquo;quvchi sertifikati
                    </p>
                    <div className="mt-3 pt-3 border-t border-brand-purple/10">
                      <button
                        type="button"
                        onClick={() => setSelected(a)}
                        className="font-sans text-xs text-brand-dark/55 group-hover:text-brand-purple transition-colors"
                      >
                        To&rsquo;liq sertifikatni ko&rsquo;rish →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <SciBg color="#ffffff" opacity={0.4} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/80 to-brand-dark/90" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-display font-bold text-4xl text-white mb-4">
            Siz ham{" "}
            <span className="text-brand-gold">g&rsquo;olib</span> bo&rsquo;lishingiz
            mumkin
          </h3>
          <p className="font-sans text-white/60 mb-8">
            Maqsadingizga erishish uchun birinchi qadamni bugun qo&rsquo;ying.
          </p>
          <a
            href="/aloqa"
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-xl font-display font-bold hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/30"
          >
            Bog&rsquo;lanish
          </a>
        </div>
      </section>

      {/* Certificate modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} sertifikati`}
        >
          <button
            type="button"
            aria-label="Yopish"
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="font-display font-semibold text-white text-sm sm:text-base truncate">
                {selected.name}
              </p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Yopish"
                className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <iframe
                src={`${selected.pdf}#toolbar=0&navpanes=0&view=FitH`}
                title={`${selected.name} sertifikati`}
                className="w-full h-[70vh] sm:h-[75vh] border-0"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
