import CustomApp from "./components/customApp/CustomApp";
import FixedApp from "./components/fixedApp/FixedApp";
import { usePomodoroStore } from "./state/UsePomodoroStore";
export const Layout = () => {
  const { currentComponent, toggleComponent, toggleBreakType } =
    usePomodoroStore();
  const timerComplete = () => {
    if (currentComponent === "CustomApp") {
      toggleComponent();
    } else {
      toggleComponent();
      toggleBreakType();
    }
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
