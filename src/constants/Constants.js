const MY_API_KEY = "AIzaSyBDBfmjTtduKursqGveeWWX8B6QsxtH6tc";
export const YOUTUBE_MOST_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${MY_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=hello";

//   http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=Query
