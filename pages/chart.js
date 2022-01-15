import Sidebar from "../Components/sidebar";
import TopBar from "../Components/TopBar";


const Chart = () => {
    return (
        <div>
            <TopBar />
            <div style={{display: "flex", flexDirection: "row"}}>
                <Sidebar />
                <h1>Chart</h1>
            </div>
        </div>
    );
};

export default Chart;