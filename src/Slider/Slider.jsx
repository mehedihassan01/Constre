import { GoArrowUpRight } from "react-icons/go";

const Slider = () => {
  return (
    <div className="bg-[url('/images/slider-bg.jpg')] h-[850px] bg-center bg-cover bg-no-repeat ">
      <div className="Container pt-[240px] ">
        <h4 className="text-[#ff5e14] text-[25px] font-medium ">
          Hello! We are Constre Team
        </h4>
        <h1 className="text-[70px] font-Yantramanav text-[#0a1027] font-bold leading-[80px] ">
          INNOVATIVE DESIGNS
        </h1>
        <h1 className="text-[70px] text-[#0a1027] font-medium leading-[80px] ">
          MAKES DEVELOPER
        </h1>
        <p className="py-5 w-[68%] text-[17px] text-[#565969]">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using content here normal
          distribution
        </p>
        <button className="primary-btn py-[13px] before:bg-[#0a1027] ">
          See Project <GoArrowUpRight className=" inline text-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
