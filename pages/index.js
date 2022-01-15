import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LoginPage = () => {
    const {loginPage, loginTitle, loginForm, formContent, registrationBtn} = styles;
    const [clients, setClients] = useState([]);
    const [givenInfo, setGivenInfo] = useState(null);

    const showLoginButton = false;

    const handleChange = e => {
        const newInfo = { ...givenInfo};
        newInfo[e.target.name] = e.target.value;
        setGivenInfo(newInfo);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/allClients`)
        .then(response => response.json())
        .then(data => setClients(data))
    }, [])

    if(givenInfo && clients){
         var checkWithName = clients.filter(x => x.email==givenInfo.email && x.password==givenInfo.password);

        if(checkWithName.length){
            showLoginButton = true;
        }
    }

    return (
        <div className={loginPage}>
            <h1 className={loginTitle}>Login Page</h1>

            <div className={loginForm}>
                <form className={formContent}>
                    <input onChange={handleChange} type="email" name="email" id="" placeholder='Email'/><br />
                    <input onChange={handleChange} type="password" name="password" id="" placeholder='Password'/><br />
                    {
                        showLoginButton && <button><Link href="/dashboard"><a>Login</a></Link></button>
                    }
                </form>
            </div>
            <div className={registrationBtn}>
                <p>Create your account. <Link href="/registration"><a>Registration</a></Link></p>
            </div>
        </div>
    );
};

export default LoginPage;