<script lang="ts" setup>
import { RouterLink } from 'vue-router';
const year = new Date().getFullYear();
</script>

<template>
    <footer class="bg-noir text-blanc p-[8%] py-10 md:pt-16 rounded-t-3xl sm:rounded-t-[50px] mt-10">
        <div class="max-w-[1350px] mx-auto">
            <ul class="flex flex-wrap gap-4 gap-x-6 md:gap-x-8 font-medium text-sm sm:text-base">
                <li>
                    <RouterLink to="/home" class="link">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink to="/ressources" class="link">Ressources</RouterLink>
                </li>
                <li>
                    <RouterLink to="/help" class="link">Aides</RouterLink>
                </li>
                <li>
                    <RouterLink to="/evidence" class="link">Témoignages</RouterLink>
                </li>
                <li>
                    <RouterLink to="/faq" class="link">FAQ</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about" class="link">À propos</RouterLink>
                </li>
            </ul>
            <section class="mt-10 md:mt-14">
                <h3 class="bg-vert text-noir inline-block px-1 rounded-md text-sm sm:text-base font-medium">Contact</h3>
                <p class="mt-3">Email : <a href="@mailto:contact@nohate.com" class="underline">contact@nohate.com</a>
                </p>
            </section>
            <div class="md:flex flex-wrap gap-5 border-t pt-10 mt-12 md:mt-14 border-blanc items-center">
                <p class=""><span>©{{ year }}</span> NoHate. Tous Droits Réservés.</p>
                <ul class="flex flex-wrap items-center gap-5 mt-2 md:mt-0 underline">
                    <li>
                        <RouterLink to="/privacy-policy">Politique de confidentialité</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/credits">Crédits</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.2);
}
</style>