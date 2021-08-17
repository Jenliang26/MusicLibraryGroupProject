import React, {Component} from 'react';
import './App.css';
import MusicTable from './music_table/MusicTable';
import axios from 'axios';
import SongForm from './SongForm/SongForm';
import SearchBar from './SearchBar/SearchBar';
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

    deleteRow= async(id)=> {
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            this.getSong()
        }
        catch(e){
            console.log(e)
        }
        
    }
    filterResults =(field, searchTerm)=>{
        console.log(field)
        console.log(searchTerm)
        let results = this.state.songs.filter(function(el){
            if(el[field] == searchTerm){
                return true
            }
        })
        this.setState({
            songs: results
        })
    }

    render() {
        return(
            <div>
                
                <MusicTable 
                    songs={this.state.songs}
                    deleteRow={this.deleteRow} 
                />
                <SongForm 
                    songs={this.state.songs} 
                />

                <SearchBar 
                    filter = {this.filterResults}
                    songs={this.state.songs}
                />

            </div>
        )
    }
}

export default App;
