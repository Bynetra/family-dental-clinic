/**
 * Original lightweight tooth SVG illustration with CSS animation.
 * No external assets — fully self-contained.
 */
export function ToothIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 340"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Soft shadow ellipse */}
      <ellipse cx="160" cy="318" rx="80" ry="12" fill="#123E43" opacity="0.08" />

      {/* Main tooth body */}
      <path
        d="M108 52 C82 52 62 72 62 96 C62 124 68 160 82 196 C90 220 100 240 112 248 C120 254 124 252 128 242 C132 232 136 222 142 218 C148 214 152 214 158 218 C164 222 168 232 172 242 C176 252 180 254 188 248 C200 240 210 220 218 196 C232 160 238 124 238 96 C238 72 218 52 192 52 C180 52 174 58 160 58 C146 58 140 52 108 52Z"
        fill="#DCEEE8"
        stroke="#123E43"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Root left */}
      <path
        d="M128 242 C124 260 122 278 124 294"
        stroke="#123E43"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Root right */}
      <path
        d="M172 242 C176 260 178 278 176 294"
        stroke="#123E43"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Shine highlight on tooth */}
      <path
        d="M104 84 C104 72 114 64 124 66"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Smile arc */}
      <path
        d="M120 130 Q160 156 200 130"
        stroke="#123E43"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        className="animate-smile-draw"
        style={{
          strokeDasharray: 120,
          strokeDashoffset: 0,
        }}
      />

      {/* Left eye-dot */}
      <circle cx="133" cy="108" r="6" fill="#123E43" opacity="0.75" />
      {/* Right eye-dot */}
      <circle cx="187" cy="108" r="6" fill="#123E43" opacity="0.75" />

      {/* Sparkle top-left */}
      <g opacity="0.6">
        <line x1="58" y1="42" x2="58" y2="32" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="53" y1="47" x2="46" y2="47" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="55" y1="44" x2="49" y2="38" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="61" y1="44" x2="67" y2="38" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Sparkle top-right */}
      <g opacity="0.45">
        <line x1="264" y1="66" x2="264" y2="58" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="259" y1="71" x2="252" y2="71" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="261" y1="68" x2="256" y2="63" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
        <line x1="267" y1="68" x2="272" y2="63" stroke="#2A9A8C" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Floating bubble top */}
      <circle cx="244" cy="38" r="8" fill="#EEF7F4" stroke="#DCEEE8" strokeWidth="2" opacity="0.8" />
      <circle cx="268" cy="108" r="5" fill="#EEF7F4" stroke="#DCEEE8" strokeWidth="1.5" opacity="0.6" />
      <circle cx="52" cy="160" r="6" fill="#EEF7F4" stroke="#DCEEE8" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

