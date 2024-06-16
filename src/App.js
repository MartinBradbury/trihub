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


function App() {
  return (
        <div className={styles.App}>
          <NavBar />
          <BackgroundVideo />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/community/create" render={() => <PostCreateForm />} />
              <Route exact path="/community/:id" render={() => <PostPage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;