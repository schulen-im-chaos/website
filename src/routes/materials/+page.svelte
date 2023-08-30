<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import Link from "../../components/basic/Link.svelte";
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import ParagraphDefault from "../../components/basic/ParagraphDefault.svelte";
	import Overview from "../../components/materials/Overview.svelte";
	import HeadingSecondary from "../../components/basic/HeadingSecondary.svelte";
	import Dropdown from "../../components/basic/Dropdown.svelte";
	import Search from "../../components/materials/Search.svelte";

	let availableSystems = [{ name: "Niedersachsen", value: "nds" }];

	function getParam(key) {
		return $page.url.searchParams.get(key) || "";
	}

	let system = availableSystems.find((obj) => obj.value == getParam("system"));
</script>

<svelte:head>
	<title>Lernmaterialien</title>
	<meta
		name="description"
		content="Übersicht der Lernmaterialien, die von anderen Schülern erstellt wurden, um Inhalte auf verständliche Art und Weise zu erklären."
	/>
</svelte:head>

<HeadingMain>Lernmaterialien</HeadingMain>

<ParagraphDefault>
	Diese Lernmaterialien wurden von anderen Schüler*innen erstellt, um Inhalte auf eine verständliche
	Art und Weise kurz zu erklären.
</ParagraphDefault>

<ParagraphDefault>
	Derzeit wirst Du hier noch nicht so viel finden und deshalb brauchen wir Deine Hilfe!
</ParagraphDefault>

<ParagraphDefault>
	Hast Du eigene Lernzettel, die du mit anderen teilen willst? Dann geht's
	<Link href="/materials/contribute">hier lang</Link>!
</ParagraphDefault>

<!-- Todo: Add Search -->

<div class="flex justify-between items-center">
	<HeadingSecondary>Übersicht</HeadingSecondary>
	<Dropdown
		options={availableSystems}
		bind:selectedOption={system}
		id={"system"}
		label={"Niedersachsen"}
		color={undefined}
		fun={() => {
			goto(`/materials?system=${system.value}`, { replaceState: true });
		}}
	/>
</div>

<Search system={system ? system.value : ""} />

<Overview system={system ? system.value : ""} type="grade" />

<Overview system={system ? system.value : ""} type="subject" />
