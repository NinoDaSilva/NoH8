<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import CTA from '@/components/CTA.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Comment reconnaître" titleTwo="le cyberharcèlement" imgUrl="/img/documents-ressources.png"
            description="Contrairement à une dispute ponctuelle, le cyberharcèlement repose sur la répétition des attaques et leur impact psychologique. Mais comment savoir si vous ou un proche en êtes victime ? Quels sont les signes qui doivent alerter ?"
            class="px-[5%]" />
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Quels sont les signes du cyberharcèlement ?</h2>
            <div>
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Des attaques répétées et ciblées
                </h3>
                <p>Le cyberharcèlement se distingue par <strong>la fréquence</strong> et <strong>l'intensité des
                        attaques</strong>. Il s'agit souvent de messages, commentaires ou contenus haineux envoyés de
                    manière <strong>répétée</strong> et <strong>délibérée</strong> dans le but de blesser.</p>
            </div>
            <div class="mt-10">
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Harcèlement anonyme et en groupe
                </h3>
                <p>Sur Internet, l'anonymat permet à certains de harceler sans crainte de représailles. Le lynchage
                    numérique, où plusieurs personnes attaquent une victime en même temps, est une pratique
                    courante.</p>
                <div class="mt-4 sm:mt-6 leading-tight">
                    <p class="font-medium mb-2 md:text-base">Par exemple :</p>
                    <div class="pl-2 border-l-2 border-l-vert">
                        <p>Une personne reçoit quotidiennement des insultes ou moqueries sur les réseaux sociaux.
                        </p>
                        <p>Des menaces sont envoyées de manière répétée sur une application de messagerie.</p>
                        <p>Un groupe d'individus s'acharne contre une personne en partageant des rumeurs fausses.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Diffusion d'informations personnelles ou compromettantes
                </h3>
                <p>L'un des aspects les plus dangereux du cyberharcèlement est le doxing, qui consiste à révéler des
                    informations personnelles (adresse, numéro de téléphone, photos privées) sans consentement.</p>
            </div>
        </section>
        <div class="px-[5%] mt-10 sm:mt-20">
            <CTA titleOne="Les bonnes pratiques" titleTwo="pour se protéger"
                description="Découvrez les bonnes pratiques pour naviguer en toute sécurité et éviter les cybermenaces"
                btnLabel="En savoir plus" btnLink="/ressources/CyberGood" class="mt-10 md:mt-20" />

        </div>
    </main>
</template>