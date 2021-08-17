import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      album: '',
      artist: '',
      release_date: ''
    }
  }

  
  render() { 
    return ( 

      <h1>hello from searchbar CLASS component... jenny....</h1>

    );
  }
}
 
export default SearchBar;