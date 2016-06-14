import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoPlayer from './components/video_player';

const API_KEY = 'AIzaSyB_-yxPxNAssDHut65MBgyVifPmt1PcVAg';


class App extends Component {
	constructor(props) {
		super(props);
		
		//selected video state 
		this.state = { 
			videos: [], 
			selectedVideo: null 
		};	

		// YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
		// 	this.setState({videos: data});
		// });

		// YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		// 	this.setState({videos});
		// });

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	
	// console.log(this.state)
	}

	//VideoList needs a reference to videos 
	//Need to pass data from parent - APP to child - VideoList

	//VideoList now has prop called onVideoSelect 
	render() {
		return ( 
			<div>
				<SearchBar />
				<VideoPlayer video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}/>				
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));