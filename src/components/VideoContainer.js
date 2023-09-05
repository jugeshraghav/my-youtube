import { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../constants/Constants";
import { VideoCard } from "./VideoCard";

export const VideoContainer = () => {
  const [mostPopularVideos, setMostPopularVideos] = useState([]);
  const apiCall = async (url) => {
    const data = await fetch(url);
    const json = await data.json();
    setMostPopularVideos(json.items);
  };
  useEffect(() => {
    apiCall(YOUTUBE_MOST_POPULAR_VIDEOS_API);
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {mostPopularVideos.map((videoDetails) => (
          <VideoCard key={videoDetails.id} videoDetails={videoDetails} />
        ))}
      </div>
    </>
  );
};
