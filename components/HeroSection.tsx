
function HeroSection() {
  return (
    <section
      style={{
        background: "#F4FFF6",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#0B6B3A", fontSize: "32px" }}>
        Welcome to FarmLite 🌱
      </h1>

      <p
        style={{
          color: "#555",
          maxWidth: "600px",
          margin: "15px auto",
          lineHeight: "1.6",
        }}
      >
        Connect with farmers, buyers, companies, investors, experts and grow
        agriculture together from anywhere in the world.
      </p>

      <button
        style={{
          background: "#0B6B3A",
          color: "#fff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        🤖 FarmBot AI (Coming Soon)
      </button>
    </section>
  );
}

export default HeroSection;
