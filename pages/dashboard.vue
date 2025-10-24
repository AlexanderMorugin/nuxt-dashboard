<template>
  <div class="page-screen dashboard">
    <SideBar v-if="!isScreenLarge" />
    <div class="content">
      <Header @openMenuMobile="openMenuMobile" />
      <SideBarMobile
        v-if="isScreenLarge"
        :isMenuMobileOpen="isMenuMobileOpen"
      />
      <main class="main">
        <div v-if="isMainContent">
          <h1>Users</h1>
          <Users />
          <NuxtLink to="/">Auth Page</NuxtLink>
        </div>

        <ContentProfile v-if="isProfileContent" />

        <!-- {{ user }} -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { useResizeLarge } from "~/composables/useResizeLarge";
const { isScreenLarge } = useResizeLarge();
// const { useAuthUser, initAuth } = useAuth();
// const user = useAuthUser();

const dashboardStore = useDashboardStore();

const isMainContent = computed(() => dashboardStore.dashboard.isMain);
const isProfileContent = computed(() => dashboardStore.dashboard.isProfile);

const isMenuMobileOpen = ref(false);

const openMenuMobile = () => (isMenuMobileOpen.value = !isMenuMobileOpen.value);

// onBeforeMount(() => {
//   initAuth();
// });
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;

  @media (max-width: 1023px) {
    padding-left: 0;
    padding-right: 0;
  }
}
.content {
  width: 100%;
}
.main {
  min-height: 800px;
  border: 2px solid var(--border-color-inverse);
  border-radius: 30px;
  background-image: url("~/assets/images/gradient-bg.svg.png");
  background-repeat: no-repeat;
  padding: 40px 20px;

  @media (max-width: 1023px) {
    border: none;
    border-radius: 0;
    padding: 20px 10px;
  }
}
</style>
