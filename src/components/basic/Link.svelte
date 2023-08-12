<script>
	import { base } from "$app/paths";
	export let href;
	export let external = false;
</script>

<a
	href={!external ? `${base}${href}` : href}
	{...external ? { target: "_blank" } : {}}
	class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline whitespace-nowrap"
>
	<slot />

	{#if external}
		<!-- external link svg icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 16"
			class="w-3 inline"
		>
			<path
				fill-rule="evenodd"
				d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
			/>
			<path
				fill-rule="evenodd"
				d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
			/>
		</svg>
	{/if}
</a>
