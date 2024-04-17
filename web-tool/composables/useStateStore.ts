import { defineStore } from "pinia";
import { skipHydrate } from "pinia";
// 利用vueuse持久化 https://juejin.cn/post/7216174863445737528#heading-3
export const useStateStore = defineStore("nuxtStore", () => {
  const state = useSessionStorage("nuxt-store-test", 0);

  const setState = () => {
    state.value = state.value + 1;
  };

  return {
    state: skipHydrate(state),
    setState,
  };
});
