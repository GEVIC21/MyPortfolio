<template>
	<!-- UApp enveloppe toute votre application pour activer les fonctionnalités de Nuxt UI -->
	<UApp>
		<div>
			<!-- Le composant qui gère l'accessibilité des routes (indispensable) -->
			<NuxtRouteAnnouncer />

			<!-- Le composant qui active le système de layouts -->
			<NuxtLayout>
				<!-- Le composant qui affiche le contenu de la page actuelle -->
				<NuxtPage />
			</NuxtLayout>
		</div>
	</UApp>
</template>
