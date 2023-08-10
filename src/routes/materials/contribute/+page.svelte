<script>
	import HeadingMain from "../../../components/basic/HeadingMain.svelte";
    import Link from "../../../components/basic/Link.svelte";
	import ParagraphDefault from "../../../components/basic/ParagraphDefault.svelte";
	import { CONTACT_EMAIL } from "../../../globals";
</script>

<svelte:head>
    <title>Lernmaterialien hinzufügen</title>
    <meta name="description" content="Du möchtest dem Projekt beitragen und eigene Lernzettel anderen zur Verfügung stellen? Dann bist du hier richtig!">
</svelte:head>

<HeadingMain>Lernmaterialien hinzufügen</HeadingMain>

<ParagraphDefault>
    Du möchtest dem Projekt beitragen und eigene Lernzetteln anderen zur Verfügung stellen? Perfekt!
</ParagraphDefault>

<ParagraphDefault>
    In Zukunft wirst du hier direkt deine Materialien zur Überprüfung durch unser Team hochladen können.
    Bis dahin schreibe uns bitte eine E-Mail
    (<Link href="mailto:{CONTACT_EMAIL}?subject=Materialien%20beitragen&body=Titel%3A%0DBeschreibung%3A%0DFach%3A%0DKlassenstufe%3A%0DBundesland%3A%0DSprache%3A%20Deutsch%0D%0DAnhang%20nicht%20vergessen!">{CONTACT_EMAIL}</Link>),
    zu der du die Dateien anhängst und Folgendes angibst:
</ParagraphDefault>

<ul class="list-disc ml-6 pb-4">
    <li>Titel</li>
    <li>Eine kurze Beschreibung</li>
    <li>Fach</li>
    <li>Klassenstufe und Bundesland</li>
    <li>Sprache (vor allem bei bilinugualen Inhalten relevant)</li>
</ul>

<ParagraphDefault>
    Bitte beachte, dass die Inhalte nicht copyright-geschützt sein dürfen,
    sie müssen also entweder von dir selbst erstellt oder in public domain verfügbar sein.
</ParagraphDefault>

<ParagraphDefault>Danke für Deinen Beitrag!</ParagraphDefault>
