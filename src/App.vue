<script lang="ts" setup>
import { RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
</script>

<template>
  <MyHeader />

  <Suspense>
    <div class="main__container">
      <RouterView />
    </div>
  </Suspense>

  <MyFooter />
</template>

<style>
.main__container {
  min-height: calc(100vh - 377px - 80px + 40px);

  @media(max-width: 768px) {
    min-height: calc(100vh - 398px - 64px + 60px);
  }
}
</style>