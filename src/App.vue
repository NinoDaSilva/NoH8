<script lang="ts" setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
</script>

<template>
  <MyHeader />

  <Suspense>
    <RouterView />
  </Suspense>

  <MyFooter />
</template>