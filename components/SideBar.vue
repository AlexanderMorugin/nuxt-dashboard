<template>
  <aside :class="['aside', { aside_active: isSideBarOpen }]">
    <LogoBlock :isSideBarOpen="isSideBarOpen" @toggleSideBar="toggleSideBar" />

    <ul class="aside__list">
      <li>
        <button
          :class="[
            'aside__listButton aside__listButton_active',
            { aside__listButton_open: isSideBarOpen },
          ]"
        >
          <IconDashboard
            class="aside__listButtonIcon aside__listButtonIcon_active"
          />
          <span
            :class="[
              'aside__listText aside__listText_active',
              { aside__listText_visible: isSideBarOpen },
            ]"
            >Number One</span
          >
        </button>
      </li>
      <li>
        <button
          :class="[
            'aside__listButton',
            { aside__listButton_open: isSideBarOpen },
          ]"
        >
          <IconDashboard class="aside__listButtonIcon" />
          <span
            :class="[
              'aside__listText',
              { aside__listText_visible: isSideBarOpen },
            ]"
            >Number Two</span
          >
        </button>
      </li>
      <li>
        <button
          :class="[
            'aside__listButton',
            { aside__listButton_open: isSideBarOpen },
          ]"
        >
          <IconDashboard class="aside__listButtonIcon" />
          <span
            :class="[
              'aside__listText',
              { aside__listText_visible: isSideBarOpen },
            ]"
            >Number Three</span
          >
        </button>
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
  transition: 0.5s ease-in-out;
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

  &__listButton {
    display: grid;
    grid-template-columns: 24px 1fr;
    justify-items: left;
    align-items: center;
    gap: 8px;
    width: 100%;
    max-width: 60px;
    // height: 44px;
    background: var(--btn-bg-primary);
    border: 2px solid var(--border-color);
    border-radius: 30px;
    padding: 10px 16px;

    &_active {
      background: var(--btn-bg-primary-active);
    }

    &_open {
      max-width: 100%;
    }
  }

  &__listButtonIcon {
    width: 24px;
    height: 24px;
    color: var(--text-color-primary);

    &_active {
      color: var(--text-color-primary-active);
    }
  }

  &__listText {
    font-family: "Inter-Medium", sans-serif;
    font-size: 16px;
    color: var(--text-color-primary);
    white-space: nowrap;
    transform: translateY(100%);
    opacity: 0;
    transition: 0.5s ease-in-out;

    &_active {
      color: var(--text-color-primary-active);
    }

    &_visible {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
