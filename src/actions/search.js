import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => ({
  // type: 'HANDLE_VIDEO_SEARCH',
  // videos: q
  // TODO:  Write an asynchronous action to handle a video search!
});
export default handleVideoSearch;


// "refactor searchYoutube to use the fetch function to make HTTP requests instead of AJAX"
// export function handleVideoSearch(q) {
//   return (dispatch) => {
//       dispatch(itemsIsLoading(true));

//       searchYouTube(q)
//           .then((response) => {
//               if (!response.ok) {
//                   throw Error(response.statusText);
//               }

//               dispatch(itemsIsLoading(false));

//               return response;
//           })
//           .then((response) => response.json())
//           .then((items) => dispatch(itemsFetchDataSuccess(items)))
//           .catch(() => dispatch(itemsHasErrored(true)));
//   };
// }


// $.ajax({
//   url: 'https://www.googleapis.com/youtube/v3',
//   type: 'GET',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     console.error('chatterbox: Failed to send message', data);
//   }
// });