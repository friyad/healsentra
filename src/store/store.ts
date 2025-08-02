import { create } from "zustand";

interface GlobalState {
  isSettingsOpen: boolean;
  setSettingsOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;
}

const useGlobalStore = create<GlobalState>()((set) => ({
  isSettingsOpen: false,
  isSearchOpen: false,

  setSettingsOpen: (isOpen: boolean) => set({ isSettingsOpen: isOpen }),
  setSearchOpen: (isOpen: boolean) => set({ isSearchOpen: isOpen }),
}));

export default useGlobalStore;
