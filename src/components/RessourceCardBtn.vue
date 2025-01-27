<script lang="ts" setup>
import IconCircleArrow from './icons/IconCircleArrow.vue';
defineProps<{
    textColor?: string,
    iconColor?: string,
    bgCardColor?: string,
    cardLink: string,
}>()
</script>

<template>
    <RouterLink :to="cardLink">
        <div class="cursor-pointer inline-flex items-center gap-3 group">
            <IconCircleArrow
                class="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] transition-all ease-out duration-200 group-hover:rotate-[0.5rad]"
                :arrowColor="iconColor" :bgColor="bgCardColor" />
            <p class="sm:text-base transition-all ease-out group-hover:font-medium"
                :class="textColor === 'blanc' ? 'text-blanc' : 'text-noir'">
                En savoir plus
            </p>
        </div>
    </RouterLink>
</template>