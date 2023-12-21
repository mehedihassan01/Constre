import { MdOutlineChair } from "react-icons/md";

const Service = () => {
  return (
    <div className="bg-white py-[130px]">
      <div className="Container">
        <div className="text-center overflow-hidden">
          <h4 className="text-[#ff5e14] text-xl font-medium font-Yantramanav">
            OUR SERVICES
          </h4>
          <h1 className="text-[50px] font-bold leading-[58px] pt-2 text-[#0a1027] font-Yantramanav">
            Service We are Offering to
          </h1>
          <h1 className="text-[50px] font-bold leading-[58px] pb-6 text-[#0a1027] font-Yantramanav">
            Our Customers
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-[30px]">
          <div className="overflow-hidden border group">
            <div className="service-card-img ">
              <img src="/images/service-1.jpg" alt="img" />
            </div>

            <div className=" relative z-[1] w-full -top-[30px] left-[30px] [box-shadow:0_0_16px_rgb(0_0_0_/_10%)] pt-[25px] px-[30px] pb-[40px] bg-[#fff]">
              <div className="absolute -top-[40px] right-[60px] bg-[#fff] px-[24px] py-[25px] rounded-[50%] transition:all [box-shadow:0_0_60px_rgb(0_0_0_/_10%)]  ">
                <span className="service-chair-outline">
                  <MdOutlineChair className="text-[35px] text-SecondaryColor-0 group-hover:text-white transition:all duration-500 " />
                </span>
              </div>

              <h1 className="text-[#0a1027] text-[27px] font-Yantramanav font-bold  my-1">
                Architecture
              </h1>
              <p className=" text-[#565969] font-Archivo">
                A factory is a business that produces goods or products goods
                can range from consumer products such as clothing
              </p>
              <button className="primary-btn2">Read More</button>
            </div>
          </div>
          
          <div className="overflow-hidden border group">
            <div className="service-card-img ">
              <img src="/images/service-1.jpg" alt="img" />
            </div>

            <div className=" relative z-[1] w-full -top-[30px] left-[30px] [box-shadow:0_0_16px_rgb(0_0_0_/_10%)] pt-[25px] px-[30px] pb-[40px] bg-[#fff]">
              <div className="absolute -top-[40px] right-[60px] bg-[#fff] px-[24px] py-[25px] rounded-[50%] transition:all [box-shadow:0_0_60px_rgb(0_0_0_/_10%)]  ">
                <span className="service-chair-outline">
                  <MdOutlineChair className="text-[35px] text-SecondaryColor-0 group-hover:text-white transition:all duration-500 " />
                </span>
              </div>

              <h1 className="text-[#0a1027] text-[27px] font-Yantramanav font-bold  my-1">
                Architecture
              </h1>
              <p className=" text-[#565969] font-Archivo">
                A factory is a business that produces goods or products goods
                can range from consumer products such as clothing
              </p>
              <button className="primary-btn2">Read More</button>
            </div>
          </div>
          
          <div className="overflow-hidden border group">
            <div className="service-card-img ">
              <img src="/images/service-1.jpg" alt="img" />
            </div>

            <div className=" relative z-[1] w-full -top-[30px] left-[30px] [box-shadow:0_0_16px_rgb(0_0_0_/_10%)] pt-[25px] px-[30px] pb-[40px] bg-[#fff]">
              <div className="absolute -top-[40px] right-[60px] bg-[#fff] px-[24px] py-[25px] rounded-[50%] transition:all [box-shadow:0_0_60px_rgb(0_0_0_/_10%)]  ">
                <span className="service-chair-outline">
                  <MdOutlineChair className="text-[35px] text-SecondaryColor-0 group-hover:text-white transition:all duration-500 " />
                </span>
              </div>

              <h1 className="text-[#0a1027] text-[27px] font-Yantramanav font-bold  my-1">
                Architecture
              </h1>
              <p className=" text-[#565969] font-Archivo">
                A factory is a business that produces goods or products goods
                can range from consumer products such as clothing
              </p>
              <button className="primary-btn2">Read More</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
