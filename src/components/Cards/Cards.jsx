import { use, useState } from "react";
import Card from "../Card/Card";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ fetchCards }) => {
    const cards = use(fetchCards);

    const [stack, setStack] = useState([]);

    const handleAddToStack = (card) => {
        const alreadyAdded = stack.find(
            (item) => item.id === card.id
        );

        if (alreadyAdded) {
            toast.warning(`${card.name} is already in your stack!`);
            return;
        }

        setStack([...stack, card]);

        toast.success(`${card.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id) => {
        const removedCard = stack.find(
            (card) => card.id === id
        );

        setStack(
            stack.filter((card) => card.id !== id)
        );

        toast.error(
            `${removedCard.name} removed from your stack!`
        );
    };

    const handleRemoveAll = () => {
        if (stack.length === 0) {
            toast.info("Your stack is already empty!");
            return;
        }

        setStack([]);

        toast.success(
            "All technologies removed from your stack!"
        );
    };

    return (
        <>
            <div className="max-w-350 mx-auto px-4 sm:px-6 py-10 sm:py-14">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                handleAddToStack={handleAddToStack}
                                stack={stack}
                            />
                        ))}

                    </div>

                    <div className="lg:col-span-1">

                        <div className="border border-slate-200 rounded-xl p-4 sm:p-5 lg:sticky lg:top-24 bg-white">

                            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                                Your Stack
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                                {stack.length === 0
                                    ? "No technology selected yet."
                                    : `${stack.length} technology selected.`}
                            </p>

                            {stack.length === 0 ? (
                                <div className="border border-dashed border-slate-200 rounded-xl h-24 flex items-center justify-center mt-5">
                                    <span className="text-xs sm:text-sm text-gray-400">
                                        Your stack is empty.
                                    </span>
                                </div>
                            ) : (
                                <div className="mt-5 space-y-3">

                                    {stack.map((card) => (
                                        <div
                                            key={card.id}
                                            className="border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-2"
                                        >

                                            <div className="flex items-center gap-2 min-w-0">

                                                <img
                                                    src={card.icon}
                                                    alt={card.name}
                                                    className="w-7 h-7 shrink-0"
                                                />

                                                <div className="min-w-0">
                                                    <h3 className="font-semibold text-sm truncate">
                                                        {card.name}
                                                    </h3>

                                                    <p className="text-xs text-gray-500">
                                                        {card.category}
                                                    </p>
                                                </div>

                                            </div>
                                            <button
                                                onClick={() =>
                                                    handleRemoveFromStack(card.id)
                                                }
                                                className="text-gray-400 hover:text-red-500 text-xl font-bold shrink-0 transition"
                                            >
                                                ×
                                            </button>

                                        </div>
                                    ))}

                                </div>
                            )}
                            <button
                                onClick={handleRemoveAll}
                                className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition-all duration-300"
                            >
                                Remove All
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Cards;