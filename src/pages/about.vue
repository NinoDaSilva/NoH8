<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import CTA from '@/components/CTA.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="À propos de" titleTwo="NoHate" imgUrl="/NoHateLogo.svg"
            description="NoHate est un site interactif conçu pour sensibiliser au cyberharcèlement et encourager des comportements bienveillants en ligne."
            class="px-[5%]" />

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1250px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Un site pour sensibiliser et agir contre le cyberharcèlement
            </h2>
            <p>Le cyberharcèlement est un fléau numérique qui touche des milliers de personnes, entraînant des
                conséquences graves sur leur bien-être mental. NoHate vise à informer, éveiller les consciences et
                offrir des solutions pour un internet plus sûr.</p>
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1250px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Une expérience immersive pour comprendre l'impact des mots
            </h2>
            <p>Pour marquer les esprits, NoHate propose une immersion choc : à votre arrivée, une série de messages
                offensants simule les attaques typiques du cyberharcèlement.</p>
            <p>Cette courte séquence permet de ressentir l'impact psychologique de ces violences. Une fois terminée,
                l'utilisateur accède à une interface éducative et apaisante, mettant en avant les bonnes pratiques et
                les solutions.</p>
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1250px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Ce que propose NoHate
            </h2>
            <p>NoHate est un espace d'information et de témoignages dédié à la lutte contre le cyberharcèlement.</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><strong>Des explications claires</strong> : comprendre les formes du cyberharcèlement et ses
                    conséquences.</li>
                <li><strong>Une section témoignages</strong> : recueillir et partager des récits de victimes et témoins.
                </li>
                <li><strong>Des ressources pratiques</strong> : guides pour se protéger, signaler des abus et trouver du
                    soutien.</li>
            </ul>
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1250px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Un projet engagé
            </h2>
            <p>Grâce à une forte présence possible sur les réseaux sociaux, NoHate permet de toucher un large public.
            </p>
            <p>Il est aussi déstiné à être un outil de sensibilisation en milieu scolaire et professionnel, contribuant
                à une culture
                numérique plus respectueuse.</p>
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1250px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Devenez acteur du changement
            </h2>
            <p>Chacun peut jouer un rôle dans la lutte contre le cyberharcèlement. Que vous soyez jeune, parent ou
                professionnel, votre voix compte.</p>
            <p>Un clic peut blesser, mais il peut aussi guérir. Rejoignez NoHate pour faire partie du changement.</p>
        </section>

        <div class="px-[5%] mt-10 sm:mt-20">
            <CTA titleOne="Partagez votre expérience" titleTwo="et aidez à sensibiliser"
                description="Votre témoignage peut faire la différence. En partageant votre histoire, vous contribuez à briser le silence et à soutenir ceux qui en ont besoin."
                btnLabel="Témoigner maintenant" btnLink="/evidence" />
        </div>
    </main>
</template>