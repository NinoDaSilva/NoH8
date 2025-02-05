<script lang="ts" setup>
defineProps<{
    stats: string;
    description: string;
    source?: string;
    link?: string
}>()
</script>

<template>
    <div class="p-5 max-sm:border-r max-sm:rounded-t-xl border-l border-t rounded-tl-xl leading-tight max-w-[450px]">
        <div class="text-[30px] md:text-2xl mb-2 font-semibold">{{ stats }}</div>
        <p>{{ description }}</p>
        <div class="text-[14px] mt-2 font-light"><a :href="link">(Source : {{ source }})</a></div>
    </div>
</template>