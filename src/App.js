import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Details from "./Details";
import Results from "./Results";
import SearchParams from "../SearchParams";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
