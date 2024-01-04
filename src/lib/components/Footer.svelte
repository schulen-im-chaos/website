<script lang="ts">
	import { DiscordURL, GithubURL, InstagramURL } from '$lib/links';

	// eslint-disable-next-line no-undef
	// Base Classes
	const cBase =
		'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const cRow =
		'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';

	// Social Icons
	const socialLinks = [
		{ title: 'Discord', href: DiscordURL, icon: 'fa-discord' },
		{ title: 'Instagram', href: InstagramURL, icon: 'fa-instagram' },
		{ title: 'GitHub', href: GithubURL, icon: 'fa-github' }
	];
</script>

<div class="page-footer {cBase}">
	<div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
		<section class={cRow}>
			<div
				class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start"
			>
				<img width="48" height="48" src="/favicon.png" alt="Favicon" />
				<p>© 2023-{new Date().getFullYear()} Schulen im Chaos</p>
			</div>
			<div class="md:grid grid-cols-3 gap-8">
				<div class="hidden md:grid space-y-6" data-sveltekit-preload-data="hover">
					<h6 class="h6">Schulen im Chaos</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="/aim">Unser Ziel</a></li>
						<li><a class="anchor" href="/tean">Unser Team</a></li>
						<li><a class="anchor" href="/help">Wie funktioniert's?</a></li>
						<li><a class="anchor" href="/contact">Kontakt</a></li>
					</ul>
				</div>
				<div class="space-y-6 mb-4">
					<h6 class="h6">Soziale Medien</h6>
					<ul class="flex gap-6">
						{#each socialLinks as sl}
							<li>
								<a
									href={sl.href}
									target="_blank"
									rel="noreferrer"
									class="opacity-75 hover:opacity-100"
									title={sl.title}
								>
									<i class="fa-brands text-xl {sl.icon}" />
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6">Informationen</h6>
					<ul class="space-y-3" data-sveltekit-preload-data="hover">
						<li><a class="anchor" href="/imprint">Impressum</a></li>
						<li><a class="anchor" href="/privacy-policy">Datenschutzerklärung</a></li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</div>
