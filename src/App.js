import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/mainPage/MainPage";
import AuthorList from "./components/author/AuthorList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/authors" component={AuthorList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
