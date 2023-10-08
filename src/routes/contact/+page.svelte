<script>
	import Link from "../../components/basic/Link.svelte";
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import Button from "../../components/basic/Button.svelte";
	import Label from "../../components/basic/Label.svelte";
	import Textarea from "../../components/basic/Textarea.svelte";

	import Alert from "../../components/basic/Alert.svelte";
	import { API_BASE_URL, CONTACT_EMAIL } from "../../globals";
	import InputInline from "../../components/basic/InputInline.svelte";

	let successHidden = true;
	let alertHidden = true;
	let buttonDisabled = false;

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		try {
			buttonDisabled = true;
			const resp = await fetch(`${API_BASE_URL}/v2/mail/send`, {
				method: "POST",
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message")
				})
			});

			if (resp.status == 200) {
				successHidden = false;
			} else {
				alertHidden = false;
			}
		} catch {
			alertHidden = false;
		}

		buttonDisabled = false;
		event.target.reset();
	}
</script>

<svelte:head>
	<title>Kontakt</title>
	<meta name="description" content="Kontaktiere unser Team hier." />
</svelte:head>
<div class="w-full max-w-3xl pb-4 px-2 text-sm">
	<Alert bind:hidden={alertHidden} hrefOnClose="/" color="red" id="success">
		Es gab einen Fehler beim Abschicken Deiner Nachricht. Bitte probiere es später erneut oder
		schreibe uns eine Mail an <Link href="mailto:{CONTACT_EMAIL}" external>{CONTACT_EMAIL}</Link>.
	</Alert>

	<Alert bind:hidden={successHidden} hrefOnClose="/" color="blue" id="alert">
		Deine Nachricht wurde erfolgreich abgeschickt.
	</Alert>
</div>

<form class="m-auto px-2 max-w-3xl" id="message-form" on:submit={handleSubmit}>
	<HeadingMain>Kontakt</HeadingMain>

	<div class="flex flex-col md:flex-row md:justify-between">
		<div class="md:w-1/2 p-2">
			<Label forId="name">Name</Label>
			<InputInline required id="name" placeholder="Name" name="name" value="">
				<svg
					aria-hidden="true"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
				</svg>
			</InputInline>
		</div>

		<div class="md:w-1/2 p-2">
			<Label forId="email">E-Mail</Label>
			<InputInline required id="email" name="email" placeholder="E-Mail" value="">
				<svg
					aria-hidden="true"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
				</svg>
			</InputInline>
		</div>
	</div>

	<div class="w-full p-2">
		<Label forId="message">Nachricht</Label>
		<Textarea required placeholder="Deine Nachricht..." id="message" name="message" />
	</div>

	<div class="w-full p-2">
		Es gilt unsere <Link href="/legal/data-protection">Datenschutzerklärung</Link>.
	</div>

	<div class="w-full p-2 flex">
		<Button color="blue" type="submit" padding="3" extra="w-full" disabled={buttonDisabled}
			>Senden</Button
		>
	</div>

	<div class="w-full p-2 text-center font-light">ODER</div>

	<div class="w-full p-2 text-center">
		Schreibe uns eine E-Mail an <Link href="mailto:{CONTACT_EMAIL}" external>{CONTACT_EMAIL}</Link>.
	</div>
</form>
