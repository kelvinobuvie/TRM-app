import React from 'react'

const RecentInspections = () => {
    const inspections = [
        {
          id: 10321,
          name: "GIG Logistics",
          class: "Marine",
          classColor: "bg-blue-500",
          method: "Digital",
          officer: "Mustapha Onasanya",
          status: "QUOTE REQUEST",
          statusColor: "bg-gray-200 text-gray-800",
        },
        {
          id: 10321,
          name: "Shoprite Stores",
          class: "Property",
          classColor: "bg-purple-500",
          method: "Manual",
          officer: "Mustapha Onasanya",
          status: "Completed",
          statusColor: "bg-green-500 text-white",
        },
        {
          id: 10321,
          name: "Abiodun Abayomi",
          class: "Motors",
          classColor: "bg-orange-500",
          method: "Digital",
          officer: "Mustapha Onasanya",
          status: "Ongoing",
          statusColor: "bg-orange-500 text-white",
        },
        {
            id: 10321,
            name: "Abiodun Abayomi",
            class: "Motors",
            classColor: "bg-orange-500",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Ongoing",
            statusColor: "bg-orange-500 text-white",
        },
        {
            id: 10321,
            name: "Abiodun Abayomi",
            class: "Motors",
            classColor: "bg-orange-500",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Ongoing",
            statusColor: "bg-orange-500 text-white",
        }
      ];
    
      return (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-md h-64 overflow-y-auto">
          <div className='flex justify-between  py-4'>
            <span className='text-sm font-semibold'>Recent Inspections</span>
            <a href="#" className="text-xs text-orange-500 font-medium inline-block hover:underline">View all</a>
          </div>
          <table className="min-w-full bg-white border-collapse text-xs">
            <thead className='text-gray-500'>
              <tr>
                <th className="border-b p-4 text-left">ID</th>
                <th className="border-b p-4 text-left">Name</th>
                <th className="border-b p-4 text-left">Class</th>
                <th className="border-b p-4 text-left">Inspection Method</th>
                <th className="border-b p-4 text-left">Officer</th>
                <th className="border-b p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className=''>
              {inspections.map((inspection, index) => (
                <tr key={index}>
                  <td className="border-b p-4">{inspection.id}</td>
                  <td className="border-b p-4">{inspection.name}</td>
                  <td className="border-b p-4">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${inspection.classColor}`}></span>
                    {inspection.class}
                  </td>
                  <td className="border-b p-4">{inspection.method}</td>
                  <td className="border-b p-4">{inspection.officer}</td>
                  <td className="border-b p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${inspection.statusColor}`}>
                      {inspection.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      );
    };


export default RecentInspections