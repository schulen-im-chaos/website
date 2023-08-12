<script>
	export let required, id, name, placeholder;
</script>

<textarea
	{required}
	{placeholder}
	class="w-full rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-600 h-44 p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
	{id}
	{name}
/>
