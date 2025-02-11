<script setup lang="ts">
import { ref, computed } from 'vue';
import type { VideoRecord } from '@/pocketbase-types';

const props = defineProps<VideoRecord>();

// Ajouter des paramètres pour améliorer le chargement et éviter les recommandations YouTube
const videoSrc = computed(() => `${props.link}?rel=0&showinfo=0&autoplay=0`);
</script>

<template>
    <div>
        <div class="relative w-full aspect-video bg-gris overflow-hidden">
            <iframe width="560" height="315" :src="videoSrc" :title="title" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                class="absolute inset-0 w-full h-full max-w-full rounded-md">
            </iframe>
        </div>
        <div class="mt-2 md:max-w-[80%] md:text-base">
            <div><span v-if="author">{{ author }} -</span> {{ title }}</div>
            <div>{{ description }}</div>
        </div>
    </div>
</template>