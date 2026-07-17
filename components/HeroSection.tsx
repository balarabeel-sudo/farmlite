const HeroSection = () => {
  return (
    <section className="bg-green-700 text-white rounded-3xl p-8 mx-4 mt-6">
      <h1 className="text-4xl font-bold leading-tight">
        Welcome to Farmlite
      </h1>

      <p className="mt-4 text-green-100 text-lg">
        Africa's Digital Agriculture Platform connecting Farmers,
        Buyers, Companies, Investors and Experts.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap">
        <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold">
          Explore Marketplace
        </button>

        <button className="border border-white px-6 py-3 rounded-xl font-semibold">
          Join Community
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
