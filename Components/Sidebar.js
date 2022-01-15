import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import image from '../public/download.jpg';

const Sidebar = () => {
    const {sidebarContent, userContent, userImage, userInfo, sidebarLinks, sidebarLink} = styles;

    return (
        <div className={sidebarContent}>
            <div className={userContent}>
                <div className={userImage}>
                    <Image src={image} alt=""/>
                </div>
                <div className={userInfo}>
                    <h5>zakir Hossain</h5>
                    <p>Premium User</p>
                </div>
            </div>
            <div className={sidebarLinks}>
                <div className={sidebarLink}>
                    <Link href="/dashboard"><a>DashBoard</a></Link>
                </div>
                <div className={sidebarLink}>
                    <Link href="/profile"><a>Profile</a></Link>
                </div>
                <div className={sidebarLink}>
                    <Link href="/chart"><a>Chart</a></Link>
                </div>
                <div className={sidebarLink}>
                    <Link href="/analytics"><a>Analytics</a></Link>
                </div>
                <div className={sidebarLink}>
                    <Link href="/list"><a>List</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;