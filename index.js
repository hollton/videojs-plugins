import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import videoPlugins from './plugins/index';

let videoIds = ['my-player', 'my-player1'];
let videoOptions = {};
let players = [];

players = videoIds.map(id => {
	return videojs(id, videoOptions, function() {
		videoLinster(this);
	});
})

let videoLinster = (player) => {
	videoPlugins.play(player, {
		// disable: true
	}, players);
}

export default videoPlugins;
