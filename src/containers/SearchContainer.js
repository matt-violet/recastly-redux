import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';



var SearchContainer = () => {};


const mapStateToProps = (state) => ({
    videos: state.videos,
    currentVideo: state.currentVideo
}) 


const mapDispatchToProps = (dispatch) => ({
    handleSearchInputChange: (video) => {
            dispatch(handleVideoSearch(video))
    }
})

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;