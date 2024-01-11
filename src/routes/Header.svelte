<script>
	import { DiscordURL } from '$lib/links';
	import { AppBar, popup } from '@skeletonlabs/skeleton';
</script>

<AppBar class="shadow-2xl">
	<svelte:fragment slot="lead"
		><a class="text-2xl pl-0 pr-2" href="/"
			><img width="48" height="48" src="/favicon.png" alt="Favicon" /></a
		>
	</svelte:fragment>
	<a class="text-2xl pl-0 pr-2 hidden lg:inline" href="/"> Schulen im Chaos</a>
	<svelte:fragment slot="trail">
		<a
			class="btn hover:variant-soft-primary hidden lg:inline"
			href="/help"
			data-sveltekit-preload-data="hover"
		>
			Wie funktioniert's?
		</a>
		<a
			class="btn hover:variant-soft-primary hidden lg:inline"
			href="/materials"
			data-sveltekit-preload-data="hover"
		>
			Lernmaterialien
		</a>
		<!-- trigger -->
		<button
			class="btn hover:variant-soft-primary hidden lg:inline"
			use:popup={{ event: 'click', target: 'about', placement: 'bottom-end' }}
		>
			<span>Über uns</span>
			<i class="fa-solid fa-caret-down opacity-50" />
		</button>
		<!-- popup -->
		<div class="card p-4 w-60 shadow-xl hidden" data-popup="about">
			<nav class="list-nav">
				<ul>
					<li>
						<a href="/aim" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-flag-checkered"></i></span>
							<span>Unser Ziel</span>
						</a>
					</li>
					<li>
						<a href="/team" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-users" /></span>
							<span>Unser Team</span>
						</a>
					</li>
					<li>
						<a href="/contact" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-id-card"></i></span>
							<span>Kontakt</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<button
			class="btn hover:variant-soft-primary inline lg:hidden"
			use:popup={{ event: 'click', target: 'menu', placement: 'bottom-end' }}
		>
			<i class="fa-solid fa-bars"></i>
		</button>
		<div class="card p-4 w-60 shadow-xl lg:!hidden" data-popup="menu">
			<nav class="list-nav">
				<ul>
					<li>
						<a href="/help" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-circle-info"></i></span>
							<span>Wie funktioniert's?</span>
						</a>
					</li>
					<li>
						<a href="/materials" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-file"></i></span>
							<span>Lernmaterialien</span>
						</a>
					</li>
					<hr class="!my-4" />
					<li>
						<a href="/aim" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-flag-checkered"></i></span>
							<span>Unser Ziel</span>
						</a>
					</li>
					<li>
						<a href="/team" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-users" /></span>
							<span>Unser Team</span>
						</a>
					</li>
					<li>
						<a href="/contact" data-sveltekit-preload-data="hover">
							<span class="w-6 text-center"><i class="fa-solid fa-id-card"></i></span>
							<span>Kontakt</span>
						</a>
					</li>
					<hr class="!my-4" />
					<a
						class="btn variant-filled-primary hover:!variant-filled-primary"
						href={DiscordURL}
						target="_blank"
						rel="noreferrer"
					>
						Zum Discord Server!
					</a>
				</ul>
			</nav>
		</div>
		<a
			class="btn variant-filled-primary hidden lg:inline"
			href={DiscordURL}
			target="_blank"
			rel="noreferrer"
		>
			Zum Discord Server!
		</a>
	</svelte:fragment>
</AppBar>
