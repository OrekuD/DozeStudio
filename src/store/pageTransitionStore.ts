import { create } from "zustand";

interface PageTransitionStore {
  isVisible: boolean;
  setVisibility: (state: boolean) => void;
}

const usePageTransitionStore = create<PageTransitionStore>()((set) => ({
  isVisible: false,
  setVisibility: (state) => set({ isVisible: state }),
}));

export default usePageTransitionStore;
