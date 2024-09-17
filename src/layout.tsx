import { useState } from "react";
import { TimeSelector } from "./components/selector/TimeSelection";
import { MyTimer } from "./components/timer/TimerMain";

export default function App() {
  const [expiryTimestamp, setExpiryTimestamp] = useState<Date>(new Date());

  const handleTimeSelect = (timeInSeconds: number) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeInSeconds);
    setExpiryTimestamp(time);
  };

  return (
    <div>
      <TimeSelector onTimeSelect={handleTimeSelect} />
      <MyTimer expiryTimestamp={expiryTimestamp} />
    </div>
  );
}
const Layout = () => {
  return;
};

export { Layout };
