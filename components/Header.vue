<template>
  <header class="header">
    <LogoBlock />

    <div class="header__content">
      <ColorModePicker />
      <ProfileBlock />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 96px;
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
