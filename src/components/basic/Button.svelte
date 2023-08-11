<script>
	export let href = undefined;
	export let color = "blue";
	export let type = "button";
	export let onclick = () => {};
	export let padding = "2";
	export let extra;
	export let target = "_self";

	let style = `md:text-base p-${padding} inline-flex items-center bg-${color}-600 hover:bg-${color}-700 rounded-lg hover-effect inline-flex items-center justify-center ${extra}`;
</script>

{#if href == undefined}
	<button class={style} on:click={onclick} {type}>
		<slot />
	</button>
{:else}
	<a {href} class={style} {target}>
		<slot />
	</a>
{/if}
