import Sidebar from "../../components/Sidebar"
import { Outlet } from "react-router-dom"

const LayoutUser = () => {
  return (
    <div className="flex flex-col h-screen">
        <div className="w-full h-16 bg-red-500">

        </div>
        <div className="h-full flex flex-row ">
            <Sidebar />
            <div className="w-full bg-blue-300">

            </div>
        </div>
    </div>
  )
}

export default LayoutUser