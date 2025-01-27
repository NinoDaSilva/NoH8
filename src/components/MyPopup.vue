<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Liste des messages offensants
const messages = [
    "T'es vraiment nul, pourquoi tu postes ça ?",
    "Personne ne t'aime, arrête de te ridiculiser.",
    "C'est la chose la plus débile que j'ai vue.",
    "Sérieusement ? Tu penses que ça intéresse quelqu'un ?",
    "Ferme là !",
    "T'es vraiment pathétique, pourquoi tu te donnes en spectacle comme ça ?",
    "Franchement, ton avis, personne ne le demande.",
    "Encore toi ? Tout le monde en a marre de toi.",
    "Tu te crois intelligent(e), mais t'es juste ridicule.",
    "Même un enfant de 5 ans comprendrait mieux que toi.",
    "Personne ne te respectera jamais.",
    "Pourquoi tu continues ? Tous le monde s'en fou",
    "Qui t'as demandé(e) ?!",
    "Tu sais rien faire !",
    "T'es qu'une grosse m****",
];

// Niveau actuel pour `z-index`
let currentZIndex = 1;
// Tableau réactif pour suivre les messages affichés
const activeMessages = ref<{ id: number; message: string; x: number; y: number; zIndex: number }[]>([]);
const isQuoteVisible = ref(false); // Pour afficher le dicton
const isQuoteTwoVisible = ref(false);

// Intervalle entre l'affichage des messages (en ms)
function getRandomInterval(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Fonction pour afficher un nouveau message
function addRandomMessage() {
    // Si tous les messages sont déjà affichés, arrêter
    if (activeMessages.value.length >= messages.length) return;
    // Choisir un message aléatoire qui n'est pas encore affiché
    const availableMessages = messages.filter(
        (msg) => !activeMessages.value.some((m) => m.message === msg)
    );
    if (availableMessages.length === 0) return;

    const randomMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];

    // Ajouter le message avec une position aléatoire
    activeMessages.value.push({
        id: Date.now() + Math.random(), // Utilisé comme clé unique
        message: randomMessage,
        x: Math.random() * 50 + 10, // Position aléatoire en pourcentage
        y: Math.random() * 70 + 10, // Position aléatoire en pourcentage
        zIndex: currentZIndex++,
    });
}

// Fonction pour mettre un message au premier plan
function bringToFront(messageId: number) {
    const message = activeMessages.value.find((msg) => msg.id === messageId);
    if (message) {
        message.zIndex = currentZIndex++; // Augmente z-index pour ce message
    }
}

// Fonction pour supprimer un message
function removeMessage(id: number) {
    activeMessages.value = activeMessages.value.filter((msg) => msg.id !== id);
}

// Fonction pour lancer les messages et gérer les transitions
function timedMessages(duration: number) {
    const startTime = Date.now();

    function displayMessages() {
        if (Date.now() - startTime >= duration) {
            // Arrêter l'ajout de nouveaux messages après la durée
            fadeOutMessages();
            return;
        }

        addRandomMessage();
        setTimeout(displayMessages, getRandomInterval(500, 1000));
    }

    function fadeOutMessages() {
        let delay = 0;
        activeMessages.value.forEach((msg) => {
            setTimeout(() => removeMessage(msg.id), delay);
            delay += 120; // Messages disparaissent progressivement
        });

        setTimeout(() => {
            isQuoteVisible.value = true;
            setTimeout(() => {
                isQuoteVisible.value = false;
                isQuoteTwoVisible.value = true;
            }, 3500); // Afficher le dicton
            setTimeout(() => {
                isQuoteTwoVisible.value = false;
            }, 8000);
        }, delay);
    }

    displayMessages();
}

// Initialisation automatique à la création du composant
onMounted(() => {
    timedMessages(13000);
});
</script>

<template>
    <div class="relative h-screen p-[5%] overflow-hidden cursor-default">
        <!-- Messages affichés -->
        <div v-for="msg in activeMessages" :key="msg.id"
            class="absolute max-w-sm bg-bleu text-white p-4 rounded-xl shadow-xl flex items-start space-x-4 transition duration-300 ease-in-out"
            :style="{ top: `${msg.y}%`, left: `${msg.x}%`, zIndex: msg.zIndex }" @click="bringToFront(msg.id)">
            <!-- Contenu du message -->
            <div>
                <p class="font-bold">@AnonymUser</p>
                <p>{{ msg.message }}</p>
            </div>
            <button @click.stop="removeMessage(msg.id)" class="ml-4 transition duration-200">
                ✖
            </button>
        </div>
        <!-- Dicton -->
        <div v-if="isQuoteVisible"
            class="absolute p-[5%] text-center inset-0 flex items-center justify-center text-blanc text-[22px] md:text-xl font-semibold opacity-0 transition-opacity duration-500"
            :class="{ 'opacity-100': isQuoteVisible }">
            <p>Les mots sur Internet laissent des traces...</p>
        </div>
        <div v-if="isQuoteTwoVisible"
            class="absolute p-[5%] text-center inset-0 flex items-center justify-center text-blanc text-[22px] md:text-xl font-semibold opacity-0 transition-opacity duration-500"
            :class="{ 'opacity-100': isQuoteTwoVisible }">
            <p>Mais leurs conséquences peuvent marquer à jamais</p>
        </div>
    </div>
</template>