import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";

import Skill from "./Skill/Skill";
import Counter from "./Counter/Counter";
import Service from "./Service/Service";

import KeenSlider from "./Slider/KeenSlider";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Skill></Skill>

      <Counter></Counter>
      <Service></Service>
     <div>
     <KeenSlider/>
     </div>
    </div>
  );
};

export default App;
