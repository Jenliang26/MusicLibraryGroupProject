import React, {Component} from 'react';
import './App.css';
import MusicTable from './music_table/MusicTable';
import axios from 'axios';

class App extends Component {
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

    
    componentDidMount() {
        this.getSong();
    }

    async getSong() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({
                songs: response.data
                
            })
        }
        catch(except) {
            alert('no worky bruv')
        }
    }


    deleteRow(id) {
        // let song_id = this.state.songs.id
        axios.delete(`http://127.0.0.1:8000/music/${id}`)
    }
  

   

    render() {
        return(
            <div>
                <MusicTable songs={this.state.songs} deleteRow={this.deleteRow} />
            </div>
        )
    }
}

export default App;
