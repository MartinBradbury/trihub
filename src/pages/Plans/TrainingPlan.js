import React, { useEffect, useState } from 'react';

import { axiosReq } from '../../api/axiosDefaults';



function TrainingPlan() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
          try {
            const response = await axiosReq.get(`/trainingplans`);
            setPlans(response.data.results); 
            console.log(response.data.results);
          } catch (err) {
            console.log(err);
          }
        };
        fetchPlans();
      }, []);

    return (
        <div>TrainingPlan</div>
    )
}

export default TrainingPlan;
