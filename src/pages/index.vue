<script lang="ts" setup>
import MyPopup from '@/components/MyPopup.vue';
import { ref } from 'vue';

const isHomeVisible = ref(true);

setTimeout(() => {
    isHomeVisible.value = true;
}, 23000);
</script>

<template>
    <MyPopup v-if="!isHomeVisible" class="opacity-100 transition-opacity duration-500"
        :class="{ 'opacity-0': isHomeVisible }" />
    <main v-if="isHomeVisible" class="p-[5%] pt-20 sm:pt-24 opacity-0 transition-opacity duration-500"
        :class="{ 'opacity-100': isHomeVisible }">
    </main>
</template>