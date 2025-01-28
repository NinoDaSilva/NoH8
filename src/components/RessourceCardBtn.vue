<script lang="ts" setup>
import IconCircleArrow from './icons/IconCircleArrow.vue';
defineProps<{
    textColor?: string,
    iconColor?: string,
    bgIconColor?: string,
    cardLink: string,
}>()
</script>

<template>
    <RouterLink :to="cardLink">
        <div class="cursor-pointer inline-flex items-center gap-3 group">
            <IconCircleArrow
                class="w-[28px] h-[28px] md:w-[38px] md:h-[38px] transition-all ease-out duration-200 group-hover:rotate-[0.5rad]"
                :arrowColor="iconColor" :bgColor="bgIconColor" />
            <p class="hidden lg:inline text-base transition-all ease-out group-hover:font-medium"
                :class="textColor === 'noir' ? 'text-noir' : 'text-blanc'">
                En savoir plus
            </p>
        </div>
    </RouterLink>
</template>