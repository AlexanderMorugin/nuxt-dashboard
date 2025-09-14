<template>
  <section
    :class="['sideBarMobile', { sideBarMobile_active: isMenuMobileOpen }]"
  >
    <!-- Кнопки сайдбара -->
    <ul class="aside__list">
      <li>
        <SideButton
          :isSideBarOpen="isSideBarOpen"
          :isActive="true"
          title="Number One"
        />
      </li>
      <li>
        <SideButton :isSideBarOpen="isSideBarOpen" title="Number Two" />
      </li>
      <li>
        <SideButton :isSideBarOpen="isSideBarOpen" title="Number Three" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const { isMenuMobileOpen } = defineProps(["isMenuMobileOpen"]);
</script>

<style scoped lang="scss">
.sideBarMobile {
  width: 100%;
  height: 0;
  transition: 0.2s ease;
  overflow: hidden;

  border: 1px solid red;

  &_active {
    height: fit-content;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
