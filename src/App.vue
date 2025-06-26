<!-- src/App.vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import Layout        from '@/components/Layout.vue'

// grab the current route so we can inspect meta.noLayout
const route = useRoute()
</script>

<template>
  <!-- if this route does NOT want a layout, render the child directly: -->
  <router-view v-if="route.meta.noLayout" />

  <!-- otherwise, wrap it in your layout component: -->
  <Layout v-else>
    <router-view />
  </Layout>
</template>