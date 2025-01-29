<script setup lang="ts">
import type { ContactResponse } from '@/pocketbase-types';
defineProps<ContactResponse>();
</script>

<template>
    <div>
        <a :href="link" target="_blank">
            <div class="p-4 bg-blanc min-h-full rounded-lg shadow contact-card">
                <h3 class="text-base sm:text font-bold">{{ name }}</h3>
                <p class="mt-2">{{ description }}</p>
            </div>
        </a>
    </div>
</template>