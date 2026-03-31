function DiamondBorder() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: 12 }}>
      <svg
        width="100%"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid repeat"
      >
        <defs>
          <pattern id="diamond-border" x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
            <polygon
              points="10,1 18,6 10,11 2,6"
              fill="#C8882A"
              opacity="0.35"
            />
          </pattern>
        </defs>
        <rect width="100%" height="12" fill="url(#diamond-border)" />
      </svg>
    </div>
  );
}

export default function StoryHero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center"
      style={{ background: "#5C3A1E", height: 320 }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#EDD5A0",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        WHO WE ARE
      </p>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 56,
          color: "#FFFFFF",
          lineHeight: 1.1,
        }}
      >
        Our Story
      </h1>

      {/* Gold rule */}
      <div
        style={{
          width: 60,
          height: 2,
          background: "#C8882A",
          marginTop: 16,
        }}
      />

      <DiamondBorder />
    </section>
  );
}
