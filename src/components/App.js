import React from 'react';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideosList from './VideosList';
import youtube from '../apis/youtube';



class App extends React.Component {

    state = { data: [], selectedVideo: null }

    onSearch = async (res) => {
        const respone = await youtube.get('/search', {
            params: {
                q: res
            }
        });
        this.setState({ data: respone.data.items });
        // console.log(this.state.data[1].snippet.title)
    };

    onVideoSelect = (video) => {
        // console.log(video);
        this.setState({ selectedVideo: video })
    }

    render() {

        return (
            <div className="ui container" >
                <SearchBar onSearchSubmit={this.onSearch} />
                <div className="ui grid centered" >
                    <div className="left floated eleven wide column" style={{width:'100%'}}>
                            <VideoDetails videoShow={this.state.selectedVideo} />
                        </div>
                    <div className="right floated five wide column">
                            <VideosList videos={this.state.data} onVideoSelect={this.onVideoSelect} />
                        </div>
                </div>
            </div>
        );
    }
}

export default App;