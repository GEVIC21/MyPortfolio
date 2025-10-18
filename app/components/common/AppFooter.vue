<!-- app/components/AppFooter.vue -->
<template>
    <!-- On utilise le même fond que le header (état scrollé) pour une parfaite harmonie -->
    <UFooter
        class="bg-emerald-800 border-t border-emerald-700/50">
        <template #left>
            <!-- Le texte utilise la même couleur secondaire que les icônes du header pour la cohérence -->
            <p class="text-stone-300 text-sm">
                © {{ new Date().getFullYear() }} Mon Portfolio. Fait avec ❤️ et Nuxt.
            </p>
        </template>

        <!-- Les liens de navigation gardent le style "stone" et l'effet de survol du header -->
        <template #center>
            <nav class="flex gap-x-4">
                <UButton 
                    to="/projects" 
                    variant="ghost" 
                    color="stone" 
                    size="sm"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10">
                    Projets
                </UButton>
                <UButton 
                    to="/about" 
                    variant="ghost" 
                    color="stone" 
                    size="sm"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10">
                    À propos
                </UButton>
                <UButton 
                    to="/contact" 
                    variant="ghost" 
                    color="stone" 
                    size="sm"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10">
                    Contact
                </UButton>
            </nav>
        </template>

        <!-- Le slot droit regroupe les actions secondaires (réseaux sociaux, retour en haut) -->
        <template #right>
            <div class="flex items-center gap-2">
                <!-- Liens vers les réseaux sociaux avec le même style et le même effet de survol que le header -->
                <UButton
                    to="https://github.com/VOTRE_PSEUDO"
                    target="_blank"
                    variant="ghost"
                    color="stone"
                    size="sm"
                    icon="i-simple-icons-github"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10"
                    aria-label="Lien vers mon profil GitHub" />
                <UButton
                    to="https://linkedin.com/in/VOTRE_PROFIL"
                    target="_blank"
                    variant="ghost"
                    color="stone"
                    size="sm"
                    icon="i-simple-icons-linkedin"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10"
                    aria-label="Lien vers mon profil LinkedIn" />
                <UButton
                    to="https://twitter.com/VOTRE_PSEUDO"
                    target="_blank"
                    variant="ghost"
                    color="stone"
                    size="sm"
                    icon="i-simple-icons-x"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10"
                    aria-label="Lien vers mon profil X (Twitter)" />

                <!-- Bouton pour remonter en haut de la page, avec le même effet de survol -->
                <UButton
                    @click="scrollToTop"
                    variant="ghost"
                    color="stone"
                    size="sm"
                    icon="i-heroicons-arrow-up"
                    class="transition-all duration-200 text-stone-300 hover:text-white hover:bg-white/10"
                    aria-label="Retour en haut de la page" />
            </div>
        </template>
    </UFooter>
</template>

<script setup lang="ts">
// Fonction pour remonter en haut de la page avec un défilement fluide
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
</script>