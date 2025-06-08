import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("preffered-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("preffered-theme", theme);
    set({ theme });
  },
}));
