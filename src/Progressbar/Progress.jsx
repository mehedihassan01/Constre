import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
  return <ProgressBar completed={60} bgColor="#243c5a" animateOnRender={true} transitionDuration="2s" transitionTimingFunction='ease-in-out' />;
};

export default Example;
