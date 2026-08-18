export default function SciBg({
  color = "currentColor",
  opacity = 1,
}: {
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <style>{`text { font-family: 'Georgia', serif; }`}</style>
      </defs>

      {/* Math formulas */}
      <text x="4%" y="12%" fontSize="15" fill={color} opacity="0.07">
        π = 3.14159…
      </text>
      <text x="72%" y="9%" fontSize="22" fill={color} opacity="0.06">
        √x
      </text>
      <text x="88%" y="35%" fontSize="16" fill={color} opacity="0.05">
        ∫ f(x) dx
      </text>
      <text x="6%" y="55%" fontSize="14" fill={color} opacity="0.06">
        Σ n=1 → ∞
      </text>
      <text x="3%" y="82%" fontSize="13" fill={color} opacity="0.05">
        a² + b² = c²
      </text>
      <text x="75%" y="88%" fontSize="15" fill={color} opacity="0.06">
        F = ma
      </text>
      <text x="40%" y="94%" fontSize="14" fill={color} opacity="0.05">
        E = mc²
      </text>
      <text x="55%" y="22%" fontSize="13" fill={color} opacity="0.04">
        lim x→0 sin(x)/x = 1
      </text>
      <text x="18%" y="28%" fontSize="18" fill={color} opacity="0.06">
        Δ
      </text>
      <text x="65%" y="65%" fontSize="17" fill={color} opacity="0.05">
        λ
      </text>
      <text x="30%" y="70%" fontSize="16" fill={color} opacity="0.04">
        x² + 2x + 1
      </text>

      {/* Geometric shapes */}
      <circle
        cx="90%"
        cy="18%"
        r="55"
        fill="none"
        stroke={color}
        strokeWidth="0.7"
        opacity="0.07"
      />
      <circle
        cx="8%"
        cy="75%"
        r="38"
        fill="none"
        stroke={color}
        strokeWidth="0.7"
        opacity="0.06"
      />
      <polygon
        points="50%,5% 53%,12% 47%,12%"
        fill="none"
        stroke={color}
        strokeWidth="0.7"
        opacity="0.06"
      />

      {/* Coordinate axes */}
      <line
        x1="78%"
        y1="55%"
        x2="95%"
        y2="55%"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.06"
      />
      <line
        x1="83%"
        y1="48%"
        x2="83%"
        y2="62%"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.06"
      />
      <text x="95.5%" y="55.8%" fontSize="9" fill={color} opacity="0.07">
        x
      </text>
      <text x="83.5%" y="47%" fontSize="9" fill={color} opacity="0.07">
        y
      </text>

      {/* Grid dots */}
      {Array.from({ length: 6 }).map((_, i) =>
        Array.from({ length: 4 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={`${15 + i * 14}%`}
            cy={`${20 + j * 20}%`}
            r="1"
            fill={color}
            opacity="0.04"
          />
        ))
      )}
    </svg>
  );
}
