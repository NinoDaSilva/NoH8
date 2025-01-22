<script lang="ts" setup>
import MyPopup from '@/components/MyPopup.vue';
import { ref } from 'vue';

const isHomeVisible = ref(true);

// setTimeout(() => {
//     isHomeVisible.value = true;
// }, 23000);
</script>

<template>
    <!-- <MyPopup v-if="!isHomeVisible" class="opacity-100 transition-opacity duration-500"
        :class="{ 'opacity-0': isHomeVisible }" /> -->
    <main v-if="isHomeVisible" class="p-[5%] pt-20 sm:pt-24 opacity-0 transition-opacity duration-500"
        :class="{ 'opacity-100': isHomeVisible }">
        <video autoplay muted loop class="absolute inset-0 h-[45vh] md:h-[75vh] w-full object-cover blur-sm">
            <source src="/videos/baner1.mp4" type="video/mp4">
        </video>
    </main>
</template>