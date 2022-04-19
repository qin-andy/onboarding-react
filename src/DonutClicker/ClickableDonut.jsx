import CounterDisplay from "./CounterDisplay";
import DonutButton from "./DonutButton";
import EvilDonutButton from "./EvilDonutButton";
import { useState } from "react";

function ClickableDonut(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <CounterDisplay count={count} />
      <DonutButton incrementCount={incrementCount} />
      <EvilDonutButton decrementCount={decrementCount} />
    </>
  );
}

export default ClickableDonut;
