<script>
	import { onMount } from "svelte";

	import { getJson } from "$lib/api";

	import Spinner from "../basic/Spinner.svelte";
	import ButtonGradient from "../basic/ButtonGradient.svelte";
	import HeadingSecondary from "../basic/HeadingSecondary.svelte";

	export let type = "grade";

	let items = [];

	onMount(async () => {
		try {
			items = (await getJson(`/v1/list-all/${type == "grade" ? "grade_number" : type}`)).data;
			document.getElementById(`loading-spinner-${type}`).remove();
		} catch {
			document.getElementById(`loading-spinner-${type}`).innerText = "failed to load class list";
		}
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
	<div id="loading-spinner-{type}">
		<Spinner color="gray" />
	</div>
	{#each items as item}
		<ButtonGradient
			href="/materials/browse?{type == 'grade'
				? `grade_number=${item.number}`
				: `subject=${item.name}`}&system=nds"
			color={item.color}
		>
			{type == "grade" ? item.number : item.name_de}
		</ButtonGradient>
	{/each}
</div>
