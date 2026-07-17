function SearchBar() {
  return (
    <section
      style={{
        padding: "20px",
        background: "#ffffff",
      }}
    >
      <input
        type="text"
        placeholder="Search farmers, products, companies, communities..."
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "14px",
          border: "1px solid #d1d5db",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </section>
  );
}

export default SearchBar;
