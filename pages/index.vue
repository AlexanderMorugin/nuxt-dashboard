<template>
  <div class="page-screen">
    <Header />
    <div class="content">
      <SideBar />
      <main class="main">MAIN</main>

      
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-screen {
  width: 100%;
  max-width: var(--screen-xl);
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;

  border: 1px solid red;
}
.content {
  display: flex;
}
.main {
  width: 100%;
  border: 1px solid red;
}

/* .title {
  font-family: "Inter-Regular", sans-serif;
  font-size: 24px;
} */
</style>
