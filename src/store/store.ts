import { create } from "zustand";

interface GlobalState {
  isSettingsOpen: boolean;
  setSettingsOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;
  isHelpOpen: boolean;
  setHelpOpen: (isOpen: boolean) => void;
}

const useGlobalStore = create<GlobalState>()((set) => ({
  isSettingsOpen: false,
  isSearchOpen: false,
  isHelpOpen: false,

  setSettingsOpen: (isOpen: boolean) => set({ isSettingsOpen: isOpen }),
  setSearchOpen: (isOpen: boolean) => set({ isSearchOpen: isOpen }),
  setHelpOpen: (isOpen: boolean) => set({ isHelpOpen: isOpen }),
}));

export default useGlobalStore;
