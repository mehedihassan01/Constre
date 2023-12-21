
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Topbar from "../Topbar/Topbar";



const Navbar = () => {
    return (
        <nav className="">
             <Topbar></Topbar>

          <div className="bg-[#0A1028]">
            
             
        <div className="flex items-center justify-between  h-[130px] Container">
            <img src="/images/logo.png" alt="" className=""  />

            <ul className="flex items-center gap-x-3">
                <li>
                    <Link to="#" className="flex items-center text-white uppercase mr-4">
                        Home
                        <MdOutlineKeyboardArrowDown className="text-xl" />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex items-center text-white uppercase mr-4">
                        Pages
                        <MdOutlineKeyboardArrowDown />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex items-center text-white uppercase mr-4">
                        Services
                        <MdOutlineKeyboardArrowDown />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex items-center text-white uppercase mr-4">
                        Portfolio
                        <MdOutlineKeyboardArrowDown />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex items-center text-white uppercase mr-4">
                        Blog
                        <MdOutlineKeyboardArrowDown />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex items-center text-white uppercase mr-4">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex items-center text-white mr-4">
                    <IoSearch className="text-2xl" />
                    </Link>
                </li>
                <li>
                    <button className="primary-btn2 "> 
                    
                        Get A Quote
                        <GoArrowUpRight className=" pl-2 inline text-3xl" />
                    </button>
                </li>
            </ul>
        </div>
        </div>  
        </nav>
      
    );
};

export default Navbar;