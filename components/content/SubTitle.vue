<template>
  <h1 class="contentSubTitle">{{ title }}</h1>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style>
.contentSubTitle {
  font-family: "Inter-Medium", sans-serif;
  font-size: 24px;
  color: var(--text-color-primary);
}
</style>
