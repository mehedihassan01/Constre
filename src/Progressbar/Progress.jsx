import ProgressBar from "@ramonak/react-progress-bar";

const Progressbar = () => {
  return (
   
      <ProgressBar
        className="pt-10 h-[3px !important]"
        completed={60}
        bgColor="#243c5a"
        animateOnRender={true}
        transitionDuration="2s"
        transitionTimingFunction="ease-in-out"
      />
   
  );
};

export default Progressbar;
