<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import CTA from '@/components/CTA.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="Qu'est-ce que" titleTwo="le cyberharcèlement ?" imgUrl="/img/documents-ressources.png"
            description="Avec l'essor des réseaux sociaux et des nouvelles technologies, le harcèlement ne se limite plus au cadre
                physique. Le cyberharcèlement est une réalité qui touche des millions de personnes, souvent dans le
                silence. Mais qu'est-ce que le cyberharcèlement exactement ? Explications." class="px-[5%]" />
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Définition
                du
                cyberharcèlement</h2>
            <p>Le cyberharcèlement, aussi appelé harcèlement en ligne, désigne l'ensemble des comportements
                <b>agressifs</b>, <b>répétés</b> et <b>intentionnels</b> visant une personne sur Internet ou via des
                outils numériques. Il
                peut se manifester sous différentes formes, allant des insultes et moqueries à la divulgation
                d'informations
                personnelles, en passant par le chantage ou l'intimidation.
            </p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li>Il se produit principalement sur les réseaux sociaux, les
                    forums,
                    les
                    applications de
                    messagerie, et
                    les jeux en ligne.</li>
                <li>Il peut être anonyme, ce qui complique l'identification des
                    agresseurs.
                </li>
                <li>Les victimes sont souvent isolées et n'osent pas en parler.
                </li>
            </ul>
            <p>Contrairement au harcèlement classique, il peut avoir une portée massive et virale.</p>
            <div class="mt-4 sm:mt-6 leading-tight">
                <p class="font-medium mb-2 md:text-base">Par exemple :</p>
                <div class="pl-2 border-l-2 border-l-vert">
                    <p>Un adolescent reçoit quotidiennement des insultes anonymes sur
                        Instagram à cause de son apparence physique. Ses camarades créent un faux compte pour se moquer
                        de lui publiquement.</p>
                    <p>Ce type de comportement est une forme de cyberharcèlement.</p>
                </div>
            </div>
        </section>
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">Les
                principales
                formes de cyberharcèlement</h2>
            <p>Le cyberharcèlement prend de nombreuses formes, toutes ayant des répercussions graves sur les victimes.
            </p>
            <p>Voici les types les plus courants :</p>
            <ul class="my-2 grid gap-2 list-disc ml-5">
                <li><a href="/" class="underline">Le flaming</a> : Débats en ligne
                    agressifs et violents,
                    souvent
                    intentionnels.</li>
                <li><a href="/" class="underline">L'outing et le doxxing</a> :
                    Divulgation
                    d'informations
                    personnelles ou
                    confidentielles.</li>
                <li><a href="/" class="underline">Le revenge porn</a> : Diffusion non
                    consentie de contenus
                    intimes.</li>
                <li><a href="/" class="underline">Les raids numériques</a> : Attaques
                    collectives menées par
                    des groupes
                    sur une cible.</li>
                <li><a href="/" class="underline">Le body shaming et slut shaming</a> :
                    Critiques basées sur
                    l'apparence
                    ou le comportement.</li>
            </ul>
            <div class="mt-4 sm:mt-6 leading-tight">
                <p class="font-medium mb-2 md:text-base">Par exemple :</p>
                <div class="pl-2 border-l-2 border-l-vert">
                    <p>Une adolescente découvre que des photos personnelles intimes
                        ont été diffusées sans son consentement
                        sur un groupe Snapchat.</p>
                    <p>Ce phénomène, appelé "revenge porn", est une forme grave de cyberharcèlement
                        punie par la loi.</p>
                </div>
            </div>
        </section>
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">Un
                phénomène
                qui prend de l'ampleur</h2>
            <p>Avec l'explosion du numérique, le cyberharcèlement est devenu un fléau mondial. En France, selon une
                étude de l'Éducation nationale, un adolescent sur trois a déjà été victime de cyberharcèlement.</p>
            <p>L'anonymat sur Internet donne aux harceleurs un sentiment d'impunité, rendant les attaques plus
                violentes et persistantes.</p>

            <CTA titleOne="L'impact du cyberharcèlement"
                description="Derriere chaque message haineux, chaque rumeur diffusée, chaque insulte anonyme, il y a des individus qui souffrent en silence."
                btnLabel="En savoir plus" btnLink="/ressources/CyberImpact" />
        </section>
    </main>
</template>