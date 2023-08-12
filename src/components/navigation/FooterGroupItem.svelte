<script>
	import { base } from "$app/paths";
	export let href;
	export let target = undefined;
	export let external = false;
</script>

<li class="mb-3">
	<a href={!external ? `${base}${href}` : href} {target} class="hover:underline">
		<slot />
	</a>
</li>
