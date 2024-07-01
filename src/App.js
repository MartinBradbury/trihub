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
import CommunityPosts from "./pages/community/CommunityPosts";
import PerformanceCreateForm from "./pages/performances/PerformanceCreateForm";
import PostEditForm from "./pages/community/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PerformanceList from "./pages/performances/PerformanceList";
import UserPlan from "./pages/plans/UserPlan";
import GoalsCreateForm from "./pages/plans/GoalsCreateForm";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

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
          <Route
            exact
            path="/performance/create"
            render={() => <PerformanceCreateForm />}
          />
          <Route
            exact
            path="/performances"
            render={() => (
              <PerformanceList
                message="No performances found."
                filter="add filter here manybe?"
              />
            )}
          />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/goals/create"
            render={() => <GoalsCreateForm />}
          />

          <Route exact path="/myplan" render={() => <UserPlan />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/community/create"
            render={() => <PostCreateForm />}
          />
          <Route
            exact
            path="/community/posts/:id/edit"
            render={() => <PostEditForm />}
          />
          <Route
            exact
            path="/community/posts/:id"
            render={() => <PostPage />}
          />
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
                message="You have not followed a user yet or the user has no posts."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <CommunityPosts
                message="You have not liked any posts yet. Like a post to see it here."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
