<template>
  <div class="name">
    <div class="name__items">
      <span>{{ userStore.user.firstName }}</span>
      <span>{{ userStore.user.lastName }}</span>
    </div>
    <div class="name__email">{{ userStore.user.email }}</div>
  </div>
</template>

<script setup>
const userStore = useUserStore();
</script>

<style scoped lang="scss">
.name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__items {
    display: flex;
    gap: 5px;
    font-family: "Inter-Medium", sans-serif;
    line-height: 28px;
    font-size: 20px;
    color: var(--text-color-primary);
  }
  &__email {
    font-family: "Inter-Medium", sans-serif;
    line-height: 18px;
    font-size: 12px;
    color: var(--text-color-secondary);
  }
}
</style>
