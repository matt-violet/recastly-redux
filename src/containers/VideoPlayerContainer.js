import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {};

const mapStateToProps = (state) => ({
    video: state.currentVideo
})


const mapDispatchToProps = (dispatch) => ({
    handleVideoListEntryTitleClick: (video) => {
        dispatch(changeVideo(video))
    }
})

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)



export default VideoPlayerContainer;
