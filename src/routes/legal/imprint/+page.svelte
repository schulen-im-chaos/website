<script>
	import HeadingMain from "../../../components/basic/HeadingMain.svelte";
	import { CONTACT_EMAIL } from "../../../globals";
</script>

<svelte:head>
	<title>Impressum</title>
	<meta name="description" content="Impressum für die Webseite von Schulen im Chaos." />
</svelte:head>

<HeadingMain>Impressum</HeadingMain>

<div class="leading-7">
	<div class="pb-4">
		<p><b> Inhaltlich verantwortlich: </b></p>

		<p>Nico Schädlich (s.u.)</p>
	</div>

	<div class="pb-4">
		<p><b> Kontakt: </b></p>

		<p>
			Nico Schädlich
			<br />
			Werner-Eisenberg-Weg 3a
			<br />
			37213 Witzenhausen
			<br />
			Mail: {CONTACT_EMAIL}
		</p>
	</div>

	<div class="pb-4">
		<p><b> Information: </b></p>

		<p>
			Die Nutzung der hier aufgeführten Privatadressen aus privaten Gründen ist untersagt und wird
			falls nötig zur Anzeige gebracht.
		</p>
	</div>
</div>
