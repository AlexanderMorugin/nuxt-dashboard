<template>
  <button class="exit">{{ title }}</button>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped lang="scss">
.exit {
  display: flex;
  align-items: center;
  border-radius: 30px;
  border: 2px solid var(--text-color-secondary);
  font-family: "Inter-Medium", sans-serif;
  font-size: 14px;
  color: var(--text-color-secondary);
  padding: 10px 16px;
  transition: 0.25s ease-in-out;

  &:hover {
    border: 2px solid var(--text-color-primary);
    color: var(--text-color-primary);
  }
}
</style>
