import React from "react";
import TextTransition, { presets } from "react-text-transition";
import AccentAnimation from "../accent-animation/AccentAnimation";

const TEXTS = [
  "Unified Cybersecurity Platform",
  "Lorem ipsum dolor sit amet",
  "3",
  "4",
];
const Section = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className={"section container"}>
      <AccentAnimation />
      <h1 className={"section-title"}>
        Combining the power of Artificial Intelligence, Deep Learning, and
        End-to-End Automation
      </h1>
      {/* <p className={"section-text"}>Unified Cybersecurity Platform</p> */}
      <div className={"transition_div"}>
        <TextTransition
          direction="down"
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
      </div>
    </section>
  );
};

export default Section;
