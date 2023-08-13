<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	import { getJson } from "../../../lib/api.js";
	import Dropdown from "../../basic/Dropdown.svelte";
	import Spinner from "../../basic/Spinner.svelte";

	export var type = "grade";

	let selected = [{}];

	function getParam(key) {
		return $page.url.searchParams.get(key) || "";
	}

	function getGradesList() {
		const gradeParam = getParam(type == "grade" ? "grade_number" : "subject");
		if (gradeParam == "") {
			return [];
		}

		return gradeParam.split(",");
	}

	function apply() {
		if (type == "grade") {
			goto(
				`/materials/browse?system=${getParam("system")}&grade_number=${selected
					.map((obj) => obj.value)
					.join(",")}&subject=${getParam("subject")}&search=${getParam("search")}`,
				{ replaceState: true }
			);
		} else {
			goto(
				`/materials/browse?system=${getParam("system")}&grade_number=${getParam(
					"grade_number"
				)}&subject=${selected.map((obj) => obj.value).join(",")}&search=${getParam("search")}`,
				{ replaceState: true }
			);
		}
		dataPromise = getJson(`/v1/list-all/${type == "grade" ? "grade_number" : "subject"}`);
	}

	let dataPromise = null;

	onMount(async () => {
		dataPromise = getJson(`/v1/list-all/${type == "grade" ? "grade_number" : "subject"}`);
		selected = getGradesList().map((value) => ({ value }));
		// every obj should be {name: '', value: ''} here you have to find and set selected so the names are in selected
		const resolvedData = await dataPromise;
		for (let i = 0; i < selected.length; i++) {
			const matchingObj = resolvedData.data.find(
				(obj) => obj.number === selected[i].value || obj.name === selected[i].value
			);
			if (matchingObj) {
				selected[i].name = type === "grade" ? matchingObj.number : matchingObj.name_de;
			}
		}
	});
</script>

{#await dataPromise}
	<Spinner color="gray" />
{:then data}
	{#if data && data.data}
		<Dropdown
			bind:selectedOptions={selected}
			selectedOption={selected}
			options={type == "grade"
				? data.data.map((obj) => ({ name: obj.number, value: obj.number }))
				: data.data.map((obj) => ({ name: obj.name_de, value: obj.name }))}
			multiSelect={true}
			fun={apply}
			id={`${type}-filter`}
			label={type == "grade" ? "Alle Klassenstufen" : "Alle Fächer"}
			color={selected[0]
				? data.data.find(
						(obj) =>
							(type == "grade" && obj.number === selected[0].value) ||
							(type == "subject" && obj.name === selected[0].value)
				  )
					? data.data.find(
							(obj) =>
								(type == "grade" && obj.number === selected[0].value) ||
								(type == "subject" && obj.name === selected[0].value)
					  ).color
					: undefined
				: undefined}
		/>
	{:else if data === null}
		<Spinner color="gray" />
	{:else}
		Unerwartete Datenstruktur erhalten.
	{/if}
{:catch error}
	Fehler: {error}
{/await}
