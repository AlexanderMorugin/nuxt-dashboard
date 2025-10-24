<template>
  <button @click="$emit('showProfile')">
    <IconSettings class="settings" />
  </button>
</template>

<script setup>
const emit = defineEmits(["showProfile"]);
</script>

<style scoped lang="scss">
.settings {
  width: 24px;
  height: 24px;
  color: var(--text-color-secondary);
  transition: color 0.25s ease;

  &:hover {
    color: var(--text-color-primary);
    animation: spin 2.5s ease;
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
