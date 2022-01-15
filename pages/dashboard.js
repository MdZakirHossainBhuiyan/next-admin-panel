import DashboardInfo from "../Components/DashboardInfo";
import Sidebar from "../Components/sidebar";
import TopBar from "../Components/TopBar";


const dashboard = () => {
    return (
        <div>
            <TopBar />
            <div style={{display: "flex", flexDirection: "row"}}>
                <Sidebar />
                <DashboardInfo />
            </div>
        </div>
    );
};

export default dashboard;