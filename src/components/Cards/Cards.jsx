import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="max-w-350 mx-auto px-4 py-14">
      <div className="grid grid-cols-4 gap-6">


        <div className="col-span-3 grid grid-cols-3 gap-4">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>


        <div className="col-span-1">
          <div className="border border-slate-200 rounded-xl p-5 sticky top-24 bg-white">

            <h2 className="text-xl font-bold text-slate-900">
              Your Stack
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              No technology selected yet.
            </p>


            <div className="border border-dashed border-slate-200 rounded-xl h-24 flex items-center justify-center mt-5">
              <span className="text-sm text-gray-400">
                Your stack is empty.
              </span>
            </div>


            <button className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-semibold transition-all duration-300">
              Remove All
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;