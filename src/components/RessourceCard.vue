<script lang="ts" setup>
import RessourceCardBtn from '@/components/RessourceCardBtn.vue';
defineProps<{
    titleOne: string,
    titleTwo: string,
    imgUrl: string,
    textColor?: string,
    iconColor?: string,
    cardLink: string,
    bgIconColor?: string,
    bgCardColor?: string,
    highlightTitle?: string,
}>()
</script>

<template>
    <RouterLink :to="cardLink" class="w-full max-sm:max-w-[500px] max-w-full">
        <div class="relative border border-noir rounded-3xl p-6 md:p-8 lg:p-10 sm:mx-0 min-h-full flex flex-col justify-between max-w-[650px] lg:h-[400px] ressource-card group"
            :class="bgCardColor === 'vert' ? 'bg-vert' : (bgCardColor === 'gris' ? 'bg-gris' : 'bg-noir')">

            <h3 class="text-sm md:text-base lg:text-lg font-medium leading-5 md:leading-6 lg:leading-8 mb-4">
                <div>
                    <span class="rounded-md px-1" :class="highlightTitle === 'vert' ? 'bg-vert' : 'bg-blanc'">
                        {{ titleOne }}
                    </span>
                </div>
                <div>
                    <span class="rounded-md px-1" :class="highlightTitle === 'vert' ? 'bg-vert' : 'bg-blanc'">
                        {{ titleTwo }}
                    </span>
                </div>
            </h3>
            <img :src="imgUrl" alt="illustration"
                class="w-full ml-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px] transition-transform duration-300 group-hover:scale-105">
            <RessourceCardBtn :cardLink="cardLink" :textColor="textColor" :iconColor="iconColor"
                :bgIconColor="bgIconColor" class="absolute bottom-5 lg:bottom-8" />
        </div>
    </RouterLink>
</template>

<style>
.ressource-card {
    transition: all ease 300ms;
    box-shadow: 0 2px 0;
}

.ressource-card:hover {
    box-shadow: 1px 4px 0;
}
</style>