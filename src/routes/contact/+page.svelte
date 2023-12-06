<script>
	import Link from "../../components/basic/Link.svelte";
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import ParagraphDefault from "../../components/basic/ParagraphDefault.svelte";

	import { CONTACT_EMAIL, DISCORD_LINK } from "../../globals.js";
</script>

<svelte:head>
	<title>Kontakt</title>
	<meta name="description" content="Kontaktiere unser Team hier." />
</svelte:head>

<HeadingMain>Kontakt</HeadingMain>

<ParagraphDefault>
	Du kannst uns gerne unter <Link href="mailto:{CONTACT_EMAIL}" external>{CONTACT_EMAIL}</Link> kontaktieren
	oder einfach auf <Link href={DISCORD_LINK} external>Discord</Link> ansprechen.
</ParagraphDefault>
