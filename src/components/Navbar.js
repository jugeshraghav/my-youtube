import { AiOutlineSearch } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBell } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { addToSearchCache } from "../utils/searchSlice";
export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestionsFromApi, setSuggestionsFromApi] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search.searchCache);

  ///////Search///////
  const searchApiHandler = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchText);
    const json = await data.json();
    setSuggestionsFromApi(json[1]);
    dispatch(addToSearchCache({ [searchText]: json[1] }));
  };
  const dispatch = useDispatch();
  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestionsFromApi(searchCache[searchText]);
      } else {
        searchApiHandler();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <>
      <div className="flex items-center justify-between  px-3 shadow-lg ">
        <div className="flex items-center gap-3 ">
          <GiHamburgerMenu
            className="text-xl  cursor-pointer  w-10 h-10 p-2 rounded-full hover:bg-slate-100"
            onClick={() => handleSidebarToggle()}
          />
          <ImYoutube2 className="text-red-500 w-24 h-16 cursor-pointer" />
        </div>
        <div className="w-2/4 flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-3 border border-gray-100 rounded-l-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className=" py-2 px-6 border border-gray-100 rounded-r-full bg-slate-200">
            <AiOutlineSearch className="text-2xl " />
          </button>
          {showSuggestions && suggestionsFromApi.length > 0 && (
            <ul className="absolute top-12 left-0 bg-white w-full rounded-lg shadow-lg border">
              {suggestionsFromApi.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 py-1 px-4 hover:bg-gray-100"
                >
                  <AiOutlineSearch className="text-lg" />
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
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
