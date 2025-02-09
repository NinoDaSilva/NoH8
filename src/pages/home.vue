<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import RessourceCard from '@/components/RessourceCard.vue';
import FaqComponent from '@/components/FaqComponent.vue';
import EvidenceCarousel from '@/components/EvidenceCarousel.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Le cyberharcèlement :" titleTwo="Une réalité qui dépasse l'écran"
            imgUrl="/img/HomebannerIllustration.png"
            description="Apprenez à reconnaître, comprendre et combattre le cyberharcèlement. Ensemble, nous pouvons faire la différence."
            btnLabel="Besoin d'aide ?" btnLink="/help" class="px-[5%]" />
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Ressources
                </h2>
                <p class="mt-3 lg:mt-0">Des ressources essentielles pour comprendre, prévenir et agir face au
                    cyberharcèlement. Outils, conseils et informations pratiques pour un espace numérique plus sûr pour
                    tous.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-[1350px] mx-auto">
                <RessourceCard titleOne="Qu'est-ce que" titleTwo="le cyberharcèlement ?"
                    imgUrl="/img/web-search-with-elements.svg" cardLink="/ressources/CyberWhat" highlightTitle="vert"
                    iconColor="vert" bgCardColor="gris" bgIconColor="noir" textColor="noir" />
                <RessourceCard titleOne="L'impact du cyberharcèlement" titleTwo="sur les victimes"
                    imgUrl="/img/volumetric-analytics-of-different-types-in-web-browsers.svg"
                    cardLink="/ressources/CyberImpact" iconColor="vert" bgCardColor="vert" bgIconColor="noir"
                    textColor="noir" />
                <RessourceCard titleOne="Comment reconnaître" titleTwo="le cyberharcèlement ?"
                    imgUrl="/img/browser-window-with-emoticon-likes-and-stars-around.png"
                    cardLink="/ressources/CyberHow" />
                <RessourceCard titleOne="Les bonnes pratiques" titleTwo="pour se protéger"
                    imgUrl="/img/selecting-a-value-in-the-browser-window.svg" cardLink="/ressources/CyberGood"
                    highlightTitle="vert" iconColor="vert" bgCardColor="gris" bgIconColor="noir" textColor="noir" />
            </div>
        </section>
        <section class="sm:px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start sm:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Témoignages
                </h2>
                <p class="mt-3 sm:mt-0">Les voix des victimes et témoins de cyberharcèlement.
                </p>
            </div>
            <EvidenceCarousel />
        </section>
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start sm:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Faq
                </h2>
                <p class="mt-3 sm:mt-0">Questions les plus fréquentes.
                </p>
            </div>
            <FaqComponent />
            <div class="grid place-items-center mt-5 sm:mt-8">
                <RouterLink to="/faq"
                    class="text-center text-[14px] md:text-xs text-blanc rounded-md bg-noir px-3 w-4/5 sm:w-auto sm:px-8 p-2 shadow-sm">
                    Voir plus
                </RouterLink>
            </div>
        </section>
    </main>
</template>