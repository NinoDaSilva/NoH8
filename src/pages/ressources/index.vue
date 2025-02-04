<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import RessourceCard from '@/components/RessourceCard.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Ressources & aides :" titleTwo="Luttons contre le cyberharcèlement"
            imgUrl="/img/documents-ressources.png"
            description="Retrouvez ici des conseils et guides pour vous protéger, soutenir les victimes et faire face au cyberharcèlement. Vous n'êtes pas seul(e), des solutions existent."
            class="px-[5%]" />
        <div class="mt-10 md:mt-20 px-[5%]">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zUW3JyLtYsQ?si=SnV4YYodaSi0eU8r"
                title="C'est quoi le cyberharcèlement ? - 1 jour, 1 question" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                class="max-sm:h-full max-sm:w-auto lg:w-[80%] lg:min-h-[600px] max-w-full mx-auto border border-gris shadow-sm rounded-lg">
            </iframe>
        </div>
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
    </main>
</template>