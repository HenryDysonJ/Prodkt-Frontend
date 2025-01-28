/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

interface pwaInterface {
  isPwa: boolean;
  deferredPrompt: any | null;
  showedFirstTime: boolean;
  setDeferredPrompt: (prompt: any) => void;
  setPwa: (status: boolean) => void;
}

export const usePWAStore = create<pwaInterface>((set) => ({
  isPwa: false,
  deferredPrompt: null,
  showedFirstTime: false,
  setDeferredPrompt: (prompt: any) => {
    set({
      deferredPrompt: prompt,
    });
  },
  setPwa: (status: boolean) => {
    set({ isPwa: status });
  },
}));
