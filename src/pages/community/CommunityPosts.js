import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";

/* Destructure message and filter props in place from appjs?? */
function PostsPage({ message, filter = "" }) {
  {/* Store posts in an object inside a results array initially empty */}
  const [posts, setPosts] = useState({ results: [] });
  {/* keep track of posts if fetched or not and use to display spinner initial false*/}
  const [hasLoaded, setHasLoaded] = useState(false);
  {/* refetch posts again when the user clicks between community, liked and feed pages. useLocation hook */}
  const { pathname } = useLocation();
  
  {/* API request to fetch post and only show filter for specific page, feed / liked. useEffect Hook*/}
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        /* request contains filter prop set in routes. */
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    /*Call the fetch post function */
    fetchPosts();
    /* we want the fetch post to run every time the url changes or filter changes */
  }, [filter, pathname]);

  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {/* nested ternary to display posts */}
        {/* FIrst check if data has been loaded */}
        {hasLoaded ? (
          /* if it has loaded we create a second ternary display our posts or a message */
          <>
          {/*check if the results array has any posts in it */}
          {posts.results.length ? (
            /*show posts here and render each one*/
            /* map over the posts array and for each we will return post component and give each a key spread post object and pass the setPosts
            so users can like or unlike a post.*/
            posts.results.map((post) => (
              <Post key={post.id} {...post} setPosts={setPosts} />
              
              
            ))
          ) : (
            /* show no results message */
            <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
            </Container>
          )}
          </>

        ) : (
          /* not loaded show spinner */
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default PostsPage;