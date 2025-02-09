<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import StatsCard from '@/components/StatsCard.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Les bonnes pratiques :" titleTwo="Bien se protéger en ligne" imgUrl="/img/secured-protect.png"
            description="Dans un monde de plus en plus connecté, protéger ses données et sa vie privée est devenu essentiel. Découvrez les bonnes pratiques pour naviguer en toute sécurité et éviter les cybermenaces."
            class="px-[5%]" />

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Pourquoi est-il essentiel de se protéger en ligne ?
            </h2>
            <p>Chaque jour, des milliers de tentatives de piratage, d'arnaques et de cyberharcèlement sont signalées. Se
                protéger en ligne ne concerne pas seulement les entreprises ou les célébrités : chacun de nous est une
                cible potentielle.</p>
            <p class="font-medium mt-4">Quelques chiffres :</p>
            <ul class="flex max-sm:flex-wrap gap-2 mt-5">
                <li>
                    <StatsCard stats="84%"
                        description="des internautes ont déjà été exposés à une tentative de cyberattaque." />
                </li>
                <li>
                    <StatsCard stats="60%"
                        description="des utilisateurs utilisent encore des mots de passe trop simples." />
                </li>
            </ul>
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Sécuriser ses comptes et ses données
            </h2>
            <p>Un bon mot de passe et une gestion sécurisée de vos comptes sont vos premières défenses contre le
                piratage.</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><strong>Utilisez des mots de passe complexes :</strong> au moins 12 caractères avec lettres,
                    chiffres et symboles.</li>
                <li><strong>Activez l'authentification à deux facteurs :</strong> une étape supplémentaire pour protéger
                    vos accès.</li>
                <li><strong>Changez vos mots de passe régulièrement :</strong> surtout pour vos comptes sensibles.</li>
            </ul>
            <div class="mt-4 sm:mt-6 leading-tight">
                <p class="font-medium mb-2 md:text-base">Exemple concret :</p>
                <div class="pl-2 border-l-2 border-l-vert">
                    <p>Une personne utilise le même mot de passe pour ses réseaux sociaux et sa messagerie.</p>
                    <p>Si une personne mal intentionnée obtient ce mot de passe, il peut facilement accéder à plusieurs
                        comptes à la fois.
                    </p>
                </div>
            </div>
            <img src="/img/password-test.png" alt="Sécurité des mots de passe"
                class="max-md:mx-auto max-h-[400px] mt-8">
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Maîtriser ses paramètres de confidentialité
            </h2>
            <p>Vos données personnelles sont précieuses. Limitez leur exposition en ajustant vos paramètres de
                confidentialité sur les réseaux sociaux et services en ligne.</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><strong>Activez le mode privé :</strong> restreignez l'accès à vos publications aux personnes de
                    confiance.</li>
                <li><strong>Vérifiez les autorisations :</strong> contrôlez les applications tierces qui accèdent à vos
                    comptes.</li>
                <li><strong>Évitez les publications sensibles :</strong> ne partagez pas d'informations personnelles
                    (adresse, téléphone, école…).</li>
            </ul>
            <img src="/img/params-account-app-grid.webp" alt="Paramètres de confidentialité"
                class="max-md:mx-auto max-h-[400px] mt-8">
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Éviter les arnaques et cyberattaques
            </h2>
            <p>Les escroqueries en ligne sont de plus en plus sophistiquées. Apprenez à les repérer et à vous en
                protéger.</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><strong>Ne cliquez pas sur les liens suspects :</strong> vérifiez toujours l'adresse de l'expéditeur
                    avant d'ouvrir un lien.</li>
                <li><strong>Utilisez un antivirus :</strong> il vous protège des logiciels malveillants et des
                    tentatives d'hameçonnage.</li>
                <li><strong>Ne partagez pas vos informations bancaires :</strong> aucun service légitime ne vous
                    demandera vos identifiants par email.</li>
            </ul>
            <div class="mt-4 sm:mt-6 leading-tight">
                <p class="font-medium mb-2 md:text-base">Exemple concret :</p>
                <div class="pl-2 border-l-2 border-l-vert">
                    <p>Un utilisateur reçoit un email indiquant un problème avec son compte bancaire et l'incitant à
                        cliquer sur un lien.</p>
                    <p>Cet email est en réalité une tentative de phishing pour récupérer ses identifiants bancaires.</p>
                </div>
            </div>
            <img src="/img/hack-illu.png" alt="Exemple de phishing" class="max-md:mx-auto max-h-[400px] mt-8">
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Adopter une attitude responsable en ligne
            </h2>
            <p>Protéger sa sécurité en ligne, c'est aussi adopter une posture responsable et bienveillante.</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><strong>Pensez avant de publier :</strong> tout contenu partagé peut être capturé et diffusé sans
                    votre accord.</li>
                <li><strong>Ne relayez pas de fausses informations :</strong> vérifiez toujours vos sources avant de
                    partager.</li>
                <li><strong>Signalez les comportements abusifs :</strong> les plateformes permettent de bloquer et
                    signaler les comptes malveillants.</li>
            </ul>
        </section>

        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Que faire en cas de problème ?
            </h2>
            <p>Même avec des précautions, il est possible d'être victime de cyberharcèlement ou de cyberattaques. Voici
                les étapes à suivre :</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><strong>Conservez les preuves :</strong> capturez les messages et signalements.</li>
                <li><strong>Bloquez et signalez :</strong> utilisez les outils des plateformes.</li>
                <li><strong>Déposez plainte si nécessaire :</strong> certaines infractions sont punies par la loi.</li>
            </ul>
        </section>
    </main>
</template>