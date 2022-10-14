import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTab = defineStore("tabStore", () => {
  const currentTab = ref("Draft");
  const setCurrentTab = (tab) => {
    currentTab.value = tab;
  };

  const tabSwitchHandler = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, tabSwitchHandler, setCurrentTab };
});
