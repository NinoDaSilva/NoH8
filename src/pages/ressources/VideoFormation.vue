<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { allVideos } from '@/backend';
import type { VideoRecord } from '@/pocketbase-types';
import VideoCard from '@/components/VideoCard.vue';
import MyHero from '@/components/MyHero.vue';

const videos = ref<VideoRecord[]>([]); // Stockage des vidéos
const selectedCategory = ref(''); // Catégorie sélectionnée par défaut
const displayedVideos = ref(10); // Nombre de vidéos affichées

// Liste des catégories disponibles
const categories = [
    { value: 'jeune', label: 'Pour les jeunes' },
    { value: 'parent', label: 'Pour les parents' },
    { value: 'prof', label: 'Pour les enseignants' },
    { value: 'loi', label: 'Aspects juridiques & légaux' },
    { value: 'temoignage', label: 'Témoignages & expériences' }
];

// Récupération des vidéos depuis l’API
const fetchVideos = async () => {
    try {
        videos.value = await allVideos();
    } catch (error) {
        console.error('Erreur lors du chargement des vidéos:', error);
    }
};

// Fonction pour sélectionner ou désélectionner une catégorie
const toggleCategory = (category: string) => {
    selectedCategory.value = selectedCategory.value === category ? '' : category;
};

// Filtrage des vidéos par catégorie
const filteredVideos = computed(() => {
    if (selectedCategory.value === '') {
        return videos.value.slice(0, displayedVideos.value);
    }
    return videos.value
        .filter(v => v.category === selectedCategory.value)
        .slice(0, displayedVideos.value);
});

// Chargement de plus de vidéos
const loadMoreVideos = () => {
    displayedVideos.value += 10;
};

// Charger les vidéos au montage du composant
onMounted(fetchVideos);
</script>

<template>
    <main class="p-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Ressources :" titleTwo="Des vidéos à ne pas manquer" imgUrl="/img/video-ressources-hero.png"
            description="Que vous soyez parent, éducateur ou jeune utilisateur du web, ces ressources vous aideront à adopter les bons réflexes et à mieux comprendre le harcèlement en ligne." />

        <!-- Sélecteur de catégorie -->
        <div class="relative mt-10">
            <div
                class="flex sm:flex-wrap gap-4 mb-8 max-sm:overflow-x-auto max-sm:whitespace-nowrap max-sm:scroll-container">
                <button v-for="category in categories" :key="category.value" @click="toggleCategory(category.value)"
                    class="px-4 py-2 rounded-md transition-all flex-shrink-0 max-sm:scroll-item" :class="selectedCategory === category.value
                        ? 'bg-vert text-white'
                        : 'bg-gris text-noir hover:bg-vert shadow-sm transition-all duration-200 ease-in'">
                    {{ category.label }}
                </button>
            </div>
        </div>

        <!-- Liste des vidéos -->
        <div class="mt-10">
            <div v-if="filteredVideos.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                <VideoCard v-for="(v, index) in filteredVideos" :key="index" v-bind="{ ...v }" />
            </div>
            <p v-else class="text-center mt-10">
                Aucune vidéo disponible dans cette catégorie pour le moment.
            </p>
        </div>

        <!-- Bouton charger plus -->
        <div v-if="filteredVideos.length < videos.length && filteredVideos.length >= 10" class="text-center mt-8">
            <button @click="loadMoreVideos" class="p-3 px-5 bg-noir text-blanc rounded-md transition-all shadow-sm">
                Voir plus de vidéos
            </button>
        </div>
    </main>
</template>

<style>
.scroll-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 8px;
}

.scroll-item {
    scroll-snap-align: center;
    flex: 0 0 auto;
}

.scroll-container::-webkit-scrollbar {
    display: none;
}

.scroll-container {
    scrollbar-width: none;
}

.scroll-container {
    -ms-overflow-style: none;
    /* IE & Edge */
}
</style>