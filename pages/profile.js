import Sidebar from "../Components/sidebar";
import TopBar from "../Components/TopBar";
import ProfileInfo from "../Components/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <TopBar />
            <div style={{display: "flex", flexDirection: "row"}}>
                <Sidebar />
                <ProfileInfo />
            </div>
        </div>
    );
};

export default Profile;