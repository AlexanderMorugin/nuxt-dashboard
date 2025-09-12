<template>
  <div class="page-screen page-login">
    <div :class="['login', { login_active: isRegister || isLogin }]">
      <div class="login__left">
        <h1 class="login__title">Добро пожаловать!</h1>
        <p class="login__text">
          Чтобы войти в панель управления, войдите в свой профиль или
          зарегистрируйтесь.
        </p>

        <!-- Кнопки логина и регистрации -->
        <div v-if="!isRegister && !isLogin" class="login__buttons">
          <button class="login__button" @click="openLogin">Войти</button>
          <button class="login__button" @click="openRegister">
            Регистрация
          </button>
        </div>
        <NuxtLink to="/">Main Page</NuxtLink>
      </div>
      <div class="login__right">
        <button class="login__backButton" @click="goBack">
          <IconArrowBack class="login__backIcon" />
        </button>
        <FormLogin v-if="isLogin" />
        <FormRegister v-if="isRegister" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isLogin = ref(false);
const isRegister = ref(false);

const openLogin = () => {
  (isLogin.value = true), (isRegister.value = false);
};
const openRegister = () => {
  (isRegister.value = true), (isLogin.value = false);
};
const goBack = () => {
  (isRegister.value = false), (isLogin.value = false);
};
</script>

<style scoped lang="scss">
.page-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.login {
  display: grid;
  grid-template-columns: 100% 0%;
  width: 100%;
  height: 80vh;
  border: 2px solid var(--btn-color-white);
  border-radius: 30px;
  overflow: hidden;
  transition: 0.5s ease;

  &_active {
    grid-template-columns: 60% 40%;
  }

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("~/assets/images/gradient-bg.svg.png");
    background-repeat: no-repeat;
    padding: 40px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    background: var(--bg-inverse);
    padding: 40px;
  }

  &__title {
    font-family: "Inter-Medium", sans-serif;
    font-size: 48px;
    color: var(--text-color-primary);
    text-align: center;
  }

  &__text {
    display: block;
    width: 100%;
    height: 100px;
    font-family: "Inter-Regular", sans-serif;
    font-size: 18px;
    color: var(--text-color-primary);
    text-align: center;
    padding-top: 40px;
  }

  &__buttons {
    display: flex;
    gap: 40px;
    padding-top: 40px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    font-family: "Inter-Regular", sans-serif;
    line-height: 1;
    font-size: 18px;
    color: var(--btn-color-white);
    border-radius: 7px;
    border: 2px solid var(--blue-primary);
    background: var(--purple-primary);
    transition: 0.25s ease all;

    &:hover {
      background: var(--purple-secondary);
    }
  }

  &__backButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid var(--blue-primary);
  }

  &__backIcon {
    color: var(--btn-arrow);
    transition: 0.25s ease all;

    &:hover {
      color: var(--text-color-secondary);
    }
  }
}
</style>
