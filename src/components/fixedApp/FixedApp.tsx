import { usePomodoroStore } from "../../state/UsePomodoroStore";
import { MyTimer } from "../timer/TimerMain";
import s from "./App.module.css";
type CustomAppPorps = {
  onComplete: () => void;
};
export default function FixedApp({ onComplete }: CustomAppPorps) {
  const { currentBreakType } = usePomodoroStore();
  const sessionDuration: number =
    currentBreakType === "short" ? 5 * 60 : 15 * 60;

  const time = new Date();
  time.setSeconds(time.getSeconds() + sessionDuration);

  return (
    <div className={s.appContainer}>
      <div className={s.contentWrapper}>
        <div className={s.containerSecondary}>
          <MyTimer
            expiryTimestamp={time}
            totalDuration={sessionDuration}
            focusText={
              currentBreakType === "short" ? "Short Break" : "Long Break"
            }
            onComplete={onComplete}
          />
        </div>
      </div>
    </div>
  );
}
