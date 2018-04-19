import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';
import apiKey from './config';
import Mountains from './Mountains';
import Rivers from './Rivers';
import Lakes from './Lakes';
import TryAgain from './TryAgain';

// I have imported all of these components so they are available for this component and the api key to connect to flickr
//  also I have added the results component that will receive a prop from the SeachDisplay componetn which is the data that was requested from the flickr and axios
//

class SearchDisplay extends Component {

  constructor() {
    super();
    this.runSearch = this.runSearch.bind(this);
    this.state = {
      pictures: [],
      query: ''
     
    };
  } 

   componentDidMount(){

   this.runSearch(this.props.match.params.query);

  }

// Decided it would be fun to start with treehouse search whent he app was loaded the treehouse would be the parameter that is passed into the equation 


  componentWillReceiveProps(next){

      this.runSearch(next.match.params.query);

  }

  // The will receive props will access the object that was created using the /:  after the routes that is basically a keyword that is passed in

 runSearch(query){
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          query: ''
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
 }

 //this requests the information from flickr that used the api key that I got and the query key word taht is passed in and displays 16 pictures per page

 //also I have renderd the follow and added the results component and passed in the data props and references the data that was prdouced the request 

 //  by incorpoating the component into the render portion now it can be passed into the props and have access to the data that was created 

 // Also I have included an h1 tag that will reference the word typed in the search bar or when clicked on a button, each one of these produced an object ath

 //That bca be referenced and accessed by the dot notation

  render() {
    return (
      <div>  

          <h1> {this.props.match.params.query} pictures</h1>      
          <Results data={this.state.pictures} />

      </div>

    
    );
  }
}



export default SearchDisplay;


