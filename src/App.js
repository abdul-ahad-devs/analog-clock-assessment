import OuterLayer from "./assets/outerlayer.png";
import hourLayer from "./assets/layer_30.png";
import minutesLayer from "./assets/layer_31.png";
import fourthLayer from "./assets/layer_33.png";
import hoursHand from "./assets/hour-hand.png";
import minutesHand from "./assets/minutes-hand.png";
import secondsHand from "./assets/seconds-hand.png";
import { useEffect, useState } from "react";

function App() {
  const [secondsRotation, setSecondsRotation] = useState(-120);

  useEffect(() => {
    const secondsInterval = setInterval(() => {
      setSecondsRotation((prev) => prev + 10);
    }, 1000);

    return () => {
      clearInterval(secondsInterval);
    };
  }, []);

  return (
    <div className="container flex flex-1 flex-col justify-center items-center mx-auto">
      <h1 className="text-[2.5rem] font-bold text-center">Analog Clock</h1>
      <div className="relative flex items-center justify-center self-center">
        <img alt="outer-layer" src={OuterLayer} className="relative" />
        <img
          alt="outer-layer"
          src={hourLayer}
          className="absolute self-center"
        />
        <img
          alt="outer-layer"
          src={minutesLayer}
          className="absolute self-center"
        />
        <img
          alt="outer-layer"
          src={fourthLayer}
          className="absolute self-center z-[40]"
        />
        <img
          alt="outer-layer"
          src={hoursHand}
          className="absolute translate-y-[-2rem] rotate-[45deg]"
        />
        <img
          alt="outer-layer"
          src={minutesHand}
          className="absolute translate-y-[-3rem] rotate-[-45deg]"
        />
        <img
          alt="outer-layer"
          src={secondsHand}
          className={`absolute translate-y-[-2.5rem] rotate-[${secondsRotation}deg]`}
        />
      </div>

      {/* <img alt="outer-layer" src={fourthLayer} /> */}
    </div>
  );
}

export default App;
