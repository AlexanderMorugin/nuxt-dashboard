<template>
  <header class="header">
    <ColorModePicker />
    <ProfileButton v-if="isScreenLarge" title="Меню" />
    <ProfileBlock :firstName="firstName" :lastName="lastName" :email="email" />
  </header>
</template>

<script setup>
import { useResizeLarge } from "~/composables/useResizeLarge";
const { isScreenLarge } = useResizeLarge();

const { firstName, lastName, email } = defineProps([
  "firstName",
  "lastName",
  "email",
]);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 76px;
  height: var(--header-height);
  // border: 1px solid red;

  @media (max-width: 1023px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  // &__sideOpenButton {
  //   width: 36px;
  //   height: 36px;
  // }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 76px;
  }
}
</style>
