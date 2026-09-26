const Card = ({
    card,
    handleAddToStack,
    stack,
}) => {

    const isAdded = stack.some(
        (item) => item.id === card.id
    );

    return (
        <div className="border border-slate-200 rounded-xl p-3 sm:p-4 bg-white hover:shadow-md transition-all duration-300">

            {/* Icon + Badge */}
            <div className="flex items-center justify-between gap-2">

                <img
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    src={card.icon}
                    alt={card.name}
                />

                <p className="bg-[#E0F2FE] text-[10px] sm:text-xs py-1 px-2 sm:px-3 rounded-xl">
                    {card.badge}
                </p>

            </div>

            {/* Content */}
            <div>

                <h1 className="font-bold text-sm sm:text-base my-2 text-slate-900">
                    {card.name}
                </h1>

                <p className="text-xs sm:text-sm text-slate-500 leading-5 line-clamp-2">
                    {card.description}
                </p>

                {/* Info */}
                <div className="flex items-center justify-between gap-1 my-3">

                    <p className="text-[9px] sm:text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {card.category}
                    </p>

                    <p className="text-[9px] sm:text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {card.difficulty}
                    </p>

                    <p className="text-[9px] sm:text-xs text-orange-500">
                        ⭐ {card.rating}
                    </p>

                </div>

                {/* Add Button */}
                <button
                    onClick={() => handleAddToStack(card)}
                    disabled={isAdded}
                    className={`py-2 w-full rounded-lg text-xs sm:text-sm text-white font-semibold transition-all duration-300 ${isAdded
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#0F172A] hover:bg-[#1E293B]"
                        }`}
                >
                    {isAdded
                        ? "Added to Stack"
                        : "Add to Stack"}
                </button>

            </div>
        </div>
    );
};

export default Card;