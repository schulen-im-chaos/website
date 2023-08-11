<script>
	import HeadingMain from "../../../components/basic/HeadingMain.svelte";
	import View from "../../../components/materials/browse/View.svelte";
	import HeadingSecondary from "../../../components/basic/HeadingSecondary.svelte";
	import Button from "../../../components/basic/Button.svelte";
	import Dropdown from "../../../components/basic/Dropdown.svelte";

	let selectedOptions = [];
</script>

<svelte:head>
	<title>Lernmaterialien</title>
	<meta
		name="description"
		content="Lernmaterialien zu verschiedenen Fächern und Klassenstufe online finden."
	/>
</svelte:head>

<HeadingMain>Lernmaterialien</HeadingMain>

<Button href="/materials" color="blue">
	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 mr-2" viewBox="0 0 16 16">
		<path
			d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
		/>
	</svg>
	Übersicht
</Button>

<!-- Todo: Add Search - Search is also searching over tags -->

<div class="flex items-center gap-4 pb-4 pt-4">
	<HeadingSecondary>Filter:</HeadingSecondary>
	<Dropdown
		bind:selectedOptions
		options={["1", "2", "3", "4", "5", "6", "7", "8", "9937459738475873485738475"]}
		selectedOption={"Apple"}
		multiSelect={true}
		fun={() => console.log(selectedOptions)}
		id={"filer"}
		label={"Alle Fächer"}
	/>
</div>

<View />
