<script lang="ts">
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { AppShell } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<!-- Page Route Content -->
	<div
		class="p-2 sm:px-10 sm:py-3 md:px-12 md:py-5 lg:p-12 lg:mx-auto lg:w-11/12 xl:p-14 xl:w-5/6 space-y-8 text-lg"
	>
		<slot />
	</div>
</AppShell>
