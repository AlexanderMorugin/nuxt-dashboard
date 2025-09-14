<template>
  <div class="page-screen dashboard">
    <SideBar v-if="!isScreenLarge" />
    <div class="content">
      <Header
        :firstName="firstName"
        :lastName="lastName"
        :email="email"
        @openMenuMobile="openMenuMobile"
      />
      <SideBarMobile :isMenuMobileOpen="isMenuMobileOpen" />
      <main class="main">
        <h1>MAIN CONTENT</h1>
        <NuxtLink to="/">Auth Page</NuxtLink>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useResizeLarge } from "~/composables/useResizeLarge";
const { isScreenLarge } = useResizeLarge();

const firstName = ref("Александр");
const lastName = ref("Моругин");
const email = ref("nobilis@bk.ru");
const isMenuMobileOpen = ref(false);

const openMenuMobile = () => (isMenuMobileOpen.value = !isMenuMobileOpen.value);
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
  padding: 40px;

  @media (max-width: 1023px) {
    border: none;
    border-radius: 0;
  }
}
</style>
