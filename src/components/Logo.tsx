import logo from "../images/bg-logo.png";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = { sm: 32, md: 40, lg: 52 }[size];
  const textSize = { sm: "text-[10px]", md: "text-xs", lg: "text-sm" }[size];
  const nameSize = { sm: "text-xs", md: "text-sm", lg: "text-base" }[size];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className="relative flex-shrink-0 rounded-xl flex items-center justify-center"
        style={{ width: dim, height: dim }}
      >
        <img src={logo} alt="Logo" className="w-[150px] h-[150px] object-contain" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-brand-purple ${nameSize} tracking-tight`}
        >
          To&rsquo;lqinbek
        </span>
        <span
          className={`font-display font-semibold text-brand-green ${textSize} tracking-wide uppercase`}
        >
          Math Academy
        </span>
      </div>
    </div>
  );
}
