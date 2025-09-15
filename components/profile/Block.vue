<template>
  <div class="profileBlock">
    <ProfileButton v-if="!isScreenLarge" title="Выйти" />
    <ProfileExitButton v-if="isScreenLarge" />
    <button @click="showProfile" class="profileBlock__name">
      <ProfileAvatar />
      <ProfileName v-if="!isScreenMedium" />
    </button>
  </div>
</template>

<script setup>
import { useResizeMedium } from "~/composables/useResizeMedium";
import { useResizeLarge } from "~/composables/useResizeLarge";

const { isScreenMedium } = useResizeMedium();
const { isScreenLarge } = useResizeLarge();

const dashboardStore = useDashboardStore();

const showProfile = () => {
  dashboardStore.showProfile();
};
</script>

<style scoped lang="scss">
.profileBlock {
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;

  &__name {
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 2px solid var(--bg);
    padding-top: 10px;
    padding-bottom: 10px;
    transition: 0.25s ease;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid var(--border-color-inverse);
    }
  }
}
</style>
