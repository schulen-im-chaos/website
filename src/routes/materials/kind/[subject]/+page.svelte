<script lang="ts">
	export let data;

	let form: HTMLFormElement;
	let timer: NodeJS.Timeout | undefined = undefined;

	function handleInputDelayed() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			form.requestSubmit();
		}, 500);
	}
</script>

<a class="btn variant-filled-error" href="/materials" data-sveltekit-preload-data="hover"
	>Zurück zur Fächerübersicht!</a
>
<h2 class="h2">{data.subject}</h2>
<p>
	<strong>Achtung:</strong>
	Die Suchergebnisse sind nach Klassenstufe sortiert. Suchen kannst du entweder nach der Klasse, Titel,
	Schule, Jahr oder Beschreibung der Materialien.
</p>

<form method="get" bind:this={form} data-sveltekit-keepfocus>
	<input
		type="text"
		class="input"
		name="query"
		on:input={handleInputDelayed}
		placeholder="Gib hier einen Suchbegriff ein..."
	/>
</form>

<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"></div>

{#if Object.entries(data.resources)}
	{#each Object.entries(data.resources) as [key, resources]}
		<h2 class="h2 !mt-2">{key}</h2>
		<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
			{#each resources as resource}
				<div class="card w-full bg-initial card-hover flex flex-col">
					<div class="flex-grow">
						<header class="p-4 space-y-4">
							<h3 class="h3 flex justify-between break-all">
								{resource.title}
								<div class="badge variant-filled-secondary break-keep w-12 h-8">
									{resource.year}
								</div>
							</h3>
						</header>
						<div class="p-4 space-y-4">
							<p>{resource.summary}</p>
						</div>
					</div>
					<div class="sss">
						<hr class="opacity-50" />
						<footer class="p-4 flex justify-between flex-nowrap items-center space-x-4">
							<div class="flex-auto flex justify-between items-center place-self-center">
								<div class="flex-auto flex justify-start items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="fill-base-content mr-2"
										height="16"
										width="16"
										viewBox="0 0 512 512"
									>
										<path
											d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
										></path>
									</svg>{resource.school}
								</div>
								<a
									class="btn variant-filled-primary"
									target="_blank"
									href="/files/{resource.grade}/{resource.subject}/{resource.file_name}">Öffnen!</a
								>
							</div>
						</footer>
					</div>
					<!-- if resource.comment == "" {
								<a class="btn btn-primary" target="_blank" href={ templ.SafeURL("/files/" + resource.Grade + "/" + resource.Subject + "/" + resource.FileName) }>Öffnen!</a>
							} else {
								<div class="tooltip tooltip-left sm:tooltip-top" data-tip={ resource.Comment }>
									<a class="btn btn-primary" target="_blank" href={ templ.SafeURL("/files/" + resource.Grade + "/" + resource.Subject + "/" + resource.FileName) }>Öffnen!</a>
								</div>
							} -->
				</div>
			{/each}
		</div>
	{/each}
{/if}
