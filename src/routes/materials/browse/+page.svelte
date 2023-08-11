<script>
	import HeadingMain from "../../../components/basic/HeadingMain.svelte";
	import View from "../../../components/materials/browse/View.svelte";
	import HeadingSecondary from "../../../components/basic/HeadingSecondary.svelte";
	import Button from "../../../components/basic/Button.svelte";
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

<div class="flex items-center gap-4">
	<HeadingSecondary>Filter:</HeadingSecondary>
	<div>Filter kommen bald :)</div>
</div>

<View />
