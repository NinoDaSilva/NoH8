<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

// Variable etat du menu
const activeMenu = ref(false)
// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    activeMenu.value = !activeMenu.value;
    document.body.classList.toggle('menu-open');
}
// Fonction pour affciher le header au scroll vers le haut
const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
    dirTop.value = y < oldY
})
</script>

<template>
    <header
        class="z-50 fixed w-full bg-blanc transition-all duration-500 ease-in-out shadow-md rounded-b-3xl lg:flex lg:items-center lg:justify-between"
        :class="{
            '!-translate-y-full !bg-transparent': !dirTop,
            '!bg-transparent': underLimit,
        }">
        <div class="p-5 sm:px-10 flex justify-between flex-wrap items-center font-bold sm:text-lg">
            <RouterLink to="/">NoHate</RouterLink>
            <div class="m-2 hover:cursor-pointer" @click="toggleMenu" tabindex="0">
                <div class="menu__nav-toggle">
                    <div class="menu__nav-toggle-bar"></div>
                </div>
            </div>
        </div>
        <nav class="h-full">
            <ul class="menu bg-blanc" v-scroll-lock="activeMenu">
                <li class="menu__item text-[1.75rem] md:text-xl lg:text-[22px]">
                    <RouterLink to="/home" class="menu__link" @click="toggleMenu">Accueil</RouterLink>
                </li>
                <li class="menu__item text-[1.75rem] md:text-xl lg:text-[22px]">
                    <RouterLink to="/ressources" class="menu__link" @click="toggleMenu">Infos pratiques
                    </RouterLink>
                </li>
                <li class="menu__item text-[1.75rem] md:text-xl lg:text-[22px]">
                    <RouterLink to="/evidence" class="menu__link" @click="toggleMenu">Témoignages</RouterLink>
                </li>
                <li class="menu__item text-[1.75rem] md:text-xl lg:text-[22px]">
                    <RouterLink to="/help" class="menu__link" @click="toggleMenu">Aides</RouterLink>
                </li>
                <li class="max-md:hidden menu__center-pts bg-blanc"></li>
            </ul>
        </nav>
    </header>
</template>

<style>
@media (max-width: 768px) {
    .menu {
        padding-top: 7vh;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    .menu__item {
        border: none;
        border-bottom: 1px solid #181831;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .menu {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .menu__item {
        border: 1px solid #181831;
    }
}

@media (max-width: 1024px) {
    .menu {
        visibility: hidden;
        position: absolute;
        display: grid;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        text-align: center;
        align-items: center;
        z-index: 2;
        transition: all 1s;
        transform: translateY(-100%);
    }

    .menu__link,
    .menu__item {
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .menu__item {
        width: 100%;
        height: 100%;
        font-weight: 500;
    }

    .menu__link {
        width: 75%;
        height: 75%;
    }

    .menu__center-pts {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 2vh;
        height: 2vh;
        z-index: 2;
    }

    .menu__nav-toggle,
    .cross-bar__parent {
        width: 30px;
        height: 6px;
        position: relative;
        top: 7px;
    }

    .menu__nav-toggle-bar,
    .menu__nav-toggle-bar::before,
    .cross-bar,
    .cross-bar::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #181831;
        position: absolute;
        border-radius: 2px;
        transition-duration: 0.5s;
        z-index: 3;
    }

    .menu__nav-toggle-bar::before {
        top: -10px;
    }

    .menu-open .menu {
        visibility: visible;
        transform: translateY(0);
    }

    .menu-open .menu__nav-toggle-bar,
    .menu-open .menu__nav-toggle-bar::before,
    .cross-bar,
    .cross-bar::before {
        transform: rotate(-135deg);
        height: 3px;
    }

    .menu-open .menu__nav-toggle-bar::before,
    .cross-bar::before {
        transform: rotate(90deg);
        top: 0;
    }

    .cross-bar,
    .cross-bar::before {
        background-color: #181831;
    }

    .cross-bar__parent {
        position: absolute;
        top: 5%;
        right: 5%;
    }
}

@media (min-width: 1025px) {
    .menu {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding-right: 2rem;
    }

    .menu__link {
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
    }

    .menu__link::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 2px;
        background-color: #b9ff66;
        transition: width 0.4s ease-in-out;
    }

    .menu__link:hover::after {
        width: 100%;
    }
}

/* Style spécifique pour iOS avec le header fixé */
.fixed-ios {
    position: -webkit-sticky;
    /* Position fixe */
    position: sticky;
    top: 0;
}
</style>