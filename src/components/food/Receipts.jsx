import React from "react";

export default function Receipts(menuItem) {
  return (
    <div
      className="relative max-w-sm h-4/5 rounded overflow-hidden shadow-lg"
      key={menuItem.Id}
    >
      <img className="object-cover h-56 w-96" src={menuItem.Image} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 h-9">{menuItem.Title}</div>
        <p className="text-gray-700 text-base h-72">{menuItem.Description}</p>
        <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
          <button
            className="absolute bottom-4 left-32 inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Ver Ingredientes
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="block p-6 rounded-lg shadow-lg bg-white">
            <ul>
              <li>{menuItem.Ingredients}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
