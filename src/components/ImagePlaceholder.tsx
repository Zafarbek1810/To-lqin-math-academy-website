interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  icon?: "camera" | "person" | "classroom" | "event";
}

const icons = {
  camera: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  ),
  person: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </>
  ),
  classroom: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  ),
  event: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  ),
};

export default function ImagePlaceholder({
  label = "Rasm joylash",
  className = "",
  icon = "camera",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-purple-pale to-violet-50 border-2 border-dashed border-brand-purple/25 flex flex-col items-center justify-center gap-3 group ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple/15 transition-colors">
        <svg
          className="w-7 h-7 text-brand-purple/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icons[icon]}
        </svg>
      </div>
      <div className="text-center px-6">
        <p className="text-brand-purple/60 text-sm font-medium font-display leading-snug">
          {label}
        </p>
        <p className="text-brand-purple/30 text-xs mt-0.5">
          [Haqiqiy rasm shu yerga joylashtiriladi]
        </p>
      </div>
    </div>
  );
}
