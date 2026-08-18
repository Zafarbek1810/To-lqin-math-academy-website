import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const examData = [
  { subject: "Matematika", natija: 94 },
  { subject: "Fizika", natija: 88 },
  { subject: "Kimyo", natija: 91 },
  { subject: "Ingliz", natija: 87 },
  { subject: "Biologiya", natija: 85 },
  { subject: "Informatika", natija: 93 },
];

const highlights = [
  { value: "100+", label: "Yuqori natija", color: "text-brand-purple" },
  { value: "95%", label: "Ijobiy imtihon", color: "text-brand-green" },
  { value: "50+", label: "Olimpiada g'olibi", color: "text-brand-gold" },
];

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-brand-purple/20 rounded-xl px-4 py-2 shadow-lg">
      <p className="font-display font-semibold text-brand-dark text-sm">{label}</p>
      <p className="font-sans text-brand-purple text-sm">{payload[0].value}%</p>
    </div>
  );
}

export default function ExamResultsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/60 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-display font-semibold tracking-widest text-brand-green uppercase mb-3">
            Imtihon natijalari
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
            Tasdiqlangan{" "}
            <span className="text-brand-purple">natijalar</span>
          </h2>
          <p className="mt-4 text-brand-dark/55 font-sans max-w-xl mx-auto">
            O&rsquo;quvchilarimizning fanlar bo&rsquo;yicha o&rsquo;rtacha
            muvaffaqiyat ko&rsquo;rsatkichlari.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 bg-brand-cream rounded-2xl p-6 sm:p-8 border border-brand-purple/10">
            <h3 className="font-display font-bold text-brand-dark text-lg mb-1">
              Fanlar bo&rsquo;yicha natijalar
            </h3>
            <p className="font-sans text-brand-dark/45 text-xs mb-6">
              O&rsquo;rtacha muvaffaqiyat foizi (%)
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={examData} barSize={28}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#EDE9FE"
                  vertical={false}
                />
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
                <Tooltip content={<ChartTooltip />} />
                <Bar
                  dataKey="natija"
                  fill="#5B21B6"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex-1 bg-brand-cream rounded-2xl p-6 border border-brand-purple/10 flex flex-col justify-center"
              >
                <div
                  className={`font-display font-bold text-4xl lg:text-5xl ${item.color}`}
                >
                  {item.value}
                </div>
                <p className="font-sans text-sm text-brand-dark/55 mt-2 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/natijalar"
            className="inline-flex items-center gap-2 border-2 border-brand-purple text-brand-purple px-7 py-3.5 rounded-xl font-display font-semibold hover:bg-brand-purple hover:text-white transition-all"
          >
            Barcha natijalar
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
          </Link>
        </div>
      </div>
    </section>
  );
}
