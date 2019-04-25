import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

ReactDOM.render(
  <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  document.getElementById('app')
);
