<script lang="ts" setup>
import FaqComponent from '@/components/FaqComponent.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Questions
                    les plus posées
                </h2>
            </div>
            <FaqComponent :type="'top'" :key="'faq-top'" />
        </section>
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">
                    Professionnels & Éducateurs
                </h2>
            </div>
            <FaqComponent :type="'pro'" :key="'faq-pro'" />
        </section>
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">
                    Parents & Encadrants
                </h2>
            </div>
            <FaqComponent :type="'parent'" :key="'faq-parent'" />
        </section>
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Sécurité &
                    Prévention
                </h2>
            </div>
            <FaqComponent :type="'safe'" :key="'faq-safe'" />
        </section>
        <section class="px-[5%] mt-10 sm:mt-20">
            <div class="text-center items-center sm:text-start lg:flex gap-5 mb-5 lg:mb-10 max-w-[950px]">
                <h2 class="bg-vert inline-block px-2 rounded-md text-base sm:text-lg lg:text-xl font-medium">Questions
                    générales
                </h2>
            </div>
            <FaqComponent :type="'all'" :key="'faq-all'" />
        </section>
    </main>
</template>