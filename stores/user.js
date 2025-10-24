import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const user = ref({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // message: "",
    // access_token: "",
    createdAt: "",
    updatedAt: "",
  });

  const setUser = (data) => {
    user.value.id = data.user.id;
    user.value.firstName = data.user.firstName;
    user.value.lastName = data.user.lastName;
    user.value.email = data.user.email;
    user.value.password = data.user.password;
    // user.value.message = data.message;
    // user.value.access_token = data.token;
    user.value.createdAt = data.user.createdAt;
    user.value.updatedAt = data.user.updatedAt;
  };

  return {
    user,
    setUser,
  };
});
