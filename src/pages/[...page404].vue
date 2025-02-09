<script lang="ts" setup>
</script>

<template>
    <main class="grid min-h-full place-items-center p-6 pt-24 sm:pt-32">
        <div class="text-center">
            <p class="text-3xl font-semibold">404</p>
            <h1 class="text-base md:text-lg mt-4 font-semibold">Page non trouvé !
            </h1>
            <p class="md:text-base mt-6 font-medium">Désolé, la page que vous recherchez n'est pas disponible.</p>
            <div class="md:text-base mt-10 flex items-center justify-center gap-x-6">
                <RouterLink to="/home" class="rounded-md bg-vert px-3.5 py-2.5 font-semibold shadow-sm">
                    Retour à l'accueil</RouterLink>
                <a href="mailto:contact@nohate.com" class="font-semibold">Contact <span
                        aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
    </main>
</template>