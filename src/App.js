import {component} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

import './App.css';
import { Redirect } from "react-router-dom";

class App extends component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/books" Component={BookList}/>
          <Route exact path="/books/:id" Component={BookDetails}/>
          <Route exact path="/cart" Component={Cart}/>
          <Route exact path="/checkout" Component={Checkout}/>
          <Route  path="/not-found" Component={NotFound}/>
          <Redirect to="/not-found"/>


        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
