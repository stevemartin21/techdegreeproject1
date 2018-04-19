import React, { Component } from 'react';
import axios from 'axios';
import Results from './Results';
import apiKey from './api';
import Mountains from './Mountains';
import Rivers from './Rivers';
import Lakes from './Lakes';
import TryAgain from './TryAgain';

class Container extends Component {

  constructor() {
    super();
    this.performSearch = this.performSearch.bind(this);
    this.state = {
      pictures: [],
      query: ''
     
    };
  } 

   componentDidMount(){

   this.performSearch('horses');

  }

  componentWillReceiveProps(nextProps){

      this.performSearch(nextProps.match.params.query);

  }

 performSearch(query){
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

  render() {
    return (
      <div>         
          <Results data={this.state.pictures} />

      </div>

    
    );
  }
}

export default Container;



