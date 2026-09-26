import banner from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="max-w-350 mx-auto mt-15">
      <div className="flex items-center justify-between gap-12">


        <div className="w-1/2">
          <h1 className="text-[#0F172A] font-extrabold text-5xl leading-tight">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-600 my-8 leading-6">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your
            <br />
            next project.
          </p>


          <div className="flex items-center gap-2">
            <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] hover:bg-none hover:bg-white hover:text-slate-600 hover:border text-white px-5 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500">
              Explore Technologies
            </button>

            <button className="hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#EC4899] hover:text-white border text-slate-600 px-5 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>


        <div className="w-1/2 flex justify-center">
          <img
            src={banner}
            alt="Development Stack"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;