<script>
	import { onMount } from "svelte";

	import { getJson } from "$lib/api";

	import Spinner from "../basic/Spinner.svelte";
	import ButtonGradient from "../basic/ButtonGradient.svelte";
	import HeadingSecondary from "../basic/HeadingSecondary.svelte";

	export let type = "grade";

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
		<!-- Loading Spinner -->
		<div id="loading-spinner-{type}">
			<Spinner color="gray" />
		</div>
	{:then items}
		<!-- Display the items -->
		{#if items && items.data}
			{#each items.data as item}
				<ButtonGradient
					href="/materials/browse?{type == 'grade'
						? `grade_number=${item.number}`
						: `subject=${item.name}`}&system=nds"
					color={item.color}
				>
					{type == "grade" ? item.number : item.name_de}
				</ButtonGradient>
			{:else}
				<!-- No items found -->
				<div id="no-items-{type}">No items found.</div>
			{/each}
		{:else if items === null}
			<!-- Data is null, that's expected because the DOM hasn't loaded yet -->
			<div id="loading-spinner-{type}">
				<Spinner color="gray" />
			</div>
		{:else}
			<!-- Data structure is not as expected, this can/should be replaced with a spinner -->
			<div id="unexpected-structure-{type}">Unexpected data structure received.</div>
		{/if}
	{:catch error}
		<!-- Error message -->
		<div id="error-{type}">
			{("Fehler: ", error.message)}
		</div>
	{/await}
</div>
