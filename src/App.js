import React, { Component } from 'react';

// Imported the React react app to help structurer and organize files 

import {
  BrowserRouter,
  Route, Switch, Redirect
} from 'react-router-dom';

// imported react router to be able to link the routes together and and included BrowserRouter that keeps the urls and components sinced up, the switch to show the first 
// compnents that matches the route and redirect to use when an address is typed in and used to rerender an element<Route exact path="/search" component={SearchDisplay} /> <Route exact path="/start" component={SearchDisplay} /> <Route exact path="/search/" component={SearchDisplay} />

import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import SearchDisplay from './components/SearchDisplay';
import TryAgain from './components/TryAgain';

// I have imported all of the components from the directories so they are available in this main directory, I have then applied them to the routes to be rendred when a route is called




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
           
            <Route path="/search" component={SearchForm} />
            <Navigation />
          <Switch>

            <Route exact path="/" render={ ()=> <Redirect to={"/search"} /> } />
            
            <Route path="/search/:query" component={SearchDisplay} />
           
            <Route path="/start/:query" component={SearchDisplay} />
            <Route component={TryAgain} />
          </Switch>
        </div>
      </BrowserRouter>
   
    );
  }
}

//

// to render the elemnet for when the routes are passed in   also the SearchDisplay and navigation and SearchForms are used Created a component called App and rendred a container div that incorpored the searchFrom and navigation components when the page loads the redirect was used to 

// also I have set the :query to pass the match object to the searchDisplay compoent to receive a query word depending on what is typed in the url 

export default App;
