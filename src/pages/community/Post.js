import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { MoreDropdown } from "../../components/MoreDropdown";

const Post = (props) => {
  /* Destructure the data from the props sent from post page request. */
  const {
    id,
    owner,
    profile_image,
    profile_id,
    comment_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    /* postPage prop comes from prop set in post page that will return true if no value assigned */
    postPage,
    /* setPost function passed from parent  */
    setPosts,
  } = props;

  const history = useHistory();

  /* Handle edit function and delete for editing posts */
  const handleEdit = () => {
    history.push(`/community/posts/${id}/edit`)
  }

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack()
    } catch(err) {
      console.log(err)
    }

  }



  /* handleLike async function so users can like posts */
  const handleLike = async () => {
    try {
      /* pass in post:id so the api know which post user is trying to like */
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
         results: prevPosts.results.map((post) => {
           return post.id === id
           ? {...post, likes_count: post.likes_count + 1, like_id: data.id }
             : post;
         }),
       }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          if (post.id === id) {
            // Decrement likes_count and reset like_id to null
            return {
              ...post,
              likes_count: post.likes_count - 1,
              like_id: null,
            };
          }
          return post; // Return the post unchanged if it's not the current post
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  /* define current user vairbale using the useCurrentUser hook as it will behave dif depending if user or not */
  const currentUser = useCurrentUser();
  /* WIth that variable we will check if that user matches the owner  */
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          {/* link to post owners profile to wrap around avatar and username */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {/* When destructured the props you can just display each prop in {} */}
            {owner}
          </Link>
          {/* Div to display when the post was last updated */}
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {/*Check if currently logged in user is the owner and postPage exists */}
            {/* if they both exist we want an edit / delete option on post, placeholder ... atm, */}
            {is_owner && postPage && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete}/>}
          </div>
        </Media>
      </Card.Body>
      {/* Display post image and wrap in a link using its id for the url*/}
      <Link to={`/community/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      {/* DIsplay the title and content only if the props have been passed before they render*/}
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {/* Div containing Hearts and comments icons */}
        <div className={styles.PostBar}>
          {/* Use a ternary to display icons differently if owner or not */}
          {/* Check if current user owns post and if they do use overlay to say cannot like own posts */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : /* If current user isnt owner of post, ternary will now check if like id exists. If it does it means user has already liked post*/
          like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : /* Check if current user is logged in */
          currentUser ? (
            /* if they are they will be able to like post */
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            /* If not, they will get a message */
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {/* DIsplay number of likes and comments.  */}
          {likes_count}
          {/*Comment component links to post ID so wrap in link set to post id */}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comment_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
