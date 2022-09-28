<template>
  <div style="display: flex; height: 100vh">
    <Menu></Menu>
    <SplitLine></SplitLine>
    <Content></Content>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/menu/index.vue'
import SplitLine from './components/split-line/index.vue'
import Content from './components/content/index.vue'
</script>
