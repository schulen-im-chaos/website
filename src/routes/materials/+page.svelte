<script>
	import Link from "../../components/basic/Link.svelte";
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import ParagraphDefault from "../../components/basic/ParagraphDefault.svelte";
	import HeadingSecondary from "../../components/basic/HeadingSecondary.svelte";
	import ButtonGradient from "../../components/basic/ButtonGradient.svelte";
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

<HeadingSecondary>Fächer</HeadingSecondary>

<div class="grid grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 justify-between gap-4 pb-4">
	<ButtonGradient href="/materials/subject?s=mathe" color="blue">Mathe</ButtonGradient>
	<ButtonGradient href="/materials/subject?s=physik" color="cyan">Physik</ButtonGradient>
</div>
