<script>
	import { onMount } from "svelte";

	export let id;
	export let text;

	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// Close the dropdown when a click occurs outside of it
	function handleClick(event) {
		const isOutsideDropdown = !event.target.closest(`.dropdown-navbar-${id}`);
		if (isOutsideDropdown) {
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
</script>

<div
	class="dropdown-navbar-{id} relative inline-block items-center p-2 text-sm md:text-base md:py-1 md:px-4 lg:text-sm lg:px-3 xl:text-base xl:font-semibold xl:px-4"
>
	<button
		class="cursor-pointer text-gray-900 dark:text-gray-400 hover:text-black dark:hover:text-white"
		on:click={toggleDropdown}
	>
		<div class="flex items-center justify-between">
			<slot name="button-content">{text}</slot>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				class="h-4 w-4 ml-2"
				aria-label="chevron down"
				fill="none"
				viewBox="0 0 20 20"
				role="img"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19 9l-7 7-7-7"
					stroke="currentColor"
				/>
			</svg>
		</div>
	</button>

	{#if isOpen}
		<div
			tabindex="-1"
			class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border-gray-100 dark:border-gray-700 shadow-md outline-none divide-y divide-gray-100 dark:divide-gray-600 absolute z-20 min-w-[150px]"
		>
			<ul>
				<slot />
			</ul>
		</div>
	{/if}
</div>
