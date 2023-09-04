const MY_API_KEY = "AIzaSyBDBfmjTtduKursqGveeWWX8B6QsxtH6tc";
export const YOUTUBE_MOST_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${MY_API_KEY}`;
export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//   http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=Query
// https://corsproxy.io/?

export const commentsFetcher = async (videoId) => {
  try {
    const res =
      await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=30&videoId=${videoId}&key=${MY_API_KEY}
`);
    const data = await res.json();
    console.log(data);
    return data?.items;
  } catch (err) {
    console.log(err);
  }
};
