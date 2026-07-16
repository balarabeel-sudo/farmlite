function Navbar() {
  return (
    <header
      style={{
        background: "#0B6B3A",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🌱 FarmLite</h2>

      <div style={{ display: "flex", gap: "15px", fontSize: "20px" }}>
        <span>🔍</span>
        <span>💬</span>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Navbar;
