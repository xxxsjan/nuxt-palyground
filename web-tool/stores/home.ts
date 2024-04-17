import { defineStore } from "pinia";

export const useHomeStore = defineStore(
  "home",
  {
    state: () => ({ showWelcome: true }),
    getters: {
      // double: (state) => state.count * 2,
    },
    actions: {
      setShowWelcome(value: boolean) {
        this.showWelcome = value;
      },
    },
    persist: true,
    // persist: {
    // storage: window.sessionStorage
    // }
  }
  // {
  //   persist: true,
  // }
);
