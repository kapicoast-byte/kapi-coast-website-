import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Temporary placeholder — verifies wave transition */}
      <div
        style={{ background: "#F9F0E0" }}
        className="h-screen flex items-center justify-center"
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            color: "#5C3A1E",
            fontSize: "24px",
          }}
        >
          Next section coming soon
        </p>
      </div>
    </>
  );
}
