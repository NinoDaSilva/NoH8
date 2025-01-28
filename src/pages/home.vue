<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import RessourceCard from '@/components/RessourceCard.vue';
</script>

<template>
    <main class="p-[5%] pt-20 sm:pt-24 max-w-[1920px] mx-auto">
        <MyHero titleOne="Le cyberharcèlement :" titleTwo="Une réalité qui dépasse l'écran"
            imgUrl="/img/HomebannerIllustration.png"
            description="Apprenez à reconnaître, comprendre et combattre le cyberharcèlement. Ensemble, nous pouvons faire la différence."
            btnLabel="Besoin d'aide ?" btnLink="/help" />
        <section class="xl:px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Ressources
                </h2>
                <p class="mt-5 lg:mt-0">Des ressources essentielles pour comprendre, prévenir et agir face au
                    cyberharcèlement. Outils, conseils et informations pratiques pour un espace numérique plus sûr pour
                    tous.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-[1350px] mx-auto">
                <RessourceCard titleOne="Qu'est-ce que" titleTwo="le cyberharcèlement ?"
                    imgUrl="/img/web-search-with-elements.svg" cardLink="/" highlightTitle="vert" iconColor="vert"
                    bgCardColor="gris" bgIconColor="noir" textColor="noir" />
                <RessourceCard titleOne="L'impact du cyberharcèlement" titleTwo="sur les victimes"
                    imgUrl="/img/volumetric-analytics-of-different-types-in-web-browsers.svg" cardLink="/"
                    iconColor="vert" bgCardColor="vert" bgIconColor="noir" textColor="noir" />
                <RessourceCard titleOne="Comment reconnaître" titleTwo="le cyberharcèlement ?"
                    imgUrl="/img/browser-window-with-emoticon-likes-and-stars-around.png" cardLink="/" />
                <RessourceCard titleOne="Les bonnes pratiques" titleTwo="pour se protéger"
                    imgUrl="/img/selecting-a-value-in-the-browser-window.svg" cardLink="/" highlightTitle="vert"
                    iconColor="vert" bgCardColor="gris" bgIconColor="noir" textColor="noir" />
            </div>
        </section>
    </main>
</template>