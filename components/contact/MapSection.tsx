"use client";

export default function MapSection() {
  return (
    <section className="w-full">
      {/* Bar above map */}
      <div
        style={{ background: "#3D2208", height: 48 }}
        className="flex items-center justify-center"
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Find us in Chennai
        </p>
      </div>

      {/* Map iframe */}
      <div className="w-full h-[300px] md:h-[420px]">
        <iframe
          src="https://maps.google.com/maps?q=Chennai,Tamil+Nadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          loading="lazy"
          title="Kapi Coast location — Chennai"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
