import InspectionCards from "../components/Inspectioncards"
import InspectionSummaryCard from "../components/InspectionSummaryCard"
import Nav from "../components/Nav"


const Overview = () => {
  return (
    <div className="h-[100vh] w-full">
        <Nav />
        <div className="mt-7 px-9">
          <div className="flex justify-between">
            <div>
              <p className="font-normal text-2xl wel-t">Welcome, <span className="font-bold">Olufemi</span></p>
              <p className="mt-3 text-sm font-normal wel-b">Take a look at your dashboard and see all pending tasks</p>
            </div>
            <div>
              <button className="bg-orange-500 mt-6 py-2 px-8 text-white font-bold text-xs">
                + Create New Inspection
              </button>
            </div>
          </div>
          <div>
            <InspectionCards/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 pb-2 pt-8">
            <InspectionSummaryCard/>
            <InspectionSummaryCard/>

          </div>
          {/* <div className=" grid grid-cols-4  mt-9">
            <div className="border-solid border-2">
              <div className="flex justify-between">
                <p className="text-base ">New Inspections</p>
                <img className="ml-12" src="/Frame 13639.png" alt="cloud" />
              </div>
              <div className="mt-2">
                104
              </div>
              <div className="flex justify-between text-xs mt-5">
                <p className="">see all</p>
                <p className="">Up to 15% this month</p>
              </div>
            </div>
          </div> */}
        </div>
        
    </div>
  )
}

export default Overview