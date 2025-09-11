<template>
  <div class="page-screen">
    <SideBar />
    <div class="content">
      <Header />
      <main class="main">MAIN</main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-screen {
  display: flex;
  width: 100%;
  max-width: var(--screen-xl);
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  border: 1px solid red;
}
.content {
  width: 100%;
}
.main {
  border: 1px solid red;
}
</style>
