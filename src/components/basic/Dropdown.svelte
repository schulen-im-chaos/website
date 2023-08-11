<script>
	import { onMount } from "svelte";

	export let options = [{}];
	export let selectedOption = "";
	export let selectedOptions = [{}];
	export let label = "Select an option";
	export let multiSelect = false;
	export let id = "";
	export let color;

	export var fun = async () => {};

	let temporarySelectedOptions = [{}];
	let isOpen = false;
	let style;

	$: if (selectedOptions) temporarySelectedOptions = selectedOptions;

	$: if (color) {
		style = `text-white bg-gradient-to-r from-${color}-400 via-${color}-500 to-${color}-600 hover:bg-gradient-to-br focus:ring-${color}-300 dark:focus:ring-${color}-800`;
	} else {
		style = "";
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option) {
		if (multiSelect) {
			if (temporarySelectedOptions.map((obj) => obj.value).includes(option.value)) {
				temporarySelectedOptions = temporarySelectedOptions.filter(
					(item) => item.value !== option.value
				);
			} else {
				temporarySelectedOptions = [...temporarySelectedOptions, option];
			}
		} else {
			selectedOption = option;
		}
	}

	async function applySelection() {
		if (multiSelect) {
			selectedOptions = temporarySelectedOptions;
			selectedOption.name = selectedOptions.map((obj) => obj.name).join(", ");
		}
		selectedOptions.sort();
		isOpen = false;
		await fun();
	}

	function resetSelection() {
		temporarySelectedOptions = [];
		Array.from(document.querySelectorAll(`#${id} input`)).forEach((inp) => {
			inp.checked = false;
		});
	}

	// Close the dropdown when a click occurs outside of it
	function handleClick(event) {
		const isOutsideDropdown = !event.target.closest(`.dropdown-${id}`);
		if (isOutsideDropdown) {
			isOpen = false;
		}
	}

	// Add a global click event listener to the document
	onMount(() => {
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	});

	// Function to check if an option is selected
	function isOptionSelected(option) {
		return selectedOptions.map((obj) => obj.value).includes(option.value);
	}
</script>

<div class="relative dropdown-{id} inline-block">
	<div class="p-0.5 rounded-lg {style}">
		<button
			class="text-center font-medium focus:ring-4 focus:outline-none px-3 py-2 rounded-lg inline-flex items-center justify-center w-full !border-0 !rounded-md bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white hover:bg-transparent hover:!text-inherit transition-all duration-75 ease-in group-hover:!bg-opacity-0 group-hover:!text-inherit"
			on:click={toggleDropdown}
		>
			{multiSelect
				? selectedOptions.length
					? selectedOptions.map((obj) => obj.name).join(", ")
					: label
				: selectedOption.name
				? selectedOption.name
				: label}
			<svg
				class="w-4 h-4 ml-2"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	</div>

	{#if isOpen}
		<div
			class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border-gray-100 dark:border-gray-700 shadow-md outline-none divide-y divide-gray-100 dark:divide-gray-600 text-sm absolute mt-2 border border-gray-300 rounded-md shadow-lg z-10"
		>
			{#if multiSelect}
				<div class="flex justify-center p-2">
					<div class="overflow-hidden rounded-t-lg">
						<button
							type="button"
							class="text-center focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm bg-primary-700 dark:bg-primary-600 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg w-full text-red-700 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:text-gray-400"
							on:click={resetSelection}
							disabled={selectedOptions.length == 0 ?? false}>Zurücksetzen</button
						>
					</div>
				</div>
			{/if}
			<ul class="p-1 overflow-y-auto min-w-[200px] max-h-[200px]" {id}>
				{#each options as option (option.value)}
					<div class="p-1">
						<li class="rounded hover:bg-gray-100 dark:hover:bg-gray-600">
							{#if multiSelect}
								<label class="flex items-center cursor-pointer p-2">
									<input
										type="checkbox"
										class="mr-2 rounded bg-inherit"
										on:click={() => selectOption(option)}
										checked={isOptionSelected(option)}
										bind:value={option.value}
									/>
									{option.name}
								</label>
							{:else}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label
									class="flex items-center cursor-pointer p-2 min-w-[150px]"
									on:click={async () => {
										selectOption(option);
										await applySelection();
									}}
								>
									{option.name}
								</label>
							{/if}
						</li>
					</div>
				{/each}
			</ul>
			{#if multiSelect}
				<div class="flex justify-center p-2">
					<div class="overflow-hidden rounded-b-lg">
						<button
							type="button"
							class="text-center focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm bg-primary-700 dark:bg-primary-600 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg w-full text-slate-950 dark:text-slate-100 hover:bg-gray-100 dark:hover:bg-gray-600"
							on:click={applySelection}>Übernehmen</button
						>
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
