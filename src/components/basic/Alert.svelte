<script>
	import { base } from "$app/paths";

	export let id, color, hrefOnClose;
	export let hidden = true;
</script>

<div {hidden} {id}>
	<div
		class="text-{color}-800 dark:text-{color}-400 rounded-lg border border-{color}-300 dark:border-{color}-800 p-4 gap-3 flex items-center justify-between"
		role="alert"
	>
		<div>
			<slot />
		</div>
		<a href="{base}/{hrefOnClose}">
			<span class="sr-only">Close</span>
			<svg
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</div>
