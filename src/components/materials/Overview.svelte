<script>
	import { onMount } from "svelte";
	import { getJson } from "$lib/api";

	import Spinner from "../basic/Spinner.svelte";
	import ButtonGradient from "../basic/ButtonGradient.svelte";
	import HeadingSecondary from "../basic/HeadingSecondary.svelte";
	import ParagraphDefault from "../basic/ParagraphDefault.svelte";

	export let type = "grade";
	export let system = "";

	let itemsPromise = null;
	onMount(() => {
		itemsPromise = getJson(`/v2/list/${type}`);
	});
</script>

<HeadingSecondary>
	{type == "grade" ? "Klassen" : "Fächer"}
</HeadingSecondary>

<div
	class="grid {type == 'grade'
		? 'grid-cols-4 md:grid-cols-6'
		: 'grid-cols-2 md:grid-cols-3 xlg:grid-cols-4'} justify-between gap-4 pb-4"
>
	{#await itemsPromise}
		<Spinner color="gray" />
	{:then items}
		{#if items && items.data}
			{#each items.data as item}
				<ButtonGradient
					href="/materials/browse?system={system}&{type == 'grade'
						? `grade_number=${item.grade_number.number}`
						: `subject=${item.id}`}"
					color={type == "grade" ? item.grade_number.color : item.color}
				>
					{type == "grade" ? item.grade_number.number : item.name}
				</ButtonGradient>
			{:else}
				<ParagraphDefault>Keine Einträge gefunden.</ParagraphDefault>
			{/each}
		{:else if items === null}
			<!-- Data is null, that's expected because the DOM hasn't loaded yet -->
			<Spinner color="gray" />
		{:else}
			<!-- Data structure is not as expected -->
			<ParagraphDefault>Unerwartete Datenstruktur erhalten.</ParagraphDefault>
		{/if}
	{:catch error}
		<ParagraphDefault>
			Fehler: {error.message}
		</ParagraphDefault>
	{/await}
</div>
