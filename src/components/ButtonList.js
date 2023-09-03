export const ButtonList = () => {
  const ButtonDataArr = [
    "All",
    "Music",
    "Web Development",
    "Computer Science",
    "unboxing",
    "gadgets",
    "arijit singh",
    "bolloywood music",
    "live",
    "dramedy",
    "lectures",
    "gaming",
    "movie musicals",
    "sales",
    "recently updated",
  ];
  return (
    <>
      <div className="flex gap-2 flex-wrap">
        {ButtonDataArr.map((content, index) => (
          <button
            key={index}
            className="bg-gray-100 px-4 py-1 rounded-lg w-max"
          >
            {content}
          </button>
        ))}
      </div>
    </>
  );
};
