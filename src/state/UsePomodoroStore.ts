import { create } from "zustand";

type PomodoroState = {
  currentComponent: "CustomApp" | "FixedApp";
  toggleComponent: () => void;
};

export const usePomodoroStore = create<PomodoroState>((set) => ({
  currentComponent: "CustomApp",
  toggleComponent: () => {
    set((state) => ({
      currentComponent:
        state.currentComponent === "CustomApp" ? "FixedApp" : "CustomApp",
    }));
  },
}));
