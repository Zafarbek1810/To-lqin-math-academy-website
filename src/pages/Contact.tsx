import { useState } from "react";
import SciBg from "../components/SciBg";

const subjects = [
  "Matematika",
  "Fizika",
  "Kimyo",
  "Biologiya",
  "Ingliz tili",
  "Ona tili va adabiyot",
  "Tarix",
  "Informatika",
  "Boshqa",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative py-16 lg:py-24 bg-brand-dark overflow-hidden">
        <SciBg color="#ffffff" opacity={0.5} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/60 to-brand-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-gold uppercase mb-4">
            Bog&rsquo;laning
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-5">
            Biz bilan bog&rsquo;laning
          </h1>
          <p className="font-sans text-white/65 text-lg max-w-xl leading-relaxed">
            Farzandingiz ta&rsquo;limi uchun to&rsquo;g&rsquo;ri
            tanlovni bugundan boshlang.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
        <SciBg color="#5B21B6" opacity={0.4} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-3xl text-brand-dark mb-8 leading-tight">
                Aloqa ma&rsquo;lumotlari
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    ),
                    label: "Telefon",
                    value: "+998 95 525 99 09",
                    href: "tel:+998978599909",
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    ),
                    label: "Telegram",
                    value: "@tolqinbek_math_academy",
                    href: "https://t.me/tolqinbek_math_academy",
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                    ),
                    label: "Instagram",
                    value: "@tolqinbek_academy",
                    href: "https://instagram.com/tolqinbek_academy",
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    ),
                    label: "Manzil",
                    value: "Bog'ot tumani Ashxabod mahallasi",
                    href: "#map",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-purple/10 hover:border-brand-purple/30 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple/15 transition-colors">
                      <svg
                        className="w-5 h-5 text-brand-purple"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs text-brand-dark/45 mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-display font-semibold text-brand-dark text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working hours */}
              <div className="mt-6 p-5 bg-brand-purple rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <svg
                    className="w-5 h-5 text-brand-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-display font-semibold text-white text-sm">
                    Ish vaqti
                  </span>
                </div>
                <p className="font-sans text-white/80 text-sm">
                  Dushanba – Shanba
                </p>
                <p className="font-display font-bold text-white text-lg">
                  08:00 – 20:00
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-brand-purple/10 shadow-xl shadow-brand-purple/5">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
                      <svg
                        className="w-8 h-8 text-brand-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">
                      Arizangiz qabul qilindi!
                    </h3>
                    <p className="font-sans text-brand-dark/55">
                      Tez orada siz bilan bog&rsquo;lanamiz.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", subject: "", message: "" });
                      }}
                      className="mt-6 text-brand-purple text-sm font-display font-semibold hover:underline"
                    >
                      Yangi ariza yuborish
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-2xl text-brand-dark mb-2">
                      Ariza yuborish
                    </h2>
                    <p className="font-sans text-brand-dark/50 text-sm mb-8">
                      Formani to&rsquo;ldiring, biz siz bilan
                      bog&rsquo;lanamiz.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-display font-medium text-brand-dark text-sm mb-2">
                            Ism <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Ismingiz"
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-brand-purple/20 bg-brand-cream font-sans text-brand-dark text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all placeholder:text-brand-dark/30"
                          />
                        </div>
                        <div>
                          <label className="block font-display font-medium text-brand-dark text-sm mb-2">
                            Telefon raqam <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+998 XX XXX XX XX"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-brand-purple/20 bg-brand-cream font-sans text-brand-dark text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all placeholder:text-brand-dark/30"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-display font-medium text-brand-dark text-sm mb-2">
                          Qiziqayotgan fan
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) =>
                            setForm({ ...form, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-brand-purple/20 bg-brand-cream font-sans text-brand-dark text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all appearance-none"
                        >
                          <option value="">Fanni tanlang...</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-display font-medium text-brand-dark text-sm mb-2">
                          Xabar
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Savol yoki izohingizni yozing..."
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-brand-purple/20 bg-brand-cream font-sans text-brand-dark text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 transition-all resize-none placeholder:text-brand-dark/30"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand-purple text-white py-4 rounded-xl font-display font-bold text-base hover:bg-brand-purple-dark transition-all shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        Ariza yuborish
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>

                      <p className="text-center text-xs font-sans text-brand-dark/35">
                        Ariza yuborish orqali siz shaxsiy
                        ma&rsquo;lumotlarni qayta ishlashga rozilik
                        bildirasiz.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section id="map" className="py-0">
        <div className="relative bg-brand-purple-pale border-t border-brand-purple/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-1">
              Bizning manzilimiz
            </h3>
            <p className="font-sans text-brand-dark font-medium text-sm mb-1">
              To&rsquo;lqinbek Math Academy
            </p>
            <p className="font-sans text-brand-dark/50 text-sm mb-6">
              Bog&rsquo;ot tumani, Ashxabod mahallasi — 41°21&apos;22.3&quot;N
              60°49&apos;40.4&quot;E
            </p>
          </div>

          {/* Map: red pin fixed at 41°21'22.3"N 60°49'40.4"E */}
          <div className="relative h-80 sm:h-96 border-t border-brand-purple/15 overflow-hidden">
            <iframe
              title="To'lqinbek Math Academy manzili"
              src="https://maps.google.com/maps?q=41.3561944,60.8278889+(To'lqinbek%20Math%20Academy,%20Bog'ot%20tumani,%20Ashxabod%20mahallasi)&z=18&hl=uz&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Address label above the pin */}
            <div className="pointer-events-none absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-full">
              <div className="relative rounded-xl bg-white px-4 py-2.5 shadow-lg shadow-brand-dark/20 border border-brand-purple/10 text-center max-w-[280px] sm:max-w-none">
                <p className="font-display font-bold text-brand-dark text-sm leading-snug">
                  To&rsquo;lqinbek Math Academy
                </p>
                <p className="font-sans text-brand-dark/60 text-xs mt-0.5 leading-snug">
                  Bog&rsquo;ot tumani, Ashxabod mahallasi
                </p>
                <span className="absolute left-1/2 -bottom-1.5 h-3 w-3 -translate-x-1/2 rotate-45 bg-white border-r border-b border-brand-purple/10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
