import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import Styles from "../../styles/Performance.module.css";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Performance from "./Performance";
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

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
        <i className={`fas fa-search ${Styles.SearchIcon}`} />
        <Form
          className={Styles.SearchBar}
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
              <InfiniteScroll
                children={performances.results.map((per) => (
                  <Performance
                    key={per.id}
                    {...per}
                    setPerformances={setPerformances}
                  />
                ))}
                dataLength={performances.results.length}
                loader={<Asset spinner />}
                hasMore={!!performances.next}
                next={() => fetchMoreData(performances, setPerformances)}
              />
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
      <Container className={Styles.ButtonSpace}>
        <div class="d-flex justify-content-center align-items-center">
          <a href="performance/create">
            <button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Center} ${btnStyles.Text}`}
              type="submit"
            >
              Add Performance
            </button>
          </a>
        </div>
      </Container>
    </Row>
  );
}

export default PerformanceList;
