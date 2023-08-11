<script>
	export let placeholder;
	export let value;
	export let required;
	export let name;
	export let id;
</script>

<div class="relative w-full">
	<input
		bind:value
		{id}
		{name}
		{required}
		{placeholder}
		class="w-full p-3 pl-10 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 rounded-lg text-sm block"
		type="text"
	/>
	<div
		class="pt-3 absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 left-0 pl-2.5 pointer-events-none"
	>
		<slot />
	</div>
</div>
