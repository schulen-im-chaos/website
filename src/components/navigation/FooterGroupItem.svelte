<script>
	export let href;
	export let external = false;
</script>

<li class="mb-3">
	<a {href} target={external ? "_blank" : ""} class="hover:underline">
		<slot />
	</a>
</li>
