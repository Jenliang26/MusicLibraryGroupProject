import React, { Component } from 'react'

class MusicTable extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return(
      <div>
        <h1>hello from MusicTable</h1>
        <table>
          <tr>
            <td>Song Title</td>
            <td>Album</td>
            <td>Artist</td>
            <td>Genre</td>
            <td>Release Date</td>
          </tr>
          <tr>
            <td>Out of My Mind</td>
            <td>try!</td>
            <td>John Mayer</td>
            <td>Blues</td>
            <td>2005?</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default MusicTable;