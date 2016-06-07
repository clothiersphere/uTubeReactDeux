import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB_-yxPxNAssDHut65MBgyVifPmt1PcVAg';




class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { videos: [] };	

		YTSearch({key: API_KEY, term: 'surfboards'}, (data) {
			this.setState({videos: data});
		});

		YTSearch({key: API_KEY, term: 'surfboards'}, (data) {
			this.setState({videos: data});
		});
	}

	render() {
		return ( 
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));