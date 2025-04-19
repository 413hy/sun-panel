<script setup lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui'
</script>

<template>
  <NLayout>
    <NLayoutContent>
      <router-view />
    </NLayoutContent>
  </NLayout>
</template>

<style scoped>
.n-layout {
  min-height: 100vh;
}
</style>