<template>
  <div class="openButton">
    <button class="openButton__item" @click="$emit('toggleSideBar')">
      <IconCloseSidebar :class="{ openButton__close_active: !isSideBarOpen }" />
    </button>
  </div>
</template>

<script setup>
const { isSideBarOpen } = defineProps(["isSideBarOpen"]);
const emit = defineEmits(["toggleSideBar"]);
</script>

<style scoped lang="scss">
.openButton {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: var(--header-height);
  border: 1px solid red;

  &__item {
    transition: 0.25s ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }

  &__close {
    color: var(--text-color-primary);
    transition: 0.8s ease-in-out;

    &_active {
      transform: rotate(180deg);
    }
  }
}
</style>
