<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import ContactCard from '@/components/ContactCard.vue';
import { allContact } from '@/backend';

const contacts = await allContact();
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
                <ContactCard v-for="contact in contacts" v-bind="{ ...contact }" />
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