import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBell } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
export const Navbar = () => {
  return (
    <>
      <div className="flex">
        <div>
          <GiHamburgerMenu />
          <img
            className="w-12 h-12"
            src="https://logowik.com/content/uploads/images/899_youtube_2017logo.jpg"
            alt="youtube logo"
          />
        </div>
        <div>
          <input type="text"></input>
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div>
          <BiVideoPlus />
          <AiOutlineBell />
          <FaUserAlt />
        </div>
      </div>
    </>
  );
};
