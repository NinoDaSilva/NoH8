<script lang="ts" setup>
defineProps<{
    imgUrl: string,
    titleOne: string,
    titleTwo: string,
    description: string,
    btnLabel?: string,
    btnLink?: string,
}>()
</script>

<template>
    <div class="grid sm:grid-cols-[2fr_1fr] md:grid-cols-2">
        <div class="sm:max-w-[700px] mx-auto md:mt-5">
            <h1 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-8 sm:leading-10 lg:leading-tight">
                <span class="block">
                    <nobr>{{ titleOne }}</nobr>
                </span>
                <span class="block">{{ titleTwo }}</span>
            </h1>
            <img :src="imgUrl" alt="banner illustration" class="mt-1 sm:hidden max-h-[300px] mx-auto">
            <p class="sm:mt-4 lg:mt-8 lg:text-base">{{ description }}</p>
            <RouterLink :to="btnLink" v-if="btnLink">
                <button type="button"
                    class="bg-noir max-sm:w-full rounded-lg text-blanc text-center p-3 px-10 mt-4 lg:mt-8">
                    {{ btnLabel }}
                </button>
            </RouterLink>
        </div>
        <img :src="imgUrl" alt="banner illustration"
            class="max-sm:hidden max-lg:max-h-[300px] max-h-[500px] max-w-full my-auto mx-auto -z-10">
    </div>
</template>