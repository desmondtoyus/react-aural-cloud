import React, { Component } from 'react';
import Mainsection from "./components/mainsection";
import {BrowserRouter, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        < Mainsection/>
        </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
