import React from 'react';

const MusicTable = (props) => {

  return ( 
        <div>
          <table>
            <tr>
              <td>Song Title</td>
              <td>Album</td>
              <td>Artist</td>
              <td>Release Date</td>
              <td>ID</td>
            </tr>
            <tr>
              <td>{props.songs.map((song, index) => <li key={index}>{song.title}</li>)}</td>
              <td>{props.songs.map((song, index) => <li key={index}>{song.album}</li>)}</td>
              <td>{props.songs.map((song, index) => <li key={index}>{song.artist}</li>)}</td>
              <td>{props.songs.map((song, index) => <li key={index}>{song.release_date}</li>)}</td>



              <td>{props.songs.map((song, index) => <li key={index}>


                <button onClick={() => props.deleteRow(song.id)}>Delete</button>
                
              
              </li>)}
              </td>


            </tr>
          </table>
        </div>
   );
}
 
export default MusicTable;
