import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Performance from "./Performance";

function PerformancePage() {
  const { id } = useParams();
  const [performance, setPerformance] = useState({ results: []});

  useEffect(() => {
    const handleMount = async () => {
        try{
            const [{data: per}] = await Promise.all([
                axiosReq.get(`/performances/${id}`)
            ])
            setPerformance({results: [per]})
            console.log(per)
        } catch(err){
            console.log(err)
        }
    }
    handleMount()
  }, [id])


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <Performance {...performance.results[0]} setPerformance={setPerformance} performance />
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PerformancePage;