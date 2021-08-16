// import React, { Component } from 'react'
import React from 'react';

const MusicTable = (props) => {
  // let songs = this.props.songs;
  return ( 
        <div>
          <table>
            <tr>
              <td>Song Title</td>
              <td>Album</td>
              <td>Artist</td>
              <td>Release Date</td>
            </tr>
            <tr>
              <td>{props.songs.map((song, index) => <li key={index}>{song.title}</li>)}</td>
              <td>{props.songs.map((song, index) => <li key={index}>{song.album}</li>)}</td>
              <td>{props.songs.map((song, index) => <li key={index}>{song.artist}</li>)}</td>
              <td>{props.songs.map((song, index) => <li key={index}>{song.release_date}</li>)}</td>
            </tr>
          </table>
        </div>
   );
}
 
export default MusicTable;