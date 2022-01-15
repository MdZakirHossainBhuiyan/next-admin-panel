import styles from '../styles/Registration.module.css';
import Link from 'next/link';
import { useState } from 'react';

const registration = () => {
    const {registrationPage, registrationTitle, registrationForm, formContent} = styles;

    const [info, setInfo] = useState(null);
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("New tour added successfully");
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);
        formData.append('status', info.status);
        formData.append('password', info.password);

        fetch('http://localhost:5000/addClient', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                console.log("client added");
            }
        })
        .catch( (err) => {
            console.error(err);
        });
    }

    return (
        <div className={registrationPage}>
            <h1 className={registrationTitle}>Registration Page</h1>
            
            <div className={registrationForm}>
                <form onSubmit={handleSubmit} className={formContent}>
                    <input onBlur={handleBlur} type="name" name="name" placeholder='Name'/><br />
                    <input onBlur={handleBlur} type="email" name="email" placeholder='Email'/><br />
                    <input onBlur={handleBlur} type="phone" name="phone" placeholder='Phone'/><br />
                    <input onBlur={handleBlur} type="status" name="status" placeholder='Status'/><br />
                    <input onBlur={handleBlur} type="text" name="password" placeholder='Password'/><br />
                    <input onChange={handleFileChange} type="file" name="file" id="" placeholder='Image'/><br />
                    <button type="submit">Registration</button>
                </form>
            </div><br />
            <div className={formContent}>
                <button><Link href="/"><a>Login Page</a></Link></button>
            </div>
        </div>
    );
};

export default registration;