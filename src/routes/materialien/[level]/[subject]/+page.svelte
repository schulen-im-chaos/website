<script lang="ts">
	import { page } from '$app/stores';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import Notice from '../../Notice.svelte';

	export let data: PageData;

	let form: HTMLFormElement;
	let timer: NodeJS.Timeout | undefined = undefined;

	function handleInputDelayed() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			form.requestSubmit();
		}, 500);
	}
</script>

<svelte:head>
	<title>Lernmaterialien - {data.subject}</title>
	<meta name="description" content="Lernmaterialien - {data.subject}" />
</svelte:head>

<a
	class="btn variant-filled-error"
	href="/materialien/{data.level}"
	data-sveltekit-preload-data="hover"
	>Zurück zur Fächerübersicht {data.level.charAt(0).toUpperCase() +
		data.level.slice(1).toLowerCase()}!</a
>
<h2 class="h2">Lernmaterialien - {data.subject}</h2>

<Notice />

<form method="get" bind:this={form} data-sveltekit-keepfocus>
	<input
		type="text"
		class="input"
		name="query"
		value={$page.url.searchParams.get('query')}
		on:input={handleInputDelayed}
		placeholder="Gib hier einen Suchbegriff ein..."
	/>
</form>

<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"></div>

{#each data.resources as resource, i}
	<div class="card w-full bg-initial card-hover flex flex-col">
		<div class="flex-grow">
			<header class="p-4 space-y-4">
				<h3 class="h3 flex justify-between">
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
					{#if resource.comment}
						<a
							use:popup={{ event: 'hover', target: `target-${i}`, placement: 'top' }}
							class="btn variant-filled-primary [&>*]:pointer-events-none"
							target="_blank"
							href="/files/{data.level}/{resource.subject}/{resource.file_name}">Öffnen!</a
						>
						<div class="card p-4 variant-filled-surface z-[9]" data-popup="target-{i}">
							<p>{resource.comment}</p>
							<div class="arrow variant-filled-surface" />
						</div>
					{:else}
						<a
							class="btn variant-filled-primary"
							target="_blank"
							href="/files/{data.level}/{resource.subject}/{resource.file_name}">Öffnen!</a
						>
					{/if}
				</div>
			</footer>
		</div>
	</div>
{:else}
	<aside class="alert variant-filled-warning !m-0">
		<!-- Icon -->
		<div><i class="fa-solid fa-circle-info"></i></div>
		<!-- Message -->
		<div class="alert-message">
			<h3 class="h3">Keine Suchergebnisse!</h3>
			<p>Gib einen anderen Suchbegriff als "{$page.url.searchParams.get('query')}" ein</p>
		</div>
	</aside>
{/each}
