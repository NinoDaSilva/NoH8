<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// Liste des messages offensants
const messages = [
    "T'es vraiment nul(le), pourquoi tu postes ça ?",
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
    "Tu sais rien faire !"
];

// Niveau actuel pour `z-index`
let currentZIndex = 1;

// Tableau réactif pour suivre les messages affichés
const activeMessages = ref<{ id: number; message: string; x: number; y: number; zIndex: number }[]>([]);

// Intervalle entre l'affichage des messages (en ms)
function getRandomInterval(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

const randomDelay = getRandomInterval(600, 1000);

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
        x: Math.random() * 60 + 10, // Position aléatoire en pourcentage (10% à 90%)
        y: Math.random() * 60 + 10, // Position aléatoire en pourcentage (10% à 90%)
        zIndex: currentZIndex++,
    });
}

// Fonction pour lancer l'affichage progressif des messages
function displayMessages() {
    if (activeMessages.value.length >= messages.length) return;
    addRandomMessage();
    setTimeout(displayMessages, randomDelay);
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
    setTimeout(displayMessages, randomDelay);
}

// Initialisation automatique à la création du composant
onMounted(() => {
    displayMessages();
});
</script>

<template>
    <div class="relative h-screen overflow-hidden cursor-default">
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
    </div>
</template>