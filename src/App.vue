<script lang="ts" setup>
import { RouterView, useRoute } from 'vue-router'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';

const route = useRoute();
</script>

<template>
  <MyHeader v-if="!['/'].includes(route.path)" />

  <Suspense>
    <div class="main__container">
      <RouterView />
    </div>
  </Suspense>

  <MyFooter v-if="!['/'].includes(route.path)" />
</template>

<style>
.main__container {
  min-height: calc(100vh - 377px - 80px + 40px);

  @media(max-width: 768px) {
    min-height: calc(100vh - 398px - 64px + 60px);
  }
}
</style>