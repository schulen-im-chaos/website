<script>
	import Link from "../../components/basic/Link.svelte";
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import ParagraphDefault from "../../components/basic/ParagraphDefault.svelte";
	import Overview from "../../components/materials/Overview.svelte";
	import HeadingSecondary from "../../components/basic/HeadingSecondary.svelte";
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

<div class="flex justify-between items-center">
	<HeadingSecondary>Übersicht</HeadingSecondary>
	<!--<div class="relative">
		<Button class="text-slate-950 dark:text-slate-100"><Chevron>Niedersachsen</Chevron></Button>
		<Dropdown>
			<DropdownItem>Niedersachsen</DropdownItem>
		</Dropdown>
	</div>-->
</div>

<Overview type="grade" />

<Overview type="subject" />
