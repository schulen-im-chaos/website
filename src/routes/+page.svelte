<script>
	import { DiscordURL, NewsletterSignupURL } from '$lib/utils';

	function showNewsletterIframe() {
		const iframe = document.getElementById('newsletter-iframe');
		if (iframe == null) {
			return;
		}
		iframe.style.display = 'inline';
	}
</script>

<svelte:head>
	<title>Schulen Im Chaos</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<h2 class="h2">Willkommen auf der Homepage von Schulen im Chaos!</h2>

<div class="border-2 border-solid border-gray-500 rounded-lg p-4">
	<h3 class="h3">Newsletter</h3>

	<iframe
		title="Newsletter Anmeldung"
		id="newsletter-iframe"
		width="500px"
		height="600px"
		src="{NewsletterSignupURL}&embed=true"
		frameborder="0"
		marginwidth="0"
		marginheight="0"
		style="display: none; border: none; max-width:100%; max-height:100vh"
		allowfullscreen
	>
	</iframe>

	<p>
		<button class="anchor" on:click={() => showNewsletterIframe()}>Abonniere</button> unseren Newsletter,
		um auf dem Laufenden zu bleiben und Infos zu erhalten, wenn neue Materialien hochgeladen oder neue
		Funktionen hinzugefügt werden.
	</p>
</div>

<p>
	Schulen im Chaos ist eine Plattform, auf der Schüler sich gegenseitig unterstützen können. Dies
	kann sowohl durch Austausch auf unserem <a class="anchor" target="_blank" href={DiscordURL}
		>Discord Server</a
	>
	als auch durch das Teilen der
	<a class="anchor" href="/materialien" data-sveltekit-preload-data="hover">Lernmaterialien</a> über
	die Webseite geschehen.
</p>

<p>
	Bitte beachte, dass die Webseite sich derzeit noch im Aufbau befindet und einige Funktionen noch
	nicht in vollem Umfang verfügbar sind. Falls bei der Nutzung Probleme auftreten sollten oder du
	Verbesserungsvorschläge mit uns teilen möchtest, freuen wir uns auf dein <a
		class="anchor"
		href="/kontakt"
		data-sveltekit-preload-data="hover">Feedback</a
	>!
</p>
