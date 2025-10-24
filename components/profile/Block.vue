<template>
  <div class="profileBlock">
    <!-- Кнопки "Выйти из профиля" для десктопной и мобильной версии -->
    <ProfileButton v-if="!isScreenLarge" title="Выйти" />
    <ProfileExitButton v-if="isScreenLarge" />

    <!-- Кнопка редактирования профиля -->
    <ProfileSettingsButton
      v-if="dashboardStore.dashboard.isMain"
      @showProfile="showProfile"
    />

    <!-- Аватарка и имя пользователя -->
    <div class="profileBlock__name">
      <ProfileAvatar />
      <ProfileName v-if="!isScreenMedium" />
    </div>
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
  }
}
</style>
