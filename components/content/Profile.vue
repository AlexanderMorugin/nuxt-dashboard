<template>
  <div class="contentProfile">
    <ContentTitle title="Ваш профиль" />
    <div class="contentProfile__forms">
      <ProfileEdit />
      <ProfilePassword />
      <ProfileDelete />
    </div>
  </div>
</template>

<script setup>
// const dashboardStore = useDashboardStore();

// const closeProfile = () => {
//   dashboardStore.closeProfile();
// };
</script>

<style scoped lang="scss">
.contentProfile {
  display: flex;
  flex-direction: column;
  gap: 40px;
  // border: 1px solid red;

  &__forms {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
