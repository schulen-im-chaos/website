<script>
	import HeadingMain from "../../../components/basic/HeadingMain.svelte";
	import HeadingSecondary from "../../../components/basic/HeadingSecondary.svelte";
	import { getJsonRaw } from "../../../lib/api.js";
	import { randomColor } from "../../../lib/utils.js";
	import Spinner from "../../../components/basic/Spinner.svelte";
	import ButtonGradient from "../../../components/basic/ButtonGradient.svelte";
	import { GH_STORAGE_BASE_URL } from "../../../globals.js";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	function getParam(key) {
		return $page.url.searchParams.get(key) || "";
	}

	let itemsPromise = null;
	const subject = getParam("s");
	onMount(() => {
		itemsPromise = getJsonRaw(`${GH_STORAGE_BASE_URL}-${subject}/index.json`);
	});
</script>

<HeadingMain>Mathe</HeadingMain>

{#await itemsPromise}
	<Spinner color="gray" />
{:then items}
	{#if items}
		{#each items as item}
			<HeadingSecondary>{item.name}</HeadingSecondary>
			<div class="grid grid-cols-1 lg:grid-cols-2 xxlg:grid-cols-3 justify-between gap-4 pb-4 px-2">
				{#each item.contents as file}
					<ButtonGradient
						href="{GH_STORAGE_BASE_URL}-{subject}/{item.name}/{file}"
						color={randomColor()}
						external
					>
						{file.slice(0, -4)}
					</ButtonGradient>
				{/each}
			</div>
		{:else}
			Keine Einträge gefunden.
		{/each}
	{:else if items === null}
		<!-- Data is null, that's expected because the DOM hasn't loaded yet -->
		<Spinner color="gray" />
	{:else}
		Unerwartete Datenstruktur erhalten.
	{/if}
{:catch error}
	Fehler: {error.message}
{/await}
