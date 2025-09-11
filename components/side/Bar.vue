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

  // &__listButton {
  //   display: grid;
  //   grid-template-columns: 24px 1fr;
  //   justify-items: left;
  //   align-items: center;
  //   gap: 8px;
  //   width: 100%;
  //   max-width: 49px;
  //   background: var(--btn-bg-primary);
  //   border: 2px solid var(--border-color);
  //   border-radius: 30px;
  //   padding: 10px;

  //   &_active {
  //     background: var(--btn-bg-primary-active);
  //   }

  //   &_open {
  //     max-width: 100%;
  //   }
  // }

  // &__listButtonIcon {
  //   width: 24px;
  //   height: 24px;
  //   color: var(--text-color-primary);

  //   &_active {
  //     color: var(--text-color-primary-active);
  //   }
  // }

  // &__listText {
  //   font-family: "Inter-Medium", sans-serif;
  //   font-size: 16px;
  //   color: var(--text-color-primary);
  //   white-space: nowrap;
  //   transform: translateY(10px);
  //   opacity: 0;
  //   transition: 0.2s ease;

  //   &_active {
  //     color: var(--text-color-primary-active);
  //   }

  //   &_visible {
  //     transform: translateY(0);
  //     opacity: 1;
  //   }
  // }
}
</style>
