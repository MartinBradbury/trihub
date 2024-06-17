import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';

const Performances = () => {
    const { id } = useParams();
    const [performance, setPerformance] = useState([]);

    useEffect(() => {
        const fetchPerformance = async () => {
            try {
                // Adjust the destructuring based on the actual structure of the response
                const response = await axiosReq.get(`/performances`);
                // Assuming the response data is under a property named 'data' or similar
                const performances = response.data; // Adjust this line based on the actual response structure
                setPerformance(performances);
                console.log(performances); // Log the updated state within useEffect
            } catch (err) {
                console.error(err);
            }
        };

        fetchPerformance();
    }, [id]);

    return (
        <div>
            <h2>Performances</h2>
        </div>
    );
};

export default Performances;
