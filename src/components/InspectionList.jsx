import React from 'react'
import { GoDotFill } from 'react-icons/go';


const InspectionList = () => {
    const inspections = [
        {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Motors",
            classColor: "text-orange-500",
            location: "No. 16, Roverheight Homes, Nicon town.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Completed",
            statusColor: "bg-green-300 text-green-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Motors",
            classColor: "text-orange-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Inspection link",
            statusColor: "bg-gray-300 text-gray-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Motors",
            classColor: "text-orange-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Inspection link",
            statusColor: "bg-gray-300 text-gray-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Property",
            classColor: "text-yellow-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Link Expired",
            statusColor: "bg-red-300 text-red-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Motors",
            classColor: "text-orange-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Inspection link",
            statusColor: "bg-gray-300 text-gray-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Motors",
            classColor: "text-orange-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Inspection link",
            statusColor: "bg-gray-300 text-gray-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Engineering",
            classColor: "text-red-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Inspection link",
            statusColor: "bg-gray-300 text-gray-700",
          },
          {
            id: 10321,
            date: "10 Sep 23 15:44pm",
            name: "GIG Logistics",
            class: "Agric",
            classColor: "text-green-500",
            location: "No. 12, Iponri, Surulere Lagos.",
            method: "Digital",
            officer: "Mustapha Onasanya",
            status: "Ongoing",
            statusColor: "bg-orange-300 text-orange-700",
          },

    ]
  return (
    <div className='p-4 h-screen overflow-y-auto border shadow-md rounded-lg'>
        <table className='min-w-full border-collapse'>
            <thead>
                <tr className='text-xs lg:text-sm text-gray-400 font-medium'>
                    <th className='border-b p-4 text-left'>Id</th>
                    <th className='border-b p-4 text-left'>Date Created</th>
                    <th className='border-b p-4 text-left'>Name</th>
                    <th className='border-b p-4 text-left'>Class</th>
                    <th className='border-b p-4 text-left'>Location</th>
                    <th className='border-b p-4 text-left'>Method</th>
                    <th className='border-b p-4 text-left'>Officer</th>
                    <th className='border-b p-4 text-left'>Status</th>
                </tr>
            </thead>
            <tbody>
                {inspections.map((inspection, index) =>
                    <tr className='text-xs' key={index}>
                        <td className='border-b p-4 text-left'>{inspection.id}</td>
                        <td className='border-b p-4 text-left'>{inspection.date}</td>
                        <td className='border-b p-4 text-left'>{inspection.name}</td>
                        <td className='border-b p-4 text-left'><GoDotFill className={`inline-block w-3 h-3 mr-2 -mt-1 ${inspection.classColor}`}></GoDotFill>{inspection.class}</td>
                        <td className="border-b p-4">{inspection.location}</td>
                        <td className="border-b p-4">{inspection.method}</td>
                        <td className="border-b p-4">{inspection.officer}</td>
                        <td className="border-b p-4">
                            <a className='hover:cursor-pointer'>
                                <span className={`px-3 py-1 rounded-md text-xs font-semibold ${inspection.statusColor}`}>
                                {inspection.status}
                                </span>
                            </a>
                        </td>
                    </tr>
                
                )}
            </tbody>
        </table>
    </div>
  )
}

export default InspectionList