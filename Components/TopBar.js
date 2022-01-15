import styles from '../styles/Topbar.module.css';
import Link from 'next/link';

const TopBar = () => {
    const {topBarContent, logOutLink, topBarTitle} = styles;

    return (
        <div className={topBarContent}>
            <div className={topBarTitle}>
                <h1>Admin Panel</h1>
            </div>
            <div className={logOutLink}>
                <Link href="/"><a className={logOutLink}>Logout</a></Link>
            </div>
        </div>
    );
};

export default TopBar;