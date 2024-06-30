import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css"
import styles from "../../styles/Community.module.css"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


/* Destructure message and filter props in place from appjs?? */
function PostsPage({ message, filter = "" }) {
  // {
  //   /* Store posts in an object inside a results array initially empty */
  // }
  const [posts, setPosts] = useState({ results: [] });
  // {
  //   /* keep track of posts if fetched or not and use to display spinner initial false*/
  // }
  const [hasLoaded, setHasLoaded] = useState(false);
  // {
  //   /* refetch posts again when the user clicks between community, liked and feed pages. useLocation hook */
  // }
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();


// {/* TO handle query value in the search bar destructure */}

const [query, setQuery] = useState("");




  // {
  //   /* API request to fetch post and only show filter for specific page, feed / liked. useEffect Hook*/
  // }
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        /* request contains filter prop set in routes. */
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);

    /*Setting a timer in the search bar */
    const timer = setTimeout(() => {
      /*Call the fetch post function */
      fetchPosts();
    }, 1000)
    /* CLear timeout function so none left behind */
    return () => {
      clearTimeout(timer)
    }
    
    /* we want the fetch post to run every time the url changes or filter changes */
  }, [filter, query, pathname, currentUser]);

  return (
    <>
    <Row>
      <Col className={`${btnStyles.Spacing} py-2 p-2 p-lg-2`} lg={12}>
      <Link to="/liked" className={`${btnStyles.Button} ${btnStyles.Spacing}`}>
            Liked
          </Link>
          <Link to="/feed" className={`${btnStyles.Button} ${btnStyles.Spacing}`}>
            Feed
          </Link>
          <Link to="/community/create" className={`${btnStyles.Button} ${btnStyles.Spacing}`}>
            Add Post
          </Link>
      </Col>
    </Row>
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        
        
        {/* Adding search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        {/* Creating search input field using react bootstrap search component */}
        <Form
          className={styles.SearchBar}
          /* Pass in event to prevent page reloading if hit enter */
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            type="text"
            className="mr-sm-2"
            placeholder="Search Posts"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form>




        {/* nested ternary to display posts */}
        {/* FIrst check if data has been loaded */}
        {hasLoaded ? (
          /* if it has loaded we create a second ternary display our posts or a message */
          <>
            {/*check if the results array has any posts in it */}
            {posts.results.length ? (

              /* Infinite scrolling import */
              <InfiniteScroll 
                children={
                  /*show posts here and render each one*/
                  /* map over the posts array and for each we will return post component and give each a key spread post object and pass the setPosts
                  so users can like or unlike a post.*/
                  posts.results.map((post) => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                  ))
                }
              
              dataLength={posts.results.length}
              loader={<Asset spinner/>}
              hasMore={!!posts.next}
              next={() => fetchMoreData(posts, setPosts)}
              
              
              />
              
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
        <PopularProfiles />
      </Col>
    </Row>
    </>
  );
}

export default PostsPage;
