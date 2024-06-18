import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import BackgroundVideo from "./components/BackgroundVideo";
import Home from "./pages/home/Home";
import PostCreateForm from "./pages/community/PostCreateForm";
import PostPage from "./pages/community/PostPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import CommunityPosts from "./pages/community/CommunityPosts"
import PerformanceCreateForm from "./pages/performances/PerformanceCreateForm";
import PostEditForm from "./pages/community/PostEditForm";
import Goals from "./pages/Plans/Goals";
import ProfilePage from "./pages/profiles/ProfilePage";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <BackgroundVideo />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/performances" render={() => <PerformanceCreateForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/myplan/" render={() => <Goals />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/community/create"
            render={() => <PostCreateForm />}
          />
          <Route exact path="/community/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/community/posts/:id" render={() => <PostPage />} />
          {/* <Route
            exact
            path="/community/:id"
            render={() => (
              <CommunityPosts message="No results found. Adjust the search keyword." />
            )}
          /> */}
          <Route
            exact
            path="/community"
            render={() => (
              <CommunityPosts message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <CommunityPosts
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <CommunityPosts
                message="no results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
