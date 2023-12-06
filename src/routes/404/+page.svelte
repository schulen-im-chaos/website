<script>
	import ErrorPage from "../../components/basic/ErrorPage.svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	if ($page.path.startsWith("/materials/subject")) {
		goto("/materials");
	}
</script>

<svelte:head>
	<title>404 - Seite nicht gefunden!</title>
</svelte:head>

<ErrorPage />
