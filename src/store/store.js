import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var store = createStore (
    rootReducer,
    {videoList: exampleVideoData, currentVideo: null},
    applyMiddleware(thunk)
);
export default store;