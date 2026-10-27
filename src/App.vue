<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  page: Component
}>()
</script>

<template>
  <v-app>
    <v-app-bar :elevation="0" class="app-header">
      <v-app-bar-title class="app-title">Radical Readings</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <component :is="page" />
    </v-main>

    <v-footer class="app-footer d-flex justify-center py-4">
      <span class="footer-text">
        Radical Readings · 2026
        <!-- <a href="https://github.com/radicalreadings/fanon" target="_blank" rel="noopener noreferrer">
          Source on GitHub
        </a> -->
      </span>
    </v-footer>
  </v-app>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.25);
}
.app-title {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgb(var(--v-theme-primary));
}
.app-footer {
  border-top: 1px solid rgba(var(--v-theme-primary), 0.25);
}
.footer-text {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(var(--v-theme-on-background), 0.65);
}
.footer-text a {
  color: inherit;
}
</style>
