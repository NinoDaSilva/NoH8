<script lang="ts" setup>
import RessourceCardBtn from '@/components/RessourceCardBtn.vue';
defineProps<{
    titleOne: string,
    titleTwo: string,
    imgUrl: string,
    textColor?: string,
    iconColor?: string,
    cardLink: string,
    bgCardColor?: string,
}>()
</script>

<template>
    <div>
        <div>
            <h3>
                <span>{{ titleOne }}</span>
                <span>{{ titleTwo }}</span>
            </h3>
            <RessourceCardBtn :cardLink="cardLink" :textColor="textColor" :iconColor="iconColor"
                :bgCardColor="bgCardColor" />
        </div>
        <img :src="imgUrl" alt="illustration">
    </div>
</template>