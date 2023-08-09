<script>
	import HeadingMain from "../components/basic/HeadingMain.svelte";
	import ParagraphDefault from "../components/basic/ParagraphDefault.svelte";
	import Link from "../components/basic/Link.svelte";
	import { DISCORD_LINK } from "../globals";
</script>

<svelte:head>
	<title>Schulen im Chaos</title>
	<meta name="description" content="Willkommen auf der Homepage von Schulen im Chaos!" />
</svelte:head>

<HeadingMain>Willkommen auf der Homepage von Schulen im Chaos!</HeadingMain>

<ParagraphDefault>
	Schulen im Chaos ist eine Plattform, auf der Schüler sich gegenseitig unterstützen können. Dies
	kann sowohl durch Austausch auf unserem <Link href={DISCORD_LINK} external>Discord-Server</Link> als
	auch durch das Teilen der <Link href="/materials">Lernmaterialien</Link> über die Webseite geschehen.
</ParagraphDefault>

<ParagraphDefault>
	Bitte beachte, dass die Webseite sich derzeit noch im Aufbau befindet und eine Funktionen nicht in
	vollem Umfang verfügbar sind. Falls bei der Nutzung Probleme auftreten sollten oder du
	Verbesserungsvorschläge mit uns teilen möchtest, kannst du dies über die
	<Link href="/contact">Kontaktseite</Link> tun.
</ParagraphDefault>
