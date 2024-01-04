<script lang="ts">
	export let data;
</script>

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
	{#each data.subjects as subject}
		<a class="btn variant-filled" href="/materials/kind/{subject}">{subject}</a>
	{/each}
</div>
