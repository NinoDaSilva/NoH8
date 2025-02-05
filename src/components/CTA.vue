<script lang="ts" setup>
defineProps<{
    title: string;
    description: string;
    btnLabel: string;
    btnLink: string;
}>()
</script>

<template>
    <div class="relative bg-gris p-6 md:p-12 md:my-10 md:min-h-[320px] rounded-3xl max-w-[1250px] mx-auto">
        <div class="w-full sm:w-1/2 max-w-[600px]">
            <h5 class="text-base md:text-lg font-semibold mb-2">{{ title }}</h5>
            <p>{{ description }}</p>
            <RouterLink :to="btnLink" v-if="btnLink">
                <button type="button"
                    class="bg-noir max-sm:w-full rounded-lg text-blanc text-center p-3 px-10 mt-4 lg:mt-8">
                    {{ btnLabel }}
                </button>
            </RouterLink>
        </div>
        <img src="/img/illu-call2action.svg" alt="Illustration"
            class="hidden sm:block absolute top-1/2 right-5 lg:right-20 -translate-y-1/2 w-2/5 md:max-w-[380px]">
    </div>
</template>