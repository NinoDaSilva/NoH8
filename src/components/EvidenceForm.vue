<script lang="ts" setup>
import { ref } from 'vue';
import { pb } from '@/backend';

const type = ref('');
const description = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const isSubmitting = ref(false);

// Création d'un nouveau témoignage
const createEvidence = async () => {
    isSubmitting.value = true;

    try {
        await pb.collection('evidence').create({
            type: type.value,
            approuved: false,
            description: description.value
        });

        // Réinitialiser les champs après soumission
        type.value = '';
        description.value = '';

        // Afficher le message de succès
        successMessage.value = "Merci ! Votre témoignage a bien été envoyé et sera examiné avant d'être publié.";
    } catch (error) {
        errorMessage.value = "Une erreur est survenue, veuillez réessayer ultérieurement.";
    } finally {
        setTimeout(() => {
            isSubmitting.value = false;
        }, 1000);
    }
}
</script>

<template>
    <div class="bg-gris p-[5%]">
        <form @submit.prevent="createEvidence" class="max-w-[500px]">
            <fieldset class="flex gap-10">
                <legend class="block mb-4 font-medium text-base">Vous avez été ?</legend>
                <div class="flex items-center gap-2">
                    <input type="radio" id="victime" name="type" value="victime" v-model="type" checked
                        class="w-5 h-5 accent-vert outline-blanc" />
                    <label for="victime">Victime</label>
                </div>
                <div class="flex items-center gap-2">
                    <input type="radio" id="temoin" name="type" value="temoin" v-model="type"
                        class="w-5 h-5 accent-vert outline-blanc" />
                    <label for="temoin">Témoin</label>
                </div>
            </fieldset>
            <div class="mt-10">
                <label for="description" class="block mb-3 font-medium text-base">Message</label>
                <textarea name="description" id="description" placeholder="Message" rows="8" class="w-full"
                    v-model="description" minlength="30" maxlength="3000" required></textarea>
            </div>
            <button type="submit" class="mt-5 w-full bg-noir text-blanc p-3 rounded-lg transition-all duration-300"
                :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : ''" :disabled="isSubmitting">
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
            <div class="text-center mt-4">
                <p v-if="successMessage">{{ successMessage }}</p>
                <p v-if="errorMessage">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
</template>
