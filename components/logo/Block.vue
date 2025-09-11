<template>
  <div class="logoBlock">
    <!-- <div>Logo</div> -->
    <button @click="$emit('toggleSideBar')">
      <IconCloseSidebar :class="{ logoBlock__close_active: !isSideBarOpen }" />
    </button>
  </div>
</template>

<script setup>
const { isSideBarOpen } = defineProps(["isSideBarOpen"]);
const emit = defineEmits(["toggleSideBar"]);
</script>

<style scoped lang="scss">
.logoBlock {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: var(--header-height);
  border: 1px solid red;

  &__close {
    color: var(--text-color-primary);
    transition: 0.8s ease-in-out;

    &_active {
      transform: rotate(180deg);
    }
  }
}
</style>
