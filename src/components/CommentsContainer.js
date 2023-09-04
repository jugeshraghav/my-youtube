const commentsArray = [
  {
    name: "Jugesh",
    text: "Hello Jugesh",
    replies: [
      {
        name: "Ashish",
        text: "Hi EveryOne",
        replies: [],
      },
    ],
  },
  {
    name: "Jugesh",
    text: "Hello Jugesh",
    replies: [
      {
        name: "Ashish",
        text: "Hi EveryOne",
        replies: [],
      },
      {
        name: "Ashish",
        text: "Hi EveryOne",
        replies: [],
      },
      {
        name: "Ashish",
        text: "Hi EveryOne",
        replies: [
          {
            name: "Ashish",
            text: "Hi EveryOne",
            replies: [],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold">{data.name}</span>
      <span>{data.text}</span>
    </div>
  );
};
const CommentList = ({ commentsArray }) => {
  return (
    <div>
      {commentsArray.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="pl-4  border-l-black">
            <CommentList commentsArray={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};
export const CommentsContainer = () => {
  return (
    <>
      <div>
        <CommentList commentsArray={commentsArray} />
      </div>
    </>
  );
};
