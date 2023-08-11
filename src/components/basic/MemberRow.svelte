<script>
	import HeadingMain from "./HeadingMain.svelte";

	export let imgname;
	export let name;
	export let imgPosition = "left";
</script>

<div class="flex flex-col md:flex-row items-center py-10 md:py-4">
	<div class="w-full md:w-1/2 p-4 md:p-0 order-1" class:md:order-2={imgPosition == "right"}>
		<img src="/img/team/{imgname}" alt="Bild von {name}" class="w-full" />
	</div>

	<div class="w-full md:w-1/2 p-4 order-2" class:md:order-1={imgPosition == "right"}>
		<HeadingMain>{name}</HeadingMain>
		<p class="text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
			<slot />
		</p>
	</div>
</div>
