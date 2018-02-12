import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDBHMaL_l_WUSk3TEe2vBCHWW6T18XzIxc';

//Create a new component. This Component should produce some HTML.
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
        };
        //function(videos)
        this.videoSearch('surfboards');
    }

     videoSearch(term){
       YTSearch({key: API_KEY, term: term}, (videos) => {
           this.setState({
             videos:videos,
             selectedVideo: videos[0]
           });
       });
     }

    render() {

      //debounce takes inner function and only returns it once every 300 ms
      const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}

//Take this compenent's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
