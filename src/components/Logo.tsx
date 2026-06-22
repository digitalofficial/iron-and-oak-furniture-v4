"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: "48px", width: "auto" }}
      aria-label="Iron and Oak Furniture logo"
      role="img"
    >
      {/* Anvil / Iron Bracket */}
      <path
        d="M10 55 L10 25 Q10 18 17 18 L30 18 L30 22 L18 22 Q14 22 14 26 L14 55 Z"
        fill="#94A3B8"
      />
      <path
        d="M14 32 L32 32 L32 36 L14 36 Z"
        fill="#94A3B8"
      />
      <rect x="8" y="55" width="28" height="5" rx="2" fill="#94A3B8" />
      {/* Anvil top */}
      <path
        d="M6 55 L38 55 L35 51 L9 51 Z"
        fill="#D97706"
      />

      {/* Oak Leaf */}
      <path
        d="M42 50 Q44 38 50 32 Q46 34 42 30 Q46 26 52 24 Q48 22 46 18 Q52 18 56 22 Q56 16 60 12 Q60 20 62 24 Q66 18 70 18 Q68 22 64 26 Q70 26 72 30 Q68 32 64 30 Q68 36 66 42 Q62 38 60 34 Q58 40 56 46 Q54 42 52 38 Q50 44 48 48 Z"
        fill="#D97706"
        opacity="0.9"
      />
      {/* Leaf stem */}
      <path
        d="M56 46 Q56 54 52 60"
        stroke="#92400E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Text: IRON & OAK */}
      <text
        x="86"
        y="40"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill="#FBF7F0"
        letterSpacing="3"
      >
        IRON & OAK
      </text>

      {/* Text: FURNITURE */}
      <text
        x="86"
        y="60"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="12"
        fontWeight="400"
        fill="#8B7E6A"
        letterSpacing="6"
      >
        FURNITURE
      </text>
    </svg>
  );
}
