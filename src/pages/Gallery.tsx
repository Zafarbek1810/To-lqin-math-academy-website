import { useEffect, useState } from "react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SciBg from "../components/SciBg";
import gallery1 from "../gallery/1.jpg";
import gallery2 from "../gallery/2.jpg";
import gallery3 from "../gallery/3.jpg";
import gallery4 from "../gallery/4.jpg";
import gallery5 from "../gallery/5.jpg";
import gallery6 from "../gallery/6.jpg";
import gallery7 from "../gallery/7.jpg";
import gallery8 from "../gallery/8.jpg";
import gallery9 from "../gallery/9.jpg";
import gallery10 from "../gallery/10.jpg";
import gallery11 from "../gallery/11.jpg";
import gallery12 from "../gallery/12.jpg";
import gallery13 from "../gallery/13.jpg";
import gallery14 from "../gallery/14.jpg";
import gallery15 from "../gallery/15.jpg";
import gallery16 from "../gallery/16.jpg";
import dars1 from "../dars/20.jpg";
import dars2 from "../dars/21.jpg";
import dars3 from "../dars/22.jpg";
import dars4 from "../dars/23.jpg";
import dars5 from "../dars/24.jpg";


const categories = [
  "Barchasi",
  "Dars jarayonlari",
  // "O'quvchilar",
  // "Ustozlar",
  "Tadbirlar",
  "Musobaqalar",
  "Markaz muhiti",
];

type Item = {
  label: string;
  cat: string;
  icon: "camera" | "person" | "classroom" | "event";
  span: string;
  src?: string;
};

const tadbirImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
];

const darsImages = [
  dars1,
  dars2,
  dars3,
  dars4,
  dars5,
];

const items: Item[] = [
  ...darsImages.map((src, i) => ({
    label: `[DARS JARAYONI]\nFizika darsi ${i + 1}`,
    cat: "Dars jarayonlari",
    icon: "classroom" as const,
    span: "",
    src,
  })),
  // {
  //   label: "[O'QUVCHILAR]\nGuruhdagi o'quvchilar",
  //   cat: "O'quvchilar",
  //   icon: "person",
  //   span: "",
  // },
  ...tadbirImages.map((src, i) => ({
    label: `[TADBIR RASMI]\nMarkaz tadbirlaridan ko'rinish ${i + 1}`,
    cat: "Tadbirlar",
    icon: "event" as const,
    span: "",
    src,
  })),
  // {
  //   label: "[MUSOBAQA]\nOlimpiadadagi g'oliblar",
  //   cat: "Musobaqalar",
  //   icon: "event",
  //   span: "row-span-2",
  // },
 
  // {
  //   label: "[MARKAZ MUHITI]\nO'quv xonasi interyeri",
  //   cat: "Markaz muhiti",
  //   icon: "classroom",
  //   span: "",
  // },
  // {
  //   label: "[USTOZ RASMI]\nDars berish jarayoni",
  //   cat: "Ustozlar",
  //   icon: "person",
  //   span: "",
  // },
  // {
  //   label: "[O'QUVCHILAR]\nGuruh o'quvchilari",
  //   cat: "O'quvchilar",
  //   icon: "person",
  //   span: "row-span-2",
  // },
  // {
  //   label: "[MUSOBAQA]\nTanlov ishtirokchilari",
  //   cat: "Musobaqalar",
  //   icon: "event",
  //   span: "",
  // },
  // {
  //   label: "[MARKAZ MUHITI]\nKutubxona va o'qish zali",
  //   cat: "Markaz muhiti",
  //   icon: "classroom",
  //   span: "",
  // },
];

export default function Gallery() {
  const [active, setActive] = useState("Barchasi");
  const [selected, setSelected] = useState<Item | null>(null);

  const filtered =
    active === "Barchasi"
      ? items
      : items.filter((it) => it.cat === active);

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
                className={`px-4 py-2 rounded-xl text-sm font-display font-medium transition-all ${active === cat
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
              <button
                type="button"
                key={i}
                onClick={() => item.src && setSelected(item)}
                className="break-inside-avoid group relative block w-full overflow-hidden rounded-2xl cursor-pointer text-left"
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.label.replace(/\n/g, " ")}
                    className={`w-full object-cover ${i % 3 === 0 ? "aspect-[3/4]" : i % 2 === 0 ? "aspect-square" : "aspect-video"}`}
                  />
                ) : (
                  <ImagePlaceholder
                    label={item.label}
                    icon={item.icon}
                    className={`w-full ${i % 3 === 0 ? "aspect-[3/4]" : i % 2 === 0 ? "aspect-square" : "aspect-video"}`}
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-purple/0 group-hover:bg-brand-purple/15 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <p className="font-display text-brand-purple text-sm font-semibold">
                      {item.cat}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-brand-dark/40 font-sans">
              Bu kategoriyada hozircha rasm yo&rsquo;q.
            </div>
          )}

          <div className="text-center mt-14">
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

      {/* Image modal */}
      {selected?.src && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selected.label.replace(/\n/g, " ")}
        >
          <button
            type="button"
            aria-label="Yopish"
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative z-10 max-h-[90vh] max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Yopish"
              className="absolute -top-12 right-0 sm:-right-2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selected.src}
              alt={selected.label.replace(/\n/g, " ")}
              className="max-h-[85vh] w-full object-contain rounded-2xl shadow-2xl"
            />
            <p className="mt-4 text-center font-display text-white/80 text-sm">
              {selected.cat}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
