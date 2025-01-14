import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp/index";
import SingleArticle from "./components/SingleArticle";
import SingleArticle1 from "./components/SingleArticle1";
import SingleArticle2 from "./components/SingleArticle2";
import SingleArticle3 from "./components/SingleArticle3";
import CreateArtice from "./components/CreateArticle";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Navbar />}

      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/article/revivalhistory" component={SingleArticle} />
      <Route path="/article1/what-is-revival-defi" component={SingleArticle1} />
      <Route path="/article2/locked-staking" component={SingleArticle2} />
      <Route path="/article3/whitepaper" component={SingleArticle3} />
      <Route path="/articles/create" component={CreateArtice} />
      <Route path="/signup" component={SignUp} />

      {location.pathname !== "/login" &&
        location.pathname !== "/signup" && <Footer />}
    </div>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Main />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
