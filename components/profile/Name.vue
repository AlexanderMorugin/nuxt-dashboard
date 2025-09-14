<template>
  <div>
    <div class="name">
      <span>{{ firstName }}</span>
      <span>{{ lastName }}</span>
    </div>
    <div class="email">{{ email }}</div>
  </div>
</template>

<script setup>
const { firstName, lastName, email } = defineProps([
  "firstName",
  "lastName",
  "email",
]);
</script>

<style scoped lang="scss">
.name {
  display: flex;
  gap: 5px;
  font-family: "Inter-Medium", sans-serif;
  line-height: 28px;
  font-size: 20px;
  color: var(--text-color-primary);
}
.email {
  font-family: "Inter-Medium", sans-serif;
  line-height: 18px;
  font-size: 12px;
  color: var(--text-color-secondary);
}
</style>
