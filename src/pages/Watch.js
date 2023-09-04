import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { CommentsContainer } from "../components/CommentsContainer";
import { commentsFetcher } from "../constants/Constants";
import { SuggestedVideosContainer } from "../components/SuggestedVideosContainer";

export const Watch = () => {
  const [arr, setArr] = useState([]);
  const [searchParams] = useSearchParams();
  const currentVideoId = searchParams.get("v");
  const commentsArray = async () => {
    const arr = await commentsFetcher(currentVideoId);
    setArr(arr);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    commentsArray();
  }, []);

  return (
    <>
      <div className="w-full h-full bg-purple-500 flex gap-4 ">
        <div className="">
          <iframe
            width="60%"
            height="70%"
            title="current video"
            allowFullScreen
            className="rounded-xl"
            src={
              "https://www.youtube.com/embed/" +
              currentVideoId +
              "?autoplay=1&mute=1"
            }
          ></iframe>

          <CommentsContainer commentsArray={arr} />
        </div>
        <div className="">
          <SuggestedVideosContainer />
        </div>
      </div>
    </>
  );
};
