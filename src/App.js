import React, { Component } from 'react'
import Header from './component2/Header';
import SearchVideo from './component2/SearchVideo';
import VideoList from './component2/VideoList';
import VideoDetail from './component2/VideoDetail';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

export default class App3 extends Component {
    state={
        video: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.SearchVideo('novak');
    }

    SearchVideo = async search => {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            maxResults: 15,
            q: search,
            key: 'AIzaSyAZle-Nq6wEPCzusdIkWsAqb5qlRW3cn18'
        }
        });
        this.setState({
            video: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(response)
        console.log(this.state.video)
    }


    onVideoSelect = video => {
        console.log('Video from the App', video);
        this.setState({
            selectedVideo: video
        })
    }

  render() {
    return (
      <div className="container">
          <div className="row">
                <Header />
                <SearchVideo SearchVideo={this.SearchVideo} />
          </div>
          <div className="row">
                <div className="float-left col-8">
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="col-4">
                    <VideoList videos={this.state.video} onVideoSelect={this.onVideoSelect} />
                </div>
          </div>        
      </div>
    )
  }
}
