const Card = () => {
  return (
    <div className="border border-slate-200 rounded-xl p-4 bg-white hover:shadow-md transition-all duration-300">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between gap-2">
        <img
          className="w-8 h-8 object-contain"
          src="https://icon.icepanel.io/Technology/svg/React.svg"
          alt="React"
        />

        <p className="bg-[#E0F2FE] text-xs py-1 px-3 rounded-xl">
          Popular
        </p>
      </div>

      {/* Content */}
      <div>
        <h1 className="font-bold text-base my-2 text-slate-900">
          React
        </h1>

        <p className="text-sm text-slate-500 leading-5 line-clamp-2">
          A JavaScript library for building user interfaces and modern
          web applications.
        </p>

        {/* Category + Difficulty + Rating */}
        <div className="flex items-center justify-between gap-1 my-3">

          <p className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
            Frontend
          </p>

          <p className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
            Beginner-Friendly
          </p>

          <p className="text-xs text-orange-500">
            ⭐ 4.9
          </p>

        </div>

        {/* Button */}
        <button className="py-2 w-full rounded-lg text-sm text-white font-semibold bg-[#0F172A] hover:bg-[#1E293B] transition-all duration-300">
          Add to Stack
        </button>
      </div>

    </div>
  );
};

export default Card;