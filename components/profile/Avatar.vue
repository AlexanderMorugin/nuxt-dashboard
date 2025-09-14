<template>
  <div class="avatar">
    <img src="/images/avatar.webp" alt="avatar" class="avatar__image" />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  // border: 1px solid red;

  &__image {
    width: 100%;
    object-fit: cover;
  }
}
</style>
