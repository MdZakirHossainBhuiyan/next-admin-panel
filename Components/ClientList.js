import { useEffect, useState } from 'react';
import styles from '../styles/ClientList.module.css';
import ClientDetails from './ClientDetails';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allClients')
        .then(response => response.json())
        .then(data => setClients(data))
    }, [])

    return (
        <div>
            <h1>client list</h1>
            <table>
                {
                    clients.map(client => <ClientDetails key={client._id} client={client}/>)
                }
            </table>
        </div>
    );
};

export default ClientList;