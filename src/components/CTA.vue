<script lang="ts" setup>
defineProps<{
    title: string;
    description: string;
    btnLabel: string;
    btnLink: string;
}>()
</script>

<template>
    <div class="bg-gris p-6 md:p-10 rounded-3xl">
        <div class="max-w-[600px]">
            <h5 class="text-base md:text-lg font-semibold mb-2">{{ title }}</h5>
            <p>{{ description }}</p>
            <RouterLink :to="btnLink" v-if="btnLink">
                <button type="button"
                    class="bg-noir max-sm:w-full rounded-lg text-blanc text-center p-3 px-10 mt-4 lg:mt-8">
                    {{ btnLabel }}
                </button>
            </RouterLink>
        </div>
    </div>
</template>