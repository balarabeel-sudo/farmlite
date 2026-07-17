
function BottomNavigation() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
      }}
    >
      <div>🏠<br />Home</div>
      <div>🛒<br />Market</div>
      <div>👥<br />Community</div>
      <div>💬<br />Chat</div>
      <div>👤<br />Profile</div>
    </nav>
  );
}

export default BottomNavigation;
