import ClientList from "../Components/ClientList";
import Sidebar from "../Components/sidebar";
import TopBar from "../Components/TopBar";


const List = () => {
    return (
        <div>
            <TopBar />
            <div style={{display: "flex", flexDirection: "row"}}>
                <Sidebar />
                <ClientList />
            </div>
        </div>
    );
};

export default List;