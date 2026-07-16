
function QuickActions() {
  const actions = [
    "🤖 FarmBot AI",
    "🛒 Marketplace",
    "👥 Communities",
    "🏢 Companies",
    "🚜 Equipment",
    "📈 Market Prices",
    "💰 Investors",
    "🌍 Trade",
  ];

  return (
    <section className="quick-actions">
      <h2>Quick Actions</h2>

      <div className="quick-grid">
        {actions.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </section>
  );
}

export default QuickActions;
