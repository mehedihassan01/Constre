import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Counter = () => {
  return (
    <div className="py-[130px] bg-[#F2F3F5]">
      <div className="Container">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[#ff5e14] text-xl font-medium font-Yantramanav">
              COMPANY EXPERTISE
            </h4>
            <h1 className="text-[50px] font-bold leading-[58px] pt-2 text-[#0a1027] font-Yantramanav">
              Your achievement is the beauty
            </h1>
            <h1 className="text-[50px] font-bold leading-[58px] pb-6 text-[#0a1027] font-Yantramanav">
              of our Company{" "}
            </h1>
          </div>

          <div className="float-right">
            <Link to="#" className="">
              <button className="primary-btn">
                MAKE AN APPOINTMENT
                <GoArrowUpRight className=" pl-2 inline text-3xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Container pt-[110px] flex items-center">
        <div className="w-[350px] h-[350px] justify-center flex flex-col bg-white text-center mr-7 rounded-full">
          <h1 className="text-[50px] text-[#ff5e14] font-bold font-Yantramanav ">
            39K
          </h1>
          <p className="text-[#565969] text-[18px] font-Yantramanav font-normal">
            Satisfied Costomers
          </p>
        </div>
        <div className="w-[350px] h-[350px] justify-center flex flex-col items-center bg-white text-center mr-7 rounded-full ">
          <h1 className="text-[50px] text-[#ff5e14] font-bold font-Yantramanav ">
            39K
          </h1>
          <p className=" text-[#565969] text-[18px] font-Yantramanav font-normal">
            Satisfied Costomers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
