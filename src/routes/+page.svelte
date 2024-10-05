<script>
	import { DiscordURL } from '$lib/utils';
</script>

<svelte:head>
	<title>Schulen Im Chaos</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<h2 class="h2">Willkommen auf der Homepage von Schulen im Chaos!</h2>

<hr />

<h3 class="h3">Newsletter</h3>

<p>
	<a class="anchor" href="https://forms.office.com/r/iRAR5mKAuD" target="_blank">Abonniere</a> unseren
	Newsletter, um auf dem Laufenden zu bleiben und Infos zu erhalten, wenn neue Materialien hochgeladen
	oder neue Funktionen hinzugefügt werden.
</p>

<hr />

<p>
	Schulen im Chaos ist eine Plattform, auf der Schüler sich gegenseitig unterstützen können. Dies
	kann sowohl durch Austausch auf unserem <a class="anchor" target="_blank" href={DiscordURL}
		>Discord Server</a
	>
	als auch durch das Teilen der
	<a class="anchor" href="/materials" data-sveltekit-preload-data="hover">Lernmaterialien</a> über die
	Webseite geschehen.
</p>

<p>
	Bitte beachte, dass die Webseite sich derzeit noch im Aufbau befindet und einige Funktionen noch
	nicht in vollem Umfang verfügbar sind. Falls bei der Nutzung Probleme auftreten sollten oder du
	Verbesserungsvorschläge mit uns teilen möchtest, freuen wir uns auf dein <a
		class="anchor"
		href="/contact"
		data-sveltekit-preload-data="hover">Feedback</a
	>!
</p>
