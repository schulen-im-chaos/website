<script>
	import { page } from "$app/stores";
	import HeadingMain from "./HeadingMain.svelte";
	import Link from "./Link.svelte";
	import { CONTACT_EMAIL, DISCORD_LINK } from "../../globals";
	import ParagraphDefault from "./ParagraphDefault.svelte";
</script>

<HeadingMain>Ooops, ein Fehler!..</HeadingMain>

<ParagraphDefault>Die Schulen scheinen ja wirklich im Chaos zu sein!..</ParagraphDefault>

{#if $page.status == 404 || $page.status == 200}
	<ParagraphDefault>
		Wir können die Seite, die du angefragt hast, nirgendwo finden, nicht mal im Schulkeller :(
	</ParagraphDefault>
{:else}
	<ParagraphDefault>
		Es ist etwas schiefgelaufen, wo nicht mal wir selber wissen, was es sein könnte :(
	</ParagraphDefault>
	<ParagraphDefault>
		Wenn dieser Fehler erneut auftreten sollte, kontaktiere uns bitte über die
		<Link href="/contact">Kontakt-Seite</Link>
		oder direkt per Mail (
		<Link href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</Link>).
	</ParagraphDefault>
{/if}

<ParagraphDefault
	>Willst du stattdessen auf die
	<Link href="/">Homepage</Link> schauen,
	<Link href="/materials">Schulmaterialien</Link>
	durchstöbern oder unseren <Link href={DISCORD_LINK} external>Discord-Server</Link> besuchen?
</ParagraphDefault>

<div class="p-2 md:mt-16 md:mb-32">
	{#if $page.status == 200}
		<code>Error 404: Not Found</code>
	{:else}
		<code>Error {$page.status}: {$page.error.message}</code>
	{/if}
</div>
