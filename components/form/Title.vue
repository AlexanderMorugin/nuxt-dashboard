<template>
  <h2 class="formTitle">{{ title }}</h2>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style>
.formTitle {
  font-family: "Inter-Medium", sans-serif;
  font-size: 32px;
  color: var(--text-color-primary-active);
}
</style>
