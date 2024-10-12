import React from 'react';

const DateRange = () => {
  return (
    <div className="flex space-x-4">
      {/* From Date Input */}
      <div className="relative w-full">
        <input
          type="date"
          id="from-date"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          placeholder="From"
        />
      </div>

      {/* To Date Input */}
      <div className="relative w-full">
        <input
          type="date"
          id="to-date"
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default DateRange;
