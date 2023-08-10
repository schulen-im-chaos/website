<script>
	import { page } from '$app/stores';

	export let href = undefined;
	export let target = undefined;
	export let id = undefined; // for identifying dropdown menu
</script>

<li
	{id}
	class="flex items-center p-2 text-sm md:text-base md:py-1 md:px-4 lg:text-sm lg:px-3 xl:text-base xl:font-semibold xl:px-4"
>
	<a
		{href}
		{target}
		class="cursor-pointer text-gray-900 dark:text-gray-300 hover:text-black dark:hover:text-white {$page.url.pathname == href ? 'text-black dark:text-white' : ''}"
	>
		<slot />
	</a>
</li>
