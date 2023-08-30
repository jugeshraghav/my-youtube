import { ImYoutube2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBell } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { YOUTUBE_SEARCH_API } from "../constants/Constants";
export const Navbar = () => {
  ///////Search
  const searchApiHandler = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API);
    const json = await data.json();
    console.log(json);
  };
  searchApiHandler();

  return (
    <>
      <div className="flex items-center justify-between  px-3 shadow-lg ">
        <div className="flex items-center gap-3 ">
          <GiHamburgerMenu className="text-xl  cursor-pointer  w-10 h-10 p-2 rounded-full hover:bg-slate-100" />
          <ImYoutube2 className="text-red-500 w-24 h-16 cursor-pointer" />
        </div>
        <div className="w-2/4 flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-100 rounded-l-full"
          ></input>
          <button className=" py-2 px-6 border border-gray-100 rounded-r-full bg-slate-200">
            <AiOutlineSearch className="text-2xl " />
          </button>
        </div>
        <div className="flex items-center gap-4 ">
          <BiVideoPlus className=" text-2xl cursor-pointer w-10 h-10 p-2 rounded-full hover:bg-slate-100" />
          <AiOutlineBell className="text-2xl cursor-pointer  w-10 h-10 p-2 rounded-full hover:bg-slate-100" />
          <FaUserAlt className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  );
};
