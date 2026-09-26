import banner from "../../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="max-w-350 mx-auto px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-15">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
=
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <h1 className="text-[#0F172A] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        Build Your Ideal
                        <br />

                        <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-slate-600 text-sm sm:text-base my-6 sm:my-8 leading-6">
                        Explore frontend, backend, database, and tooling options,
                        <br className="hidden sm:block" />
                        compare them side by side, and put together the stack that fits
                        your
                        <br className="hidden sm:block" />
                        next project.
                    </p>

                    <div className="flex flex-row items-center justify-center lg:justify-start gap-2">
                        <button
                            className="bg-linear-to-r from-[#F97316] to-[#EC4899] hover:bg-none hover:bg-white hover:text-slate-600 hover:border text-white px-3 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                        >
                            Explore Technologies
                        </button>

                        <button
                            className="hover:bg-linear-to-r hover:from-[#F97316] hover:to-[#EC4899] hover:text-white border text-slate-600 px-3 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={banner}
                        alt="Development Stack"
                        className="w-60 sm:w-72 md:w-80 lg:w-full max-w-md object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;