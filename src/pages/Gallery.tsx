import { useState } from "react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SciBg from "../components/SciBg";

const categories = [
  "Barchasi",
  "Dars jarayonlari",
  "O'quvchilar",
  "Ustozlar",
  "Tadbirlar",
  "Musobaqalar",
  "Markaz muhiti",
];

type Item = {
  label: string;
  cat: string;
  icon: "camera" | "person" | "classroom" | "event";
  span: string;
};

const items: Item[] = [
  {
    label: "[DARS JARAYONI]\nSinf xonasidagi faol ta'lim muhiti",
    cat: "Dars jarayonlari",
    icon: "classroom",
    span: "row-span-2",
  },
  {
    label: "[O'QUVCHILAR]\nGuruhdagi o'quvchilar",
    cat: "O'quvchilar",
    icon: "person",
    span: "",
  },
  {
    label: "[TADBIR RASMI]\nMarkaz tadbirlaridan ko'rinish",
    cat: "Tadbirlar",
    icon: "event",
    span: "",
  },
  {
    label: "[MUSOBAQA]\nOlimpiadadagi g'oliblar",
    cat: "Musobaqalar",
    icon: "event",
    span: "row-span-2",
  },
  {
    label: "[DARS JARAYONI]\nMatematika darsi",
    cat: "Dars jarayonlari",
    icon: "classroom",
    span: "",
  },
  {
    label: "[MARKAZ MUHITI]\nO'quv xonasi interyeri",
    cat: "Markaz muhiti",
    icon: "classroom",
    span: "",
  },
  {
    label: "[USTOZ RASMI]\nDars berish jarayoni",
    cat: "Ustozlar",
    icon: "person",
    span: "",
  },
  {
    label: "[O'QUVCHILAR]\nGuruh o'quvchilari",
    cat: "O'quvchilar",
    icon: "person",
    span: "row-span-2",
  },
  {
    label: "[TADBIR RASMI]\nYillik tadbir ko'rinishi",
    cat: "Tadbirlar",
    icon: "event",
    span: "",
  },
  {
    label: "[MUSOBAQA]\nTanlov ishtirokchilari",
    cat: "Musobaqalar",
    icon: "event",
    span: "",
  },
  {
    label: "[DARS JARAYONI]\nFizika laboratoriyasi",
    cat: "Dars jarayonlari",
    icon: "classroom",
    span: "",
  },
  {
    label: "[MARKAZ MUHITI]\nKutubxona va o'qish zali",
    cat: "Markaz muhiti",
    icon: "classroom",
    span: "",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("Barchasi");

  const filtered =
    active === "Barchasi"
      ? items
      : items.filter((it) => it.cat === active);

  return (
    <main className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 bg-brand-dark overflow-hidden">
        <SciBg color="#ffffff" opacity={0.5} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/30 to-brand-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-gold uppercase mb-4">
            Multimedia
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-5">
            Galereya
          </h1>
          <p className="font-sans text-white/65 text-lg max-w-xl leading-relaxed">
            Markazimizdagi ta&rsquo;lim jarayoni, tadbirlar va
            o&rsquo;quvchilarimiz hayotidan lavhalar.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-display font-medium transition-all ${
                  active === cat
                    ? "bg-brand-purple text-white shadow-md shadow-brand-purple/30"
                    : "bg-white border border-brand-purple/15 text-brand-dark/65 hover:border-brand-purple/35 hover:text-brand-purple"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <ImagePlaceholder
                  label={item.label}
                  icon={item.icon}
                  className={`w-full ${i % 3 === 0 ? "aspect-[3/4]" : i % 2 === 0 ? "aspect-square" : "aspect-video"}`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-purple/0 group-hover:bg-brand-purple/15 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <p className="font-display text-brand-purple text-sm font-semibold">
                      {item.cat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-brand-dark/40 font-sans">
              Bu kategoriyada hozircha rasm yo&rsquo;q.
            </div>
          )}

          <div className="text-center mt-14">
            <p className="font-sans text-sm text-brand-dark/45 mb-6">
              Haqiqiy rasmlar keyinchalik joylashtiriladi. Har bir placeholder
              o&rsquo;rniga real akademiya rasmlari qo&rsquo;yilishi mumkin.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-display font-medium">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {filtered.length} ta rasm ko&rsquo;rsatilmoqda
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
