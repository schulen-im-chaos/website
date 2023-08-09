<script>
	export let href;
	export let target = undefined;
</script>

<li class="mb-3">
	<a {href} {target} class="hover:underline">
		<slot />
	</a>
</li>
