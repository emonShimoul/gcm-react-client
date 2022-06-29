import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    return (
        <div>
            <h2>This is Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;