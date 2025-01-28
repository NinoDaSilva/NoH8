<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
</script>

<template>
    <main class="p-[5%] pt-20 sm:pt-24 max-w-[1920px] mx-auto">
        <MyHero titleOne="Besoin d'aide ?" titleTwo="Services et contacts utiles" imgUrl="/img/illu-help.svg"
            description="Que vous soyez victime, témoin, parent ou professionnel, cette page regroupe des contacts essentiels pour vous soutenir." />
        <section class="mt-5 lg:mt-10 xl:px-[5%]">
            <h2 class="text-lg lg:text-xl font-semibold">Vous êtes victime ? Voici les étapes à suivre</h2>
            <ul class="mt-2 list-disc text-xs lg:text-sm list-inside">
                <li><strong>Conservez des preuves :</strong> capturez les messages, photos ou vidéos incriminants.</li>
                <li><strong>Sécurisez vos comptes :</strong> modifiez vos mots de passe et activez la double
                    authentification.</li>
                <li><strong>Bloquez l’auteur :</strong> utilisez les options de blocage sur les réseaux sociaux ou
                    applications.</li>
                <li><strong>Signalez les contenus :</strong> via les plateformes ou les autorités compétentes.</li>
                <li><strong>Contactez une assistance spécialisée :</strong> des services comme <a
                        href="https://e-enfance.org/notre-temps-cyberviolences-le-numero-vert-net-ecoute-devient-le-3018-plus-simple-et-efficace/"
                        target="_blank">Net Écoute</a> peuvent vous
                    guider.
                </li>
            </ul>
        </section>
        <section class="mt-8 lg:my-24 lg:mb-12 text-center">
            <h2 class="text-lg md:text-2xl font-bold leading-tight">Ne restez pas seul face au cyberharcèlement</h2>
            <p class="mt-2 text-gray-700">Demander de l’aide, c’est la première étape pour mettre fin à cette situation.
            </p>
            <p class="mt-2 font-medium">Contacter un service d’aide</p>
        </section>
        <section class="mt-5 lg:mt-10 p-5 md:p-8 rounded-2xl bg-vert shadow-lg max-w-[1100px] mx-auto">
            <h2 class="text-lg md:text-2xl font-semibold leading-tight">Contacts et services à votre disposition</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mt-6">
                <a href="https://e-enfance.org/notre-temps-cyberviolences-le-numero-vert-net-ecoute-devient-le-3018-plus-simple-et-efficace/"
                    target="_blank">
                    <div class="p-4 bg-blanc min-h-full rounded-lg shadow contact-card">
                        <h3 class="text-base sm:text font-bold">Net Écoute</h3>
                        <p class="mt-2">
                            Service d’écoute et d’accompagnement pour les jeunes victimes. Disponible au 3018 ou via
                            leur
                            site web.
                        </p>
                    </div>
                </a>
                <a href="https://www.internet-signalement.gouv.fr/PharosS1/" target="_blank">
                    <div class="p-4 bg-blanc min-h-full rounded-lg shadow contact-card">
                        <h3 class="text-base sm:text-lg font-bold">Pharos</h3>
                        <p class="mt-2">
                            Plateforme gouvernementale pour signaler des contenus illicites en ligne.
                        </p>
                    </div>
                </a>
                <a href="https://e-enfance.org/besoin-daide/" target="_blank">
                    <div class="p-4 bg-blanc min-h-full rounded-lg shadow contact-card">
                        <h3 class="text-base sm:text-lg font-bold">e-Enfance</h3>
                        <p class="mt-2">
                            Association spécialisée dans la protection des enfants en ligne. Propose des conseils et
                            ressources.
                        </p>
                    </div>
                </a>
                <a href="https://www.internet-signalement.gouv.fr/PharosS1" target="_blank">
                    <div class="p-4 bg-blanc min-h-full rounded-lg shadow contact-card">
                        <h3 class="text-base sm:text-lg font-bold">Police/Gendarmerie</h3>
                        <p class="mt-2">
                            Déposer une plainte auprès des forces de l’ordre pour signaler des actes graves de
                            cyberharcèlement.
                        </p>
                    </div>
                </a>
            </div>
        </section>
    </main>
</template>

<style>
.contact-card {
    transition: all ease 300ms;
    box-shadow: 0 2px 0;
}

.contact-card:hover {
    box-shadow: 2px 4px 0;
    transform: scale(1.01);
}
</style>