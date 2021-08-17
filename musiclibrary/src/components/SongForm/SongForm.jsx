import React, { Component } from 'react'
import axios from 'axios';

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

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onAlbumChange = e => {
    this.setState({
      album: e.target.value
    });
  };

  onArtistChange = e => {
    this.setState({
      artist: e.target.value
    });
  };

  onReleaseDateChange = e => {
    this.setState({
      release_date: e.target.value
    });
  };

  handleSubmit = e => {
    const data = {
      title: this.state.title,
      album: this.state.album,
      artist: this.state.artist,
      release_date: this.state.release_date
    };
    axios
    .post("http://127.0.0.1:8000/music/", data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

  render() { 
    return ( 
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>


          <input
            placeholder="Title" value={this.state.title}
            onChange={this.onTitleChange} required
          />

          <input
            placeholder="Album" value={this.state.album}
            onChange={this.onAlbumChange} required
          />

          <input
            placeholder="Artist" value={this.state.artist}
            onChange={this.onArtistChange} required
          />

          <input
            placeholder="Release Date" value={this.state.release_date}
            onChange={this.onReleaseDateChange} required
          />
          


          <button type="submit">Add Song</button>
        </form>
      </div>
    );
  }
}
 
export default SongForm;


