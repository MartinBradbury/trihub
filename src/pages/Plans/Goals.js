import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Goals = () => {

    const [goalData, setGoalData] = useState({
        userGoals: {results: []}
    })
    const { userGoals } = goalData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try{
                const {data} = await axiosReq.get('/goals/')
                setGoalData(prevState => ({
                    ...prevState,
                    userGoals: data,
                }))
            }catch(err){
                console.log(err)
            }
        }
        handleMount()
    }, [currentUser])



  return (
    <Container>
        <p>Users Goals</p>
        {userGoals.results.map(goal => (
            <p key={goal.id}>
                <span>Owner: {goal.owner}</span>
                <span>Event date: {goal.event_date}</span>
                <span>Hours per week: {goal.hours_per_week}</span>
                <span>is Owner: {goal.is_owner}</span>
            </p>
        ))}
    </Container>
  )
}

export default Goals