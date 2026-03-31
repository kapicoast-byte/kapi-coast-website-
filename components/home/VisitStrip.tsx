export default function VisitStrip() {
  return (
    <section style={{ background: "#3D2208" }} className="py-12">
      <div className="flex flex-col items-center text-center px-6">

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 32,
            color: "#FFFFFF",
            marginBottom: 12,
          }}
        >
          Come Visit Us
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "#EDD5A0",
            marginBottom: 32,
          }}
        >
          Chennai, Tamil Nadu &mdash; Open 7 days a week
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "#C8882A",
              padding: "12px 28px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Get Directions
          </a>

          <a
            href="/menu"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              border: "2px solid #FFFFFF",
              background: "transparent",
              padding: "12px 28px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            View Menu
          </a>
        </div>

      </div>
    </section>
  );
}
