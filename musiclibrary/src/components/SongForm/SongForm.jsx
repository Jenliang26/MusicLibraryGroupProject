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

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>

          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Album:
            <input type="text" value={this.state.album} onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Artist:
            <input type="text" value={this.state.artist} onChange={this.handleChange} />
          </label>
          <br />

          <label>
            Release Date:
            <input type="text" value={this.state.release_date} onChange={this.handleChange} />
          </label>
          <br />


          <input type="submit" value="Submit" />
      </form>
          
      </div>
    );
  }
}
 
export default SongForm;