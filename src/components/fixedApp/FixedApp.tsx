import { MyTimer } from "../timer/TimerMain";
import s from "./App.module.css";
type CustomAppPorps = {
  onComplete: () => void;
};
export default function FixedApp({ onComplete }: CustomAppPorps) {
  const sessionDuration: number = 5 * 60;

  const time = new Date();
  time.setSeconds(time.getSeconds() + sessionDuration);

  return (
    <div className={s.appContainer}>
      <div className={s.contentWrapper}>
        <div className={s.containerSecondary}>
          <MyTimer
            expiryTimestamp={time}
            totalDuration={sessionDuration}
            focusText={"Break"}
            onComplete={onComplete}
          />
        </div>
      </div>
    </div>
  );
}
