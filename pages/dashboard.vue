<template>
  <div class="page-screen home">
    <SideBar />
    <div class="content">
      <Header />
      <main class="main">
        <h1>MAIN CONTENT</h1>
        <NuxtLink to="/">Auth Page</NuxtLink>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  height: 100vh;
}
.content {
  width: 100%;
}
.main {
  border: 1px solid red;
}
</style>
