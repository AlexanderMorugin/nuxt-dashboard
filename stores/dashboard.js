import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
  const dashboard = ref({
    isMain: true,
    isProfile: false,
  });

  const showProfile = () => {
    dashboard.value.isMain = false;
    dashboard.value.isProfile = true;
  };

  const closeProfile = () => {
    // dashboard.value.isMain = true;
    // dashboard.value.isProfile = false;
  };

  return { dashboard, showProfile, closeProfile };
});
