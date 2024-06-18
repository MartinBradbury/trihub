import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Peformances = () => {
  const [performanceData, setPerformanceData] = useState({

    userPerformance: { results: [] },
  });
  const { userPerformance } = performanceData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/performances/"
        );
        setPerformanceData((prevState) => ({
          ...prevState,
          userPerformance: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container className={appStyles.Content}>
      {userPerformance.results.length ? (
        <>
          <p>Most followed profiles.</p>
          {userPerformance.results.map((per) => (
            <p key={per.id}>{per.owner}{per.event}{per.time}{per.completed_date}{per.content}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default Peformances;