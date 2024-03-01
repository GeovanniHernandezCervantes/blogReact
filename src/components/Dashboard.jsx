import { Outlet } from "react-router-dom"
import Navbar from "./templates/Navbar"
import { Workspace } from "./templates/Workspace"
import { Footer } from "./templates/Footer"

const Dashboard = () => {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Navbar />
                    <Workspace>
                        <Outlet />
                    </Workspace>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Dashboard;