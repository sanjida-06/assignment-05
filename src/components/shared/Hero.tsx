import banner from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8 md:py-12">
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Ideal{" "}
            <span className="block text-brand-gradient">
              Development Stack
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#technologies"
              className="bg-brand-gradient text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition cursor-pointer shadow-sm"
            >
              Explore Technologies
            </a>
            <a
              href="#technologies"
              className="border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium px-5 py-2.5 rounded-xl transition cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="w-full max-w-md h-auto object-contain"
            src={banner}
            alt="Dev Stack Banner"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;