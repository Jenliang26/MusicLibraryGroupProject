// import React, { Component } from 'react'
import React from 'react';

const MusicTable = (props) => {
  // let songs = this.props.songs;
  return ( 
        <div>
          <h1>hello from MusicTable</h1>

          <ul>
            {props.songs.map((song, index) => <li key={index}>{song.title}</li>)}
          </ul>

          {/* <table>
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
              <td>{props.songs[0].artist}</td>
              <td>Blues</td>
              <td>2005?</td>
            </tr>
          </table> */}
        </div>
   );
}
 
export default MusicTable;