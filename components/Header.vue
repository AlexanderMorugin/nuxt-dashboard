<template>
  <header class="header">
    <ColorModePicker />
    <ProfileBlock />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 76px;
  height: var(--header-height);
  border: 1px solid red;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 76px;
  }
}
</style>
