import React from 'react';

const ClientDetails = ({client}) => {
    const {_id ,name, email, phone, status} = client;

    const handleDelete = (_id) => {
        const clientId = _id;
        fetch(`http://localhost:5000/delete/${clientId}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log('Client deleted'))
    }

    return (
        <div>
            <tr style={{display: "flex"}}>
                <td style={{paddingRight: "10px"}}>{name}</td>
                <td style={{paddingRight: "10px"}}>{email}</td>
                <td style={{paddingRight: "10px"}}>{phone}</td>
                <td style={{paddingRight: "10px"}}>{status}</td>
                <button onClick={() => handleDelete(_id)} style={{width: "60px", marginRight: "10px"}}>Delete</button>
                <button onClick={() => handleUpdate(_id)} style={{width: "60px"}}>Update</button>
            </tr>
        </div>
    );
};

export default ClientDetails;