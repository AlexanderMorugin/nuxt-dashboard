<template>
  <button>
    <IconExit class="profileExit" />
  </button>
</template>

<script setup></script>

<style scoped lang="scss">
.profileExit {
  width: 26px;
  height: 26px;
  color: var(--text-color-secondary);
  transition: 0.25s ease-in-out;

  &:hover {
    color: var(--text-color-primary);
  }
}
</style>
