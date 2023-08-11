<script>
	export let placeholder;
	export let value;
</script>

<div class="flex py-6">
	<input
		bind:value
		placeholder={placeholder}
		class="mr-2 w-full p-3 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 rounded-lg"
		type="text"
	/>
	<slot />
</div>
