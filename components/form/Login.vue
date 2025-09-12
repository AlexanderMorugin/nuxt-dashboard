<template>
  <form class="form-auth" @submit.prevent="submitLoginForm">
    <FormTitle title="Логин" />

    <!-- Поле ввода почты -->
    <div class="form-field">
      <input
        type="email"
        id="emailField"
        name="emailField"
        placeholder="Почта"
        v-model="v$.emailField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.emailField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.emailField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Поле ввода пароль -->
    <div class="form-field">
      <input
        type="password"
        id="passwordField"
        name="passwordField"
        placeholder="Пароль"
        v-model="v$.passwordField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.passwordField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.passwordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Кнопка Сабмит -->
    <FormSubmit
      :isFromEmpty="isFromEmpty"
      :isValid="isValid.length"
      :isLoading="isLoading"
      text="Войти"
    />
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, minLength, email } from "@vuelidate/validators";

const isLoading = ref(false);

const emailField = ref(null);
const passwordField = ref(null);

const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage("Укажите почту", required),
    email: helpers.withMessage("Введите корректную почту", email),
  },
  passwordField: {
    required: helpers.withMessage("Укажите пароль", required),
    minLength: helpers.withMessage(
      "Пароль должен быть не менее 6 символов",
      minLength(6)
    ),
  },
}));

const v$ = useVuelidate(rules, {
  emailField,
  passwordField,
});

const isFromEmpty = computed(() => !emailField.value || !passwordField.value);

const isValid = computed(() => v$.value.$errors);

const submitLoginForm = () => {
  isLoading.value = true;

  const data = {
    email: emailField.value,
    password: passwordField.value,
  };

  console.log("data - ", data);

  setTimeout(() => {
    isLoading.value = false;

    emailField.value = null;
    passwordField.value = null;
  }, 2000);
};
</script>

<style scoped lang="scss"></style>
