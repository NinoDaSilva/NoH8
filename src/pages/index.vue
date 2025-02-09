<script lang="ts" setup>
import { ref } from 'vue';
import MyPopup from '@/components/MyPopup.vue';
import { RouterLink } from 'vue-router';

const skipButton = ref(false);

setTimeout(() => {
    skipButton.value = true;
}, 2000); // Afficher
</script>

<template>
    <MyPopup />
    <div v-show="skipButton"
        class="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out"
        :class="{ 'opacity-100': skipButton }">
        <RouterLink to="/home" class="text-[14px] text-blanc rounded-md bg-noir px-3 sm:px-4 p-2 shadow-sm">
            Passer
        </RouterLink>
    </div>
</template>