import Sidebar from "../Components/sidebar";
import TopBar from "../Components/TopBar";


const Analytics = () => {
    return (
        <div>
            <TopBar />
            <div style={{display: "flex", flexDirection: "row"}}>
                <Sidebar />
                <h1>Analytics</h1>
            </div>
        </div>
    );
};

export default Analytics;