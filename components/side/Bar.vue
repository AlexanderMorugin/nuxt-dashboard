<template>
  <aside :class="['aside', { aside_active: isSideBarOpen }]">
    <!-- Кнопка свораяивающая сайдбар -->
    <SideOpenButton
      :isSideBarOpen="isSideBarOpen"
      @toggleSideBar="toggleSideBar"
    />

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
  </aside>
</template>

<script setup>
const isSideBarOpen = ref(false);

const toggleSideBar = () => (isSideBarOpen.value = !isSideBarOpen.value);
</script>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  max-width: 62px;
  transition: 0.2s ease;
  border: 1px solid red;

  &_active {
    width: 100%;
    max-width: 300px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
