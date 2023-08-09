<script>
	export let title;
</script>

<div>
	<h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">{title}</h2>
	<ul class="text-gray-600 dark:text-gray-400">
		<slot />
	</ul>
</div>
