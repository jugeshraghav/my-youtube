import { ButtonList } from "../components/ButtonList";
import { VideoContainer } from "../components/VideoContainer";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-8 px-1 py-4 bg-yellow-100">
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};
