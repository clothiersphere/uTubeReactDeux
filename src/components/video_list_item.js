import React from 'react';

//argument has property named video - declare a 
// const video = props.video;
const VideoListItem = ({video}) => {
	// console.log(video)
	const imageUrl = video.snippet.thumbnails.default.url;
	
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div clasName="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
	
};

export default VideoListItem;