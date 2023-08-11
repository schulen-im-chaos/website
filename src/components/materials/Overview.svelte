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
		itemsPromise = getJson(`/v1/list-all/${type == "grade" ? "grade_number" : type}`);
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
					href="/materials/browse?{type == 'grade'
						? `grade_number=${item.number}`
						: `subject=${item.name}`}&system={system}"
					color={item.color}
				>
					{type == "grade" ? item.number : item.name_de}
				</ButtonGradient>
			{:else}
				<ParagraphDefault>No items found.</ParagraphDefault>
			{/each}
		{:else if items === null}
			<!-- Data is null, that's expected because the DOM hasn't loaded yet -->
			<Spinner color="gray" />
		{:else}
			<!-- Data structure is not as expected -->
			<ParagraphDefault>Unexpected data structure received.</ParagraphDefault>
		{/if}
	{:catch error}
		<ParagraphDefault>
			Fehler: {error.message}
		</ParagraphDefault>
	{/await}
</div>
