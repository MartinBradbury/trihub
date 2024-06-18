import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
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
                const {data} = await axiosReq.get(`/goals/?userId=${currentUser.id}`);
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
        <h1>Users Goals</h1>
        {userGoals.results.map(goal => (
            <Card>
            <p key={goal.id}>
                <span>Owner: {goal.owner}</span>
                <span>Event date: {goal.event_date}</span>
                <span>Hours per week: {goal.hours_per_week}</span>
                <span>is Owner: {goal.is_owner}</span>
            </p>
            </Card>
        ))}
    </Container>
  )
}

export default Goals