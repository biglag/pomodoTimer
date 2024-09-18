import { useEffect, useState } from "react";
import { FocusText } from "../focusText/FocusText";
import { AddTime } from "../selector/HandleAddTime";
import { TimeSelector } from "../selector/TimeSelection";
import { MyTimer } from "../timer/TimerMain";
import s from "./App.module.css";

export default function App() {
  const [expiryTimestamp, setExpiryTimestamp] = useState<Date>(new Date());
  const [totalDuration, setTotalDuration] = useState<number>(900);
  const [focusText, setFocusText] = useState<string>("Designing");

  const handleFocusTextChange = (newText: string) => {
    setFocusText(newText);
  };

  const handleTimeSelect = (timeInSeconds: number) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeInSeconds);
    setExpiryTimestamp(time);
    setTotalDuration(timeInSeconds);
  };
  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 900);
    setExpiryTimestamp(time);
  }, []);

  return (
    <div className={s.appContainer}>
      <div className={s.contentWrapper}>
        <div className={s.containerSecondary}>
          <TimeSelector onTimeSelect={handleTimeSelect} />
          <AddTime onTimeSelect={handleTimeSelect} />
          <MyTimer
            expiryTimestamp={expiryTimestamp}
            totalDuration={totalDuration}
            focusText={focusText}
          />
          <FocusText text={focusText} onTextChange={handleFocusTextChange} />
        </div>
      </div>
    </div>
  );
}
