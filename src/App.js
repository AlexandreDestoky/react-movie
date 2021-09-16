import React from "react";

import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Movie from "./components/Movie/Movie";
import NotFound from "./components/NotFound/NotFound";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />


      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/:movieId" component={Movie}/>
        <Route path="/" component={NotFound}/>

      </Switch>


      <GlobalStyle />
    </Router>
  );
}

export default App;
