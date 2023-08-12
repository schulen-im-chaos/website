<script>
	export let href = undefined;
	export let color = "blue";
	export let external = false;

	let style = `text-center px-5 py-2 bg-gradient-to-r from-${color}-400 via-${color}-500 to-${color}-600 hover:bg-gradient-to-br rounded-lg inline-flex items-center justify-center`;
</script>

{#if href == undefined}
	<button class={style}>
		<slot />
	</button>
{:else}
	<a {href} class={style} target={external ? "_blank" : ""}>
		<slot />
	</a>
{/if}
