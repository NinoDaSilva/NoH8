<script setup lang="ts">
import { ref } from 'vue';
import IconCircleArrow2 from './icons/IconCircleArrow2.vue';
import type { FaqResponse } from '@/pocketbase-types';
import { TopFaq } from '@/backend';

const questions = await TopFaq();

// ID de l'élément actuellement ouvert
const openId = ref<string | null>(null);
// Fonction pour ouvrir/fermer l'élément
const toggleAccordion = (id: string) => {
    openId.value = openId.value === id ? null : id;
};
</script>

<template>
    <div class="space-y-3 lg:space-y-4">
        <div v-for="question in questions" :key="question.id"
            class=" bg-gris overflow-hidden rounded-3xl cursor-pointer faq-card group transition-all duration-300"
            @click="toggleAccordion(question.id)">
            <!-- En-tête de la carte -->
            <div class="flex p-5 py-3 lg:p-5 lg:px-8 items-center justify-between"
                :class="openId === question.id ? 'bg-vert' : 'hover:bg-vert'">
                <h3 class="font-semibold mr-10 leading-tight sm:text-base lg:text-lg">{{ question.title }}</h3>
                <IconCircleArrow2 :bgColor="openId === question.id"
                    class="min-w-[26px] w-[26px] sm:min-w-[35px] sm:w-[35px] transform transition-transform duration-300"
                    :class="openId === question.id ? '-rotate-180' : '-rotate-90'" />
            </div>

            <!-- Contenu de la carte -->
            <div class="overflow-hidden transition-all duration-300"
                :class="openId === question.id ? 'p-5 opacity-100' : 'max-h-0 opacity-0'">
                <p class="sm:text-sm">{{ question.description }}</p>
            </div>
        </div>
    </div>
</template>

<style>
.faq-card {
    transition: all ease 300ms;
    box-shadow: 2px 3px 0;
}

.faq-card:hover {
    box-shadow: 3px 6px 0;
}
</style>