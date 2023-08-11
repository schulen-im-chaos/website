<script>
	import Button from "../basic/Button.svelte";
	import NavDropdown from "./NavDropdown.svelte";
import NavItem from "./NavItem.svelte";

	let showMenu = false;

	// triggered by hamburger menu on mobile
	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div class="p-2 bg-slate-200 dark:bg-slate-900 top-0 left-0 w-full sticky z-50">
	<nav class="container mx-auto w-full lg:flex lg:justify-between lg:items-center">
		<!-- brand logo and hamburger menu -->
		<div class="flex justify-between">
			<!-- brand logo -->
			<a href="/" class="flex items-center">
				<img src="/favicon.png" class="mx-3 h-7 sm:h-9 lg:h-11" alt="Schulen im Chaos Logo" />
				<span class="self-center whitespace-nowrap text-base sm:text-lg font-semibold">
					Schulen im Chaos
				</span>
			</a>

			<!-- hamburger menu for mobile -->
			<div class="flex items-center justify-between lg:hidden">
				<button on:click={toggleNavbar} class="text-gray-800 dark:text-gray-50">
					{#if showMenu}
						<!-- X -->
						<span class="sr-only">Close menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							class="w-5 h-5"
						>
							<path
								d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
							/>
						</svg>
					{:else}
						<!-- hamburger -->
						<span class="sr-only">Open menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- navigation items -->
		<ul class="flex-col p-2 lg:flex lg:flex-row lg:items-center {showMenu ? 'flex' : 'hidden'}">
			<NavItem href="/help">Wie funktioniert's?</NavItem>
			<NavItem href="/materials">Lernmaterialien</NavItem>
			<NavDropdown id={"about"} text="Über uns">
				<NavItem href="/aim">Unser Ziel</NavItem>
				<NavItem href="/team">Unser Team</NavItem>
			</NavDropdown>
			<NavItem href="/contact">Kontakt</NavItem>
			<Button  href="https://discord.com/invite/nWd8yZ4HWY" target='_blank' color="emerald" extra={showMenu ? "w-full mr-3 ml-3 mt-3" : "mr-3 ml-3"}>Zum Discord-Server!</Button>
		</ul>
	</nav>
</div>
