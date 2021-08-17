import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [
        {
            title: '',
            album: '',
            artist: '',
            release_date: '',
            id: ''
        }
      ]
    }
  }
  render() { 
    return ( 
      <div>
        <h1>Hello from search bar lmaooo</h1>

        <select>
          <option selected value="">Search</option>
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
          <option value="release_date">Release Date</option>
        </select>

        <h2>ahoy from under the search bar!</h2>

      </div>

     );
  }
}
 
export default SearchBar;