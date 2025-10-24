export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const login = async (loginData) => {
    try {
      const data = await $fetch("/api/auth/login", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        //   // Authorization: "Bearer " + process.env.AUTH_SECRET,
        // },
        body: JSON.stringify(loginData),
      });
      setToken(data.access_token);
      setUser(data.user);
      resolve(true);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/refresh");
        setToken(data.access_token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await useFetch("/api/auth/user");

        // console.log(data);
        setUser(data.user);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log("Hello");
        await refreshToken();
        await getUser();

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    login,
    useAuthToken,
    useAuthUser,
    getUser,
    initAuth,
  };
};
