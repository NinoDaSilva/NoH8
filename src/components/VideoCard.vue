<script setup lang="ts">
import type { VideoResponse } from '@/pocketbase-types';

defineProps<VideoResponse>();
</script>

<template>
    <div>
        <iframe width="560" height="315" :src="link" :title="title" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            class="max-sm:h-auto max-w-full rounded-md">
        </iframe>
        <div class="mt-2 md:max-w-[80%] md:text-base">
            <div><span v-if="author">{{ author }} -</span> {{ title }}</div>
            <div>{{ description }}</div>
        </div>
    </div>
</template>