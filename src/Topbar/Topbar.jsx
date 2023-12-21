import { SlLocationPin } from "react-icons/sl";
import { BiMessageDetail } from "react-icons/bi";

const Topbar = () => {
  return (
    <div className=" h-[50px] bg-[#FF5E15]  relative before:absolute before:top-0 before:-right-6 before:w-[1185px] before:h-full before:skew-x-[45deg] before:bg-[#0A1028] ">
      <div className="Container  flex items-center justify-between">
        <p className="text-white ">
          We will go through all the stages of construction
        </p>
        <ul className=" text-white">
          <li className="inline text-white">
            <SlLocationPin className="inline" /> 203 Madison Ave, New York, USA
          </li>
          <li className="inline pl-6 relative before:absolute before:top-[6px] before:left-[11px] before:h-3 before:w-[1px] before:bg-white">
            <BiMessageDetail className="inline pr-2 text-2xl" />
            info@example.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
