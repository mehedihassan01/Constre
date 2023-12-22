import Progressbar from "../Progressbar/Progress";

const Skill = () => {
  return (
    <div className="Container ">
      <div className="flex items-center justify-between bg-white py-[120px]">
        <div className="flex-1">
          <img src="/images/skill.png" alt="img" className="w-full" />
        </div>

        <div className="flex-1">
          <h4 className="text-[#ff5e14] text-xl font-medium font-Yantramanav">
            CONSTRE COMPANY FEATURES
          </h4>
          <h1 className="text-[50px] font-bold leading-[58px] pt-2 text-[#0a1027] font-Yantramanav">
            We Make Finest Architectural
          </h1>
          <h1 className="text-[50px] font-bold leading-[58px] pb-6 text-[#0a1027] font-Yantramanav">
            Design With Great Passion
          </h1>
          <p>
            Architecture refers to the design & planning of buildings structures
            the spaces around them.It encompasses both the aesthetic functional
            aspects of building design include elements such as layout material
            and construction
          </p>

          <div>
            <div>
              <progress
                className="progress bg-SecondaryColor-0 w-full"
                value="80"
                max="100"
              ></progress>
            </div>

            <div>
              <progress
                className="progress progress-warning w-full"
                value="80"
                max="100"
              ></progress>
            </div>

            <div>
              <progress
                className="progress progress-secondary w-full"
                value="88"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
