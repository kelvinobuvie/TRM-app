import InspectionCards from "../components/Inspectioncards"
import InspectionSummaryCard from "../components/InspectionSummaryCard"
import DashboardUpdate from "../components/DashboardUpdate"
import RecentInspections from "../components/RecentInspections"
import Nav from "../components/Nav"
import CreateNewInpectionBtn from "../components/CreateNewInpectionBtn"


const Overview = () => {
  return (
    <div className="lg:ml-56 h-full">
        <Nav />
        <div className="mt-7 px-9">
          <div className="grid lg:flex justify-between">
            <div>
              <p className="font-normal text-2xl wel-t">Welcome, <span className="font-bold">Olufemi</span></p>
              <p className="mt-3 text-sm font-normal wel-b">Take a look at your dashboard and see all pending tasks</p>
            </div>
            <div className="mt-6">
              <CreateNewInpectionBtn/>
            </div>
          </div>
          <div>
            <InspectionCards/>
          </div>
          <div className=" grid gap-2 lg:flex sm:grid"> 
            <InspectionSummaryCard/>
            <DashboardUpdate/>
          </div>
          <div className="mt-8">
            <RecentInspections/>
          </div>
        </div>
        
    </div>
  )
}

export default Overview