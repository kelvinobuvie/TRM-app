import React from 'react'

const PersonnelCards = () => {
    const cards = [
      {
        title: "Active Adjusters",
        count: "21,000",
        note: "Create",
      },
      {
        title: "Active Surveyors",
        count: "21,000",
        note: "Create",
      },
      {
        title: "Internal Engineers",
        count: "21,000",
        note: "Create",
      },
      {
        title: "External Engineers",
        count: "21,000",
        note: "Create",
      },
    ];
  
    return (
      <a href="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 pb-2 pt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-md shadow-sm py-4 px-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-gray-700 font-semibold text-base">{card.title}</h2>
            </div>
            <div className=" flex justify-between mt-4">
              <p className="text-2xl font-bold text-gray-900">{card.count}</p>
              <p className="text-blue-500 font-semibold text-xs mt-4">{card.note}</p>
            </div>
          </div>
        ))}
      </div>
      </a>
    );
  };

export default PersonnelCards