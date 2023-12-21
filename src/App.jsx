import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";

import Skill from "./Skill/Skill";
import Example from "./Progressbar/Progress";
import Counter from "./Counter/Counter";
import Service from "./Service/Service";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Skill></Skill>
      <Example></Example>
      <Counter></Counter>
      <Service></Service>
    </div>
  );
};

export default App;
