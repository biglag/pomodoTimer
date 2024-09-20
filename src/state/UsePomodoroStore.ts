import { create } from "zustand";

type PomodoroState = {
  currentComponent: "CustomApp" | "FixedApp";
  currentBreakType: "short" | "long";
  toggleBreakType: () => void;
  toggleComponent: () => void;
};

export const usePomodoroStore = create<PomodoroState>((set) => ({
  currentComponent: "CustomApp",
  currentBreakType: "short",
  toggleBreakType() {
    set((state) => ({
      currentBreakType: state.currentBreakType === "short" ? "long" : "short",
    }));
  },

  toggleComponent: () => {
    set((state) => ({
      currentComponent:
        state.currentComponent === "CustomApp" ? "FixedApp" : "CustomApp",
    }));
  },
}));
