<script lang="ts">
	import db from '$lib/data.json';
</script>

<svelte:head>
	<title>Lernmaterialien</title>
	<meta name="description" content="Materials" />
</svelte:head>

<h2 class="h2">Lernmaterialien</h2>
<p>
	Diese Lernmaterialien wurden von anderen Schüler*innen erstellt, um Inhalte auf eine verständliche
	Art und Weise kurz zu erklären.
</p>
<p>Derzeit wirst Du hier noch nicht so viel finden und deshalb brauchen wir Deine Hilfe!</p>
<p>
	Hast Du eigene Lernzettel, die du mit anderen teilen willst? Dann geht's <a
		class="anchor"
		href="/materials/contribute"
		data-sveltekit-preload-data="hover">hier lang</a
	>!
</p>
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
	{#each db.subjects as subject}
		<a class="btn variant-filled" href="/materials/kind/{subject}">{subject}</a>
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
						href="/materials/contribute"
						data-sveltekit-preload-data="hover">welche</a
					>! hinzu!
				</p>
			</div>
		</aside>
	{/each}
</div>
