<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import EvidenceForm from '@/components/EvidenceForm.vue';
import EvidenceCarousel from '@/components/EvidenceCarousel.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Vos témoignages :" titleTwo="Parce que c'est important d'en parler"
            imgUrl="/img/illu-help.svg"
            description="Découvrez les témoignages de celles et ceux qui ont osé parler. Ensemble, brisons le silence et luttons contre le cyberharcèlement."
            class="px-[5%]" />

        <section class="px-[5%] mt-14 md:mt-28">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Témoignage
                </h2>
                <p class="mt-3 lg:mt-0">Donnez votre témoignage de façon totalement anonyme et participez à la
                    sensibilisation.</p>
            </div>
            <EvidenceForm />
        </section>
        <section class="px-[5%] mt-14 md:mt-28">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Un combat
                </h2>
                <p class="mt-3 lg:mt-0">Les victimes et témoins du cyberharcèlement en parlent.</p>
            </div>
            <EvidenceCarousel type="all" />
        </section>
    </main>
</template>