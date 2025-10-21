<template>
    <div ref="contactPageRef" class="opacity-0">
        <!-- Hero Section avec Image Illustrative -->
        <div class="relative h-96 lg:h-[500px] overflow-hidden">
            <NuxtImg
                src="/illustration-contact.jpg"
                alt="Illustration contact"
                class="w-full h-full object-cover"
                format="webp" />
            <div
                class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/80 to-transparent" />
            <div class="absolute inset-0 flex items-center justify-center">
                <UContainer class="text-center text-white">
                    <UBadge
                        label="Contact"
                        variant="subtle"
                        size="lg"
                        class="mb-4 bg-emerald-800/90 text-emerald-50 backdrop-blur-sm border-emerald-700" />
                    <h1 class="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
                        Contactez-moi
                    </h1>
                    <p class="text-xl lg:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                        Vous avez un projet en tête ? Une opportunité à discuter ? N'hésitez pas à m'envoyer un message !
                    </p>
                </UContainer>
            </div>
        </div>

        <UContainer class="py-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Section Informations -->
                <div class="space-y-8">
                    <div>
                        <h2 class="text-3xl font-bold mb-6 text-emerald-900 dark:text-emerald-100 flex items-center">
                            <Icon name="i-heroicons-chat-bubble-left-right" class="mr-3 text-emerald-500" />
                            Parlons-en
                        </h2>
                        <p class="text-lg text-emerald-700 dark:text-emerald-300 mb-8 leading-relaxed">
                            Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou de possibilités de collaboration. N'hésitez pas à me contacter !
                        </p>
                    </div>

                    <!-- Carte d'Informations -->
                    <UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
                        <template #header>
                            <h3 class="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Informations de contact</h3>
                        </template>
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                                    <Icon name="i-heroicons-envelope" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-emerald-900 dark:text-emerald-100">Email</p>
                                    <a href="mailto:contact.ndilbe@example.com" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                                        contact.ndilbe@example.com
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                                    <Icon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-emerald-900 dark:text-emerald-100">Téléphone/WhatsApp</p>
                                    <a href="tel:+23567389181" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                                        +235 67 38 91 81
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                                    <Icon name="i-heroicons-map-pin" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <p class="font-medium text-emerald-900 dark:text-emerald-100">Localisation</p>
                                    <p class="text-emerald-600 dark:text-emerald-400">Tchad</p>
                                </div>
                            </div>
                        </div>
                    </UCard>

                    <!-- Réseaux Sociaux -->
                    <UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
                        <template #header>
                            <h3 class="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Retrouvez-moi sur</h3>
                        </template>
                        <div class="flex justify-center space-x-4">
                            <UButton
                                v-for="social in socials"
                                :key="social.name"
                                :to="social.url"
                                :icon="social.icon"
                                variant="ghost"
                                color="gray"
                                size="lg"
                                target="_blank"
                                class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300" />
                        </div>
                    </UCard>
                </div>

                <!-- Section Formulaire -->
                <div>
                    <UCard class="shadow-sm border-emerald-200 dark:border-emerald-700">
                        <template #header>
                            <h3 class="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Envoyez un message</h3>
                        </template>
                        
                        <!-- Formulaire HTML natif pour éviter les erreurs UFormGroup -->
                        <form @submit.prevent="onSubmit" class="space-y-6">
                            <div class="space-y-2">
                                <label for="name" class="block text-sm font-medium text-emerald-900 dark:text-emerald-100">
                                    Nom complet
                                </label>
                                <UInput
                                    id="name"
                                    v-model="state.name"
                                    placeholder="Votre nom"
                                    size="lg"
                                    class="w-full"
                                    color="emerald" />
                            </div>

                            <div class="space-y-2">
                                <label for="email" class="block text-sm font-medium text-emerald-900 dark:text-emerald-100">
                                    Email
                                </label>
                                <UInput
                                    id="email"
                                    v-model="state.email"
                                    type="email"
                                    placeholder="votre.email@example.com"
                                    size="lg"
                                    class="w-full"
                                    color="emerald" />
                            </div>

                            <div class="space-y-2">
                                <label for="subject" class="block text-sm font-medium text-emerald-900 dark:text-emerald-100">
                                    Sujet
                                </label>
                                <UInput
                                    id="subject"
                                    v-model="state.subject"
                                    placeholder="Sujet du message"
                                    size="lg"
                                    class="w-full"
                                    color="emerald" />
                            </div>

                            <div class="space-y-2">
                                <label for="message" class="block text-sm font-medium text-emerald-900 dark:text-emerald-100">
                                    Message
                                </label>
                                <UTextarea
                                    id="message"
                                    v-model="state.message"
                                    placeholder="Votre message..."
                                    :rows="6"
                                    size="lg"
                                    class="w-full"
                                    color="emerald" />
                            </div>

                            <UButton
                                type="submit"
                                size="lg"
                                block
                                :loading="isSubmitting"
                                class="bg-emerald-600 hover:bg-emerald-700 text-white">
                                <template v-if="isSubmitting">
                                    Envoi en cours...
                                </template>
                                <template v-else>
                                    Envoyer le message
                                </template>
                            </UButton>
                        </form>
                    </UCard>

                    <!-- Message de confirmation -->
                    <div v-if="showConfirmation" class="mt-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 rounded-lg">
                        <div class="flex items-center">
                            <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3" />
                            <p class="text-emerald-800 dark:text-emerald-200">
                                Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, reactive, ref } from "vue";

const state = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const isSubmitting = ref(false);
const showConfirmation = ref(false);

// Réseaux sociaux
const socials = [
    { 
        name: "GitHub", 
        url: "https://github.com", 
        icon: "i-simple-icons-github" 
    },
    { 
        name: "LinkedIn", 
        url: "https://linkedin.com", 
        icon: "i-simple-icons-linkedin" 
    },
    { 
        name: "WhatsApp", 
        url: "https://wa.me/23567389181", 
        icon: "i-simple-icons-whatsapp" 
    },
];

const onSubmit = async () => {
    isSubmitting.value = true;
    
    // Simulation d'envoi de formulaire
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Afficher la confirmation
    showConfirmation.value = true;
    isSubmitting.value = false;
    
    // Réinitialiser le formulaire
    state.name = "";
    state.email = "";
    state.subject = "";
    state.message = "";
    
    // Masquer la confirmation après 5 secondes
    setTimeout(() => {
        showConfirmation.value = false;
    }, 5000);
};

useHead({
    title: "Contact - NDILBE DOUVIC",
    meta: [
        {
            name: "description",
            content: "Contactez-moi pour discuter de vos projets. Développeur Full-Stack basé au Tchad.",
        },
    ],
});

// Animation GSAP
const contactPageRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (contactPageRef.value) {
        gsap.to(contactPageRef.value, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
        });
    }
});
</script>