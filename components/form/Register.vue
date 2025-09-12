<template>
  <form class="registerForm" @submit.prevent="submitRegisterForm">
    <!-- Поле ввода имени -->
    <div class="form-field">
      <input
        type="text"
        id="firstNameField"
        name="firstNameField"
        placeholder="Имя"
        v-model="v$.firstNameField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.firstNameField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.firstNameField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Поле ввода фамилии -->
    <div class="form-field">
      <input
        type="text"
        id="lastNameField"
        name="lastNameField"
        placeholder="Фамилия"
        v-model="v$.lastNameField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.lastNameField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.lastNameField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

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

    <!-- Поле ввода пароль еще раз -->
    <div class="form-field">
      <input
        type="password"
        id="confirmPasswordField"
        name="confirmPasswordField"
        placeholder="Повторите пароль"
        v-model="v$.confirmPasswordField.$model"
        :class="[
          'form-input',
          { 'form-input-warning': v$.confirmPasswordField.$errors.length },
        ]"
      />
      <span
        v-for="item in v$.confirmPasswordField.$errors"
        :key="item.$uid"
        class="form-input-error"
        >{{ item.$message }}</span
      >
    </div>

    <!-- Заглушка показывается вместо кнопки Сабмита, если валидация не прошла -->
    <div v-if="isFromEmpty || isValid.length" class="formEmptyButton">
      <span class="formEmptyButtonText">Заполните все поля</span>
    </div>

    <!-- Кнопка Сабмит -->
    <button v-else class="form-button form-button-active">
      <!-- Лоадер, крутится пока данные отправляются на сервер -->
      <LoaderButton v-if="isLoading" />
      <span v-else>Регистрация</span>
    </button>
  </form>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  required,
  minLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";

const { isRegister } = defineProps(["isRegister"]);

const emit = defineEmits(["closeCooperationModal"]);

const isLoading = ref(false);
const firstNameField = ref(null);
const lastNameField = ref(null);
const emailField = ref(null);
const passwordField = ref(null);
const confirmPasswordField = ref(null);

const rules = computed(() => ({
  firstNameField: {
    required: helpers.withMessage("Укажите имя", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
  lastNameField: {
    required: helpers.withMessage("Укажите фамилию", required),
    minLength: helpers.withMessage("Не менее 2 символов", minLength(2)),
  },
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
  confirmPasswordField: {
    required: helpers.withMessage("Подтвердите пароль", required),
    sameAsPassword: helpers.withMessage(
      "Пароли не совпадают",
      sameAs(passwordField.value)
    ),
  },
}));

const v$ = useVuelidate(rules, {
  firstNameField,
  lastNameField,
  emailField,
  passwordField,
  confirmPasswordField,
});

const isFromEmpty = computed(
  () =>
    !firstNameField.value ||
    !lastNameField.value ||
    !emailField.value ||
    !passwordField.value ||
    !confirmPasswordField.value
  //  === passwordField.value
);

const isValid = computed(() => v$.value.$errors);

const submitRegisterForm = () => {
  isLoading.value = true;

  const data = {
    firstName: firstNameField.value,
    lastName: lastNameField.value,
    email: emailField.value,
    password: passwordField.value,
  };

  console.log("data - ", data);

  setTimeout(() => {
    isLoading.value = false;
    emit("closeCooperationModal");
  }, 2000);
};
</script>

<style scoped lang="scss">
.registerForm {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.formEmptyButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 12px;
  border: 2px solid var(--blue-primary);
  background: var(--text-color-secondary);
  // font-family: "Inter-Medium", sans-serif;
  // font-size: 16px;
  // letter-spacing: 1px;
  color: var(--btn-color-white);
  text-transform: uppercase;
  cursor: auto;
  margin-top: 20px;
}
.formEmptyButtonText {
  font-family: "Inter-Medium", sans-serif;
  font-size: 16px;
  color: var(--text-color-primary);
  white-space: nowrap;
  // transform: translateY(100%);
  // opacity: 0;
  // // transition-delay: 500ms;
  // transition: 1.5s ease;

  animation: slide-in 1.5s ease;
}
// .formEmptyButtonText_visible {
//   transform: translateY(0);
//   opacity: 1;
// }

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

/* @media (max-width: 767px) {
  .request-form {
    gap: 20px;
    padding-top: 26px;
  }
} */
</style>
