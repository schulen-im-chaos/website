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
<div class="grid md:grid-cols-3 2xl:grid-cols-6 gap-6">
	{#each db.subjects as subject}
		<a href="/materials/kind/{subject}" class="card w-fit bg-initial card-hover overflow-hidden">
			<header>
				<img
					src="img/subjects/{subject}.jpg"
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
						href="/materials/contribute"
						data-sveltekit-preload-data="hover">welche</a
					>! hinzu!
				</p>
			</div>
		</aside>
	{/each}
</div>
