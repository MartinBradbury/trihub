import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Performance from "./Performance";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";

function PerformanceList({ message = "" }) {
  const [performances, setPerformances] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPerformances = async () => {
      try {
        const { data } = await axiosReq.get(`/performances/?search=${query}`);
        setPerformances(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchPerformances();
  }, [query]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <p>User Performances</p>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            type="text"
            className="mr-sm-2"
            placeholder="Search Performances by user"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form>

        {hasLoaded ? (
          <>
            {performances.results.length ? (
              performances.results.map((per) => (
                <Performance
                  key={per.id}
                  {...per}
                  setPerformances={setPerformances}
                />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Container}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <button>
         <a href="performance/create" >
         Create event
          </a>
      </button>
    </Row>
  );
}

export default PerformanceList;
