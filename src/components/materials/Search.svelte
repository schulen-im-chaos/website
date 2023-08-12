<script>
	import { page } from "$app/stores";

	import Input from "../basic/Input.svelte";
	import Button from "../basic/Button.svelte";
	import { onMount } from "svelte";

	export let system = "";

	let search = "";
	let grade = "";
	let subject = "";

	function getParam(key) {
		return $page.url.searchParams.get(key) || "";
	}

	onMount(() => {
		if (!system) system = getParam("system");
		grade = getParam("grade_number");
		subject = getParam("subject");
		search = getParam("search");
	});
</script>

<Input bind:value={search} placeholder="(noch nicht funktionell!)" required name="suche" id="suche">
	<Button
		color="blue"
		href="/materials/browse?system={system}&grade_number={grade}&subject={subject}&search={search}"
		padding={"4"}
		extra={undefined}
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-5"
			><path
				d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
			/></svg
		>
	</Button>
</Input>
