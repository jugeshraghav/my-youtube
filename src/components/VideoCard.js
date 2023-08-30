export const VideoCard = ({ videoDetails: { snippet, statistics } }) => {
  console.log(snippet);
  console.log(statistics);
  return (
    <>
      <div className="w-80 flex flex-col gap-3">
        <img
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg"
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
