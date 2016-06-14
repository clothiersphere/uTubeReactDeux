import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB_-yxPxNAssDHut65MBgyVifPmt1PcVAg';


class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };	

		// YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
		// 	this.setState({videos: data});
		// });

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos});
		});
	
	// console.log(this.state)
	}

	//VideoList needs a reference to videos 
	//Need to pass data from parent - APP to child - VideoList
	render() {
		return ( 
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));