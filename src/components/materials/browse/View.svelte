<script>
	import { getJson } from "$lib/api.js";
	import Link from "../../basic/Link.svelte";

	import { page } from "$app/stores";
	import ItemCard from "./ItemCard.svelte";
	import Spinner from "../../basic/Spinner.svelte";
	import ParagraphDefault from "../../basic/ParagraphDefault.svelte";
	import { onMount } from "svelte";

	let invalid = false;

	function getParam(key) {
		return $page.url.searchParams.get(key) || "";
	}

	let itemsPromise = null;
	let subject = "";
	let grade = "";
	let mounted = false;

	onMount(() => (mounted = true));

	$: grade = $page.url.searchParams.get("grade_number") || "";
	$: subject = $page.url.searchParams.get("subject") || "";
	$: search = $page.url.searchParams.get("search") || "";
	$: if (grade == "" && subject == "" && search == "") {
		itemsPromise = { data: [] };
		invalid = true;
	} else {
		invalid = false;
	}
	$: if (mounted && !invalid && (grade || subject || search)) {
		itemsPromise = getJson(
			`/v1/filter/item?system=${getParam(
				"system"
			)}&grade_number=${grade}&subject=${subject}&search=${search}`
		);
	}
</script>

{#await itemsPromise}
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
		<Spinner color="gray" />
	</div>
{:then items}
	{#if items && items.data}
		{#if !invalid}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
				{#each items.data as item (item.id)}
					<ItemCard
						href={item.link}
						title={item.title}
						subject={item.subject}
						grade={item.grade}
						previewSrc={item.previewLink}
					>
						{item.summary}
					</ItemCard>
				{:else}
					<ParagraphDefault>
						Es gibt leider im Moment noch keine Materialien in dieser Kategorie :( <br />
						Das kannst du ändern, indem du eigene Materialien an uns <Link
							href="/materials/contribute">schickst</Link
						> :)
					</ParagraphDefault>
				{/each}
			</div>
		{:else}
			<ParagraphDefault>
				Du hast weder Klassenstufe, Fach oder einen Suchbegriff angegeben. Bitte ändere deine Angabe
				und versuche es erneut.
			</ParagraphDefault>
		{/if}
	{:else if items === null}
		<!-- Data is null, that's expected because the DOM hasn't loaded yet -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
			<Spinner color="gray" />
		</div>
	{:else}
		<!-- Data structure is not as expected -->
		<ParagraphDefault>Unexpected data structure received.</ParagraphDefault>
	{/if}
{:catch error}
	<ParagraphDefault>
		Fehler: {error.message}
	</ParagraphDefault>
{/await}
