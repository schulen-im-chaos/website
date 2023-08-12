<script>
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import HeadingSecondary from "../../components/basic/HeadingSecondary.svelte";
	import ParagraphDefault from "../../components/basic/ParagraphDefault.svelte";
	import Link from "../../components/basic/Link.svelte";
	import { CONTACT_EMAIL } from "../../globals.js";
</script>

<svelte:head>
	<title>Wie funktioniert's?</title>
	<meta
		name="description"
		content="Wie funktioniert unsere Plattform? Auf dieser Seite wird dir alles erklärt, was du wissen musst!"
	/>
</svelte:head>

<HeadingMain>Wie funktioniert unsere Plattform?</HeadingMain>

<ParagraphDefault>
	Du verstehst nicht, wie das hier alles funktioniert? Kein Problem! Auf dieser Seite wird dir alles
	erklärt, was du wissen musst.
</ParagraphDefault>

<HeadingSecondary>Wie funktioniert unsere Webseite?</HeadingSecondary>

<ParagraphDefault>Erklärung kommt noch :)</ParagraphDefault>

<HeadingSecondary>Wie funktioniert der Discord-Server?</HeadingSecondary>

<ParagraphDefault>
	Wenn du neu auf dem Server bist, musst du zuerst die Regeln akzeptieren. Dies kannst du tun, indem
	du im Kanal "Regeln" auf "akzeptieren" drückst.
</ParagraphDefault>

<ParagraphDefault>
	Dann hast du die Möglichkeit, in den verschiedenen Chats mit den anderen zu kommunizieren. Dort
	gibt es dann auch den Bereich "Nachhilfe". Dort kannst du jederzeit einen neuen Post im Forum
	erstellen. Dort gibt es dann auch noch einen Anleitungspost, falls du nicht weiter kommst.
</ParagraphDefault>

<HeadingSecondary>Du hast noch immer ein Problem?</HeadingSecondary>

<ParagraphDefault>
	Du kommst noch immer nicht weiter? Dann frag uns doch gerne entweder auf dem Discord-Server im
	Support-Bereich oder per Mail an <Link href="mailto:{CONTACT_EMAIL}" external
		>{CONTACT_EMAIL}</Link
	>.
</ParagraphDefault>
