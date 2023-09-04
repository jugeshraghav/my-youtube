const Comment = ({ data }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <img
          src={data.authorProfileImageUrl}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
      <div className="flex flex-col my-1">
        <span className="font-bold text-sm">@{data.authorDisplayName}</span>
        <span className="text-sm">{data.textDisplay}</span>
      </div>
    </div>
  );
};

export const CommentsContainer = ({ commentsArray }) => {
  return (
    <div>
      {commentsArray.map((comment, index) => (
        <div>
          <Comment key={index} data={comment.snippet.topLevelComment.snippet} />
        </div>
      ))}
    </div>
  );
};
