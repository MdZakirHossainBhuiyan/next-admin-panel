import styles from '../styles/ProfileInfo.module.css';
import Image from 'next/image';
import img from '../public/download.jpg';

const ProfileInfo = () => {
    const {profileInfoArea, infoArea, userImage, userDetails} = styles;

    return (
        <div className={profileInfoArea}>
            <h1>User Profile</h1>
            <div className={infoArea}>
                <div className={userImage}>
                    <Image src={img} alt="" />
                </div>
                <div className={userDetails}>
                    <table>
                        <tr>
                            <th>Name: </th>
                            <td>Zakir Hossain</td>
                        </tr>
                        <tr>
                            <th>Email: </th>
                            <td>zakirhossaintuhin@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Phone: </th>
                            <td>01675-026895</td>
                        </tr>
                        <tr>
                            <th>Status: </th>
                            <td>Premium user</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;