<script lang="ts" setup>
import MyHero from '@/components/MyHero.vue';
import StatsCard from '@/components/StatsCard.vue';
import CTA from '@/components/CTA.vue';
</script>

<template>
    <main class="py-[5%] pt-20 sm:pt-24 max-w-[1500px] mx-auto">
        <MyHero titleOne="L'impact du" titleTwo="cyberharcèlement" imgUrl="/img/documents-ressources.png"
            description="Le cyberharcèlement ne se limite pas à de simples conflits en ligne. Il s'agit d'une forme de violence digitale aux conséquences réelles et souvent dramatiques pour les personnes concernées. Derrière chaque message haineux, chaque rumeur diffusée, chaque insulte anonyme, il y a des individus qui souffrent en silence."
            class="px-[5%]" />
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Les conséquences psychologique du cyberharcèlement</h2>
            <div>
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Troubles émotionnels et anxiété
                </h3>
                <p>Recevoir en continu des messages de haine ou d'intimidation peut créer un stress chronique chez
                    les victimes. Elles peuvent développer une anxiété paralysante, se sentir piégées dans un état
                    de peur constant et perdre confiance en elles.</p>
                <ul class="flex max-sm:flex-wrap gap-2 mt-5">
                    <li>
                        <StatsCard stats="70%"
                            description="des victimes de cyberharcèlement ressentent de l'anxiété et du stress intense."
                            source="e-Enfance, 2023" />
                    </li>
                    <li>
                        <StatsCard stats="1/3"
                            description="des adolescents harcelé développe des symptômes de dépression."
                            source="UNICEF, 2022" />
                    </li>
                </ul>
            </div>
            <div class="mt-5">
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Risques de dépression et idées suicidaires
                </h3>
                <p>Le cyberharcèlement peut conduire à une profonde détresse psychologique. Chez certains, la
                    douleur devient insupportable et peut mener à des pensées suicidaires.</p>
            </div>
        </section>
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Les conséquences sociales et scolaires</h2>
            <div>
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Isolement et repli sur soi
                </h3>
                <p>Les victimes de cyberharcèlement tendent à s'éloigner de leurs amis, de leur famille et de leurs
                    activités sociales par peur du jugement ou de nouvelles agressions.</p>
                <div class="flex max-sm:flex-wrap gap-2 mt-5">
                    <StatsCard stats="45%"
                        description="des jeunes victimes déclarent éviter l'école ou les espaces sociaux."
                        source="INJEP, 2022" />
                </div>
            </div>
            <div class="mt-10">
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Difficultés scolaires et professionnelles
                </h3>
                <p>Le stress et la peur affectent la concentration et la motivation, entraînant une baisse des résultats
                    scolaires et, dans certains cas, un abandon scolaire.</p>
                <p>Sur le plan professionnel, le cyberharcèlement au travail détruit l'estime de soi et peut provoquer
                    des burn-out.</p>
                <div class="flex max-sm:flex-wrap gap-2 mt-5">
                    <StatsCard stats="1/5" description="salarié a déjà été victime de cyberharcèlement au travail."
                        source="ANACT, 2021" />
                </div>
            </div>
        </section>
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Risques pour la santé</h2>
            <div>
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Troubles du sommeil et fatigue
                </h3>
                <p>L'anxiété générée par le cyberharcèlement perturbe le sommeil, provoquant insomnies et cauchemars
                    récurrents.</p>
            </div>
            <div class="mt-5">
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Troubles alimentaires
                </h3>
                <p>Le stress peut entraîner une perte d'appétit ou, au contraire, une compulsion alimentaire, augmentant
                    les risques de troubles alimentaires.</p>
            </div>
        </section>
        <section class="px-[5%] mt-10 sm:mt-20 md:text-sm max-w-[1200px]">
            <h2 class="inline-block underline decoration-vert text-[18px] sm:text-lg lg:text-xl mb-1 font-semibold">
                Les répercussions à long terme</h2>
            <div>
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Perte de confiance et difficultés relationnelles
                </h3>
                <p>Les victimes de cyberharcèlement peuvent développer une peur de l'interaction sociale, une
                    hypersensibilité au regard des autres et une difficulté à se faire confiance.</p>
            </div>
            <div class="mt-5">
                <h3 class="sm:text-base lg:text-lg mb-1 sm:mt-3 font-medium">
                    <span>• </span>Effet sur l'identité
                </h3>
                <p>Particulièrement chez les jeunes, le cyberharcèlement peut influencer la construction de l'identité,
                    menant à des crises de confiance durables.</p>
            </div>
        </section>
        <div class="px-[5%] mt-10 md:mt-24 md:text-sm">
            <div>
                <p>Le cyberharcèlement a des conséquences profondes et durables. Il est crucial d'agir rapidement, de
                    sensibiliser et d'offrir du soutien aux victimes.</p>
                <p>Si vous ou quelqu'un de votre entourage est concerné, n'hésitez pas à demander de l'aide.</p>

            </div>
            <CTA title="Parler et se faire aider"
                description="Briser le silence est essentiel pour surmonter cette épreuve. Il existe des ressources pour accompagner les victimes"
                btnLabel="Besoin d'aide" btnLink="/help" class="mt-10 md:mt-20" />
        </div>
    </main>
</template>