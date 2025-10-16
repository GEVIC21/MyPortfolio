<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<UCard
			v-for="project in projects"
			:key="project.id"
			class="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
			<NuxtImg
				:src="project.image"
				:alt="project.title"
				class="w-full h-48 object-cover"
				format="webp"
				loading="lazy" />
			<div class="p-6 flex-1 flex flex-col">
				<h3
					class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
					{{ project.title }}
				</h3>
				<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
					{{ project.description }}
				</p>
				<div class="flex flex-wrap gap-2 mb-4">
					<UBadge
						v-for="tag in project.tags"
						:key="tag"
						variant="soft"
						color="gray"
						size="xs">
						{{ tag }}
					</UBadge>
				</div>
				<div class="flex gap-2 mt-auto">
					<UButton
						:to="project.githubUrl"
						icon="i-simple-icons-github"
						variant="ghost"
						color="gray"
						size="sm"
						target="_blank"
						rel="noopener noreferrer">
						Code
					</UButton>
					<UButton
						v-if="project.liveUrl"
						:to="project.liveUrl"
						icon="i-heroicons-arrow-top-right-on-square"
						variant="ghost"
						color="gray"
						size="sm"
						target="_blank"
						rel="noopener noreferrer">
						Live
					</UButton>
				</div>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/portfolio";

defineProps<{
	projects: Project[];
}>();
</script>
