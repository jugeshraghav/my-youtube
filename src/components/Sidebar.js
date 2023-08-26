import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubetv } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlineMovieCreation } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { GiFlamer } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
export const Sidebar = () => {
  return (
    <>
      <div className="w-56 pt-2 px-3 ">
        <section className="w-full border-b border-gray-200">
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiFillHome className="text-xl" />
            <span>Home</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiFillHome className="text-xl" />
            <span>Shorts</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiFillHome className="text-xl" />
            <span>Subscriptions</span>
          </p>
        </section>
        <section className="w-full border-b border-gray-200">
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <MdVideoLibrary className="text-xl" />
            <span>Library</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <BiHistory className="text-xl" />
            <span>History</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiOutlineClockCircle className="text-xl" />
            <span>Watch Later</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiFillLike className="text-xl" />
            <span>Liked Videos</span>
          </p>
        </section>
        <section className="w-full border-b border-gray-200">
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <span>Subscriptions</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiOutlineUser className="text-xl" />
            <span>Tanay Pratap</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiOutlineUser className="text-xl" />
            <span>Akshay Saini</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiOutlineUser className="text-xl" />
            <span>Cartoon</span>
          </p>
        </section>
        <section className="w-full border-b border-gray-200">
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <span>Explore</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <GiFlamer className="text-xl" />
            <span>Trending</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiOutlineShopping className="text-xl" />
            <span>Shopping</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <BsMusicNote className="text-xl" />
            <span>Music</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <MdOutlineMovieCreation className="text-xl" />
            <span>Movies</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiFillLike className="text-xl" />

            <span>Live</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <SiYoutubegaming className="text-xl" />
            <span>Gaming</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <BiNews className="text-xl" />
            <span>News</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <BsTrophy className="text-xl" />
            <span>Sports</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <AiOutlineBulb className="text-xl" />
            <span>Learning</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <GiHanger className="text-xl" />
            <span>Fashion & Beauty</span>
          </p>
        </section>
        <section className="w-full border-b border-gray-200">
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <span>More From Youtube</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <SiYoutubetv className="text-xl text-red-600" />
            <span>YouTube Premiuim</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <SiYoutubemusic className="text-xl text-red-600" />
            <span>YouTube Music</span>
          </p>
          <p className="flex w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-100">
            <TbBrandYoutubeKids className="text-xl text-red-600" />

            <span>YouTube Kids</span>
          </p>
        </section>
      </div>
    </>
  );
};
