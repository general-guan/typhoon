<template>
  <div
    v-html="use_store.articleContent"
    class="hljs"
    style="height: 100%; overflow: auto; padding: 20px 30px; flex: 1"
  ></div>
</template>

<script setup lang="ts">
import { useStore } from '../../store/index'

const use_store = useStore()
</script>
