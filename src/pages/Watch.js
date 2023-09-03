import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

export const Watch = () => {
  const [searchParams] = useSearchParams();
  const currentVideoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div>
        <iframe
          width="1000px"
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
        {/* <SuggestedVideosContainer/> */}
      </div>
      <div>{/* <CommentsContainer /> */}</div>
    </>
  );
};
