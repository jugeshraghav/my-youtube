import { NavLink, useNavigate } from "react-router-dom";

export const VideoCard = ({ videoDetails }) => {
  const { snippet, statistics } = videoDetails;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-80 flex flex-col gap-3 cursor-pointer"
        onClick={() => navigate(`/watch?v=${videoDetails.id}`)}
      >
        <img
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg hover:rounded-none"
        />
        <div>
          <div className="flex gap-1">
            <img
              src={snippet.thumbnails.default.url}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-sm font-bold">{snippet.localized.title}</h1>
              <div className="text-sm text-gray-800">
                <p>{snippet.channelTitle}</p>
                <p>
                  <span>{Math.round(statistics.viewCount / 1000)}k views</span>.
                  <span>{snippet.publishedAt}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
