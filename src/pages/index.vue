<script lang="ts" setup>
import MyPopup from '@/components/MyPopup.vue';
import MyHero from '@/components/MyHero.vue';
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
        <MyHero titleOne="Le cyberharcèlement :" titleTwo="Une réalité qui dépasse l'écran"
            imgUrl="/img/HomebannerIllustration.png"
            description="Apprenez à reconnaître, comprendre et combattre le cyberharcèlement. Ensemble, nous pouvons faire la différence."
            btnLabel="Besoin d'aide ?" btnLink="/help" />
    </main>
</template>