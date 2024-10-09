import React from "react";

const InspectionCards = () => {
  const cards = [
    {
      title: "New Inspections",
      count: 104,
      note: "Up 15% this month",
    },
    {
      title: "Ongoing Inspections",
      count: 56,
      note: "",
    },
    {
      title: "Completed Inspections",
      count: 1134,
      note: "",
    },
    {
      title: "Delayed Inspections",
      count: 8,
      note: "",
    },
  ];

  return (
    <a href="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 pb-2 pt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-md shadow-sm p-4 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-gray-700 font-semibold text-base">{card.title}</h2>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-gray-900">{card.count}</p>
          </div>
          <div className="flex justify-between mt-4">
            <a href="#" className="text-green-600 hover:underline text-xs">
              See all ↗
            </a>
            {card.note && (
              <p className="text-gray-500 text-xs mt-1">{card.note}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </a>
  );
};

export default InspectionCards;
