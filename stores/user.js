import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const user = ref({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    createdAt: "",
    updatedAt: "",
  });

  const setUser = (data) => {
    user.value.id = data.id;
    user.value.firstName = data.firstName;
    user.value.lastName = data.lastName;
    user.value.email = data.email;
    user.value.password = data.password;
    user.value.createdAt = data.createdAt;
    user.value.updatedAt = data.updatedAt;
  };

  return {
    user,
    setUser,
  };
});
