import CustomApp from "./components/customApp/CustomApp";
import FixedApp from "./components/fixedApp/FixedApp";
import { usePomodoroStore } from "./state/UsePomodoroStore";
export const Layout = () => {
  const { currentComponent, toggleComponent } = usePomodoroStore();
  const timerComplete = () => {
    toggleComponent();
  };
  return (
    <div>
      {currentComponent === "CustomApp" ? (
        <CustomApp onComplete={timerComplete} />
      ) : (
        <FixedApp onComplete={timerComplete} />
      )}
    </div>
  );
};
