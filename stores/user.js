import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    id: null,
    firstName: "Александр",
    lastName: "Моругин",
    email: "nobilis@bk.ru",
  });

  return { user };
});
