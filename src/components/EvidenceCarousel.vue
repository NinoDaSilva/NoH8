<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { tenEvidence } from '@/backend'
import Swiper from 'swiper'
import 'swiper/css'
import IconSimpleArrow from './icons/IconSimpleArrow.vue'

const evidences = await tenEvidence()
const expanded = ref<Record<string, boolean>>({}) // Stocke l'état d'affichage de chaque témoignage
const slider = ref<Swiper>()

// Fonction pour toggle l'affichage du témoignage complet
const toggleExpand = (id: string) => {
    expanded.value[id] = !expanded.value[id]
}

// Fonction pour passer au témoignage suivant
const next = () => {
    slider.value?.slideNext()
}

// Fonction pour revenir au témoignage précédent
const prev = () => {
    slider.value?.slidePrev()
}

onMounted(() => {
    // Initialiser Swiper
    slider.value = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
})
</script>

<template>
    <div class="bg-noir text-blanc p-5 py-10 pt-14 lg:px-0 sm:rounded-[45px] overflow-hidden">
        <div class="swiper-container lg:-mx-20">
            <div class="swiper-wrapper cursor-grab">
                <div v-for="evidence in evidences" :key="evidence.id" class="swiper-slide">
                    <div class="p-5 md:p-8 border border-vert rounded-3xl transition-all duration-300">
                        <p>
                            {{
                                expanded[evidence.id] || evidence.description.length <= 300 ? evidence.description :
                                    evidence.description.slice(0, 300) + '...' }} </p>
                                <!-- Bouton si le texte dépasse le nbr de caractères -->
                                <button v-if="evidence.description.length > 300" @click="toggleExpand(evidence.id)"
                                    class="text-vert mt-2">
                                    {{ expanded[evidence.id] ? 'Voir moins' : 'En savoir plus' }}
                                </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between mt-6 md:mt-10 sm:px-[5%] lg:px-[30%] mx-auto">
            <button @click="prev">
                <IconSimpleArrow arrowColor="blanc"
                    class="swiper-button-prev  -rotate-[150deg] mt-[1.5px] w-[35px] cursor-pointer opacity-80" />
            </button>
            <div class="swiper-pagination"></div>
            <button @click="next">
                <IconSimpleArrow arrowColor="blanc"
                    class="swiper-button-next  rotate-[30deg] w-[35px] cursor-pointer opacity-80" />
            </button>
        </div>
    </div>
</template>

<style>
/* Cache la barre de scroll sur certains navigateurs */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* Internet Explorer */
    scrollbar-width: none;
    /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}
</style>