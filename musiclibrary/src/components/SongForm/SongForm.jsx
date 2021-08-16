import React, { Component } from 'react'

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      album: '',
      artist: '',
      release_date: '',
    }
  }

  render() { 
    return ( 
      <div>
        <h1>Please add a new song to the playlist. Lmaooo</h1>
        <form action="" method="post">
          <label for="title">Title: </label>
          <input type="text" name="title"><br>
          <label for="album">Album: </label>
          <input type="text" name="album"><br>
          <label for="artist">Artist: </label>
          <input type="text" name="artist"><br>
          <label for="release_date">Release Date: </label>
          <input type="date" name="release_date">
        </form>
      </div>
    );
  }
}
 
export default SongForm;