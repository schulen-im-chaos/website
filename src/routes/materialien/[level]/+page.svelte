<script lang="ts">
	import db from '$lib/data.json';
	import Notice from '../Notice.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Lernmaterialien - {data.level}</title>
	<meta name="description" content="Lernmatierialien für die gymnasiale Oberstufe" />
</svelte:head>

<h2 class="h2">Lernmaterialien - {data.level}</h2>

<Notice />

<div class="grid md:grid-cols-3 2xl:grid-cols-6 gap-6">
	{#each data.subjects as subject}
		<a
			href="/materialien/{data.level}/{subject}"
			class="card w-fit bg-initial card-hover overflow-hidden"
		>
			<header>
				<img
					src="/img/subjects/{subject}.jpg"
					alt="{subject} Symbolbild"
					class="bg-black/50 w-full"
				/>
			</header>
			<div class="p-4 space-y-4 text-xl font-bold">{subject}</div>
		</a>
	{:else}
		<aside class="alert variant-filled-warning !m-0">
			<!-- Icon -->
			<div><i class="fa-solid fa-triangle-exclamation"></i></div>
			<!-- Message -->
			<div class="alert-message">
				<h3 class="h3">Noch keine Lernmaterialien!</h3>
				<p>
					Warte bis welche hinzugefügt werden oder füge selber <a
						class="anchor"
						href="/materialien/beitragen"
						data-sveltekit-preload-data="hover">welche</a
					>! hinzu!
				</p>
			</div>
		</aside>
	{/each}
</div>
