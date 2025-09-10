<template>
  <div class="avatar">
    <img src="/images/avatar.webp" alt="avatar" class="avatar__image" />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;

  &__image {
    width: 100%;
    object-fit: cover;
  }
}
</style>
