<template>
  <aside class="aside">
    <span>Side Bar</span>
    <ul class="aside__list">
      <li>
        <button class="aside__listButton aside__listButton_active">
          <IconDashboard
            class="aside__listButtonIcon aside__listButtonIcon_active"
          />
          <span class="aside__listText aside__listText_active">Number One</span>
        </button>
      </li>
      <li>
        <button class="aside__listButton">
          <IconDashboard class="aside__listButtonIcon" />
          <span class="aside__listText">Number Two</span>
        </button>
      </li>
      <li>
        <button class="aside__listButton">
          <IconDashboard class="aside__listButtonIcon" />
          <span class="aside__listText">Number Three</span>
        </button>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  max-width: 300px;
  // padding: 24px;

  border: 1px solid red;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__listButton {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 44px;
    background: var(--btn-bg-primary);
    border: 2px solid var(--border-color);
    border-radius: 30px;
    padding: 10px 16px;

    &_active {
      background: var(--btn-bg-primary-active);
    }
  }

  &__listText {
    font-family: "Inter-Medium", sans-serif;
    font-size: 16px;
    color: var(--text-color-primary);

    &_active {
      color: var(--text-color-primary-active);
    }
  }

  &__listButtonIcon {
    width: 24px;
    height: 24px;
    color: var(--text-color-primary);
    transition: all 0.1s ease;

    &_active {
      color: var(--text-color-primary-active);
    }
  }
}
</style>
