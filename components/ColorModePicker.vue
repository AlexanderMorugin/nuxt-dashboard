<template>
  <ul class="colorModePicker">
    <li
      v-for="color of ['light', 'dark']"
      :key="color"
      :class="{
        preferred: !$colorMode.unknown && color === $colorMode.preference,
        selected: !$colorMode.unknown && color === $colorMode.value,
      }"
    >
      <IconDark
        v-if="color === 'dark'"
        @click="$colorMode.preference = color"
      />
      <IconLight
        v-if="color === 'light'"
        @click="$colorMode.preference = color"
      />
    </li>
  </ul>
</template>

<style scoped>
.colorModePicker {
  display: flex;
  gap: 5px;
  width: fit-content;
  line-height: 1;
}
.feather {
  width: 36px;
  height: 36px;
  padding: 7px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-color-primary);
  cursor: pointer;
  transition: all 0.1s ease;
}
.preferred .feather {
  background: var(--bg-secondary);
  border: var(--border-color);
}
.selected .feather {
  color: var(--text-color-primary);
}
</style>
