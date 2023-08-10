<script>
	export let href = undefined;
	export let color = "blue";

	let style = `text-sm md:text-base p-2 inline-flex items-center bg-${color}-600 hover:bg-${color}-700 rounded-lg hover-effect`;
</script>

{#if href == undefined}
	<button class={style}>
		<slot />
	</button>
{:else}
	<a {href} class={style}>
		<slot />
	</a>
{/if}
