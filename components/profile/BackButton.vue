<template>
  <button class="backButton" @click="$emit('goBack')">
    <IconArrowBack class="backButton__icon" />
  </button>
</template>

<script setup>
const emit = defineEmits(["goBack"]);
</script>

<style scoped lang="scss">
.backButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--blue-primary);

  &__icon {
    color: var(--btn-arrow);
    transition: 0.25s ease all;

    &:hover {
      color: var(--text-color-secondary);
    }
  }
}
</style>
