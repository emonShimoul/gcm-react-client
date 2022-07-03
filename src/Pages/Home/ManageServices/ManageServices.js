import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://agile-tor-10091.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `https://agile-tor-10091.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted Successfully!!');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })
    }
    return (
        <div>
            <h2>This is Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <p>{service.name} <button onClick={() => handleDelete(service._id)}>Delete</button></p>
                    
                </div> )
            }
        </div>
    );
};

export default ManageServices;