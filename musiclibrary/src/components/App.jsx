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
                    release_date: ''
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


    render() {
        return(
            <div>

                <MusicTable songs={this.state.songs} />

            </div>
        )
    }
}

export default App;
