<script>
	import { getJson } from "$lib/api.js";
	import Link from "../../basic/Link.svelte";

	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import ItemCard from "./ItemCard.svelte";
	import Spinner from "../../basic/Spinner.svelte";
	import ParagraphDefault from "../../basic/ParagraphDefault.svelte";

	let invalid = false;

	function getParam(key) {
		return $page.url.searchParams.get(key) || "";
	}

	let itemsPromise = null;

	onMount(async () => {
		if (getParam("subject") == "" && getParam("grade_number") == "") {
			itemsPromise = { data: [] };
			invalid = true;
			return;
		}

		itemsPromise = await getJson(
			`/v1/filter/item?system=${getParam("system")}&grade_number=${getParam(
				"grade_number"
			)}&subject=${getParam("subject")}`
		);
	});
</script>

{#await itemsPromise}
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
		<Spinner color="gray" />
	</div>
{:then items}
	{#if items && items.data}
		{#if !invalid}
			{#each items.data as item (item.id)}
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
					<ItemCard
						href={item.link}
						title={item.title}
						subject={item.subject}
						grade={item.grade}
						previewSrc={item.previewLink}
					>
						{item.summary}
					</ItemCard>
				</div>
			{:else}
				<ParagraphDefault>
					Es gibt leider im Moment noch keine Materialien in dieser Kategorie :(
				</ParagraphDefault>

				<ParagraphDefault>
					Das kannst du ändern, indem du eigene Materialien an uns <Link
						href="/materials/contribute">schickst</Link
					> :)
				</ParagraphDefault>
			{/each}
		{:else}
			<ParagraphDefault>
				Du hast weder Klassenstufe noch Fach angegeben. Bitte ändere deine Angabe und versuche es
				erneut.
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
