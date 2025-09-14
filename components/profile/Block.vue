<template>
  <div class="avatarBlock">
    <ProfileButton v-if="!isScreenLarge" title="Выйти" />
    <ProfileExitButton v-if="isScreenLarge" />
    <ProfileAvatar />
    <ProfileName
      v-if="!isScreenMedium"
      :firstName="firstName"
      :lastName="lastName"
      :email="email"
    />
  </div>
</template>

<script setup>
import { useResizeMedium } from "~/composables/useResizeMedium";
import { useResizeLarge } from "~/composables/useResizeLarge";

const { isScreenMedium } = useResizeMedium();
const { isScreenLarge } = useResizeLarge();

const { firstName, lastName, email } = defineProps([
  "firstName",
  "lastName",
  "email",
]);
</script>

<style scoped lang="scss">
.avatarBlock {
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;

  // &__exit {
  //   color: var(--text-color-secondary);
  //   transition: 0.8s ease-in-out;

  //   &:hover {
  //     color: var(--text-color-primary);
  //   }
  // }
}
</style>
