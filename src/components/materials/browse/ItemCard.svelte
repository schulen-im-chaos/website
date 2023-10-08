<script>
	export let href, title, subject, grade, previewSrc;
</script>

<a
	{href}
	target="_blank"
	class="flex flex-row max-h-60 text-gray-500 dark:text-gray-400 border-2 rounded-xl border-gray-300 dark:border-gray-600 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
>
	<img class="h-full w-32 md:w-44 rounded-l-xl object-fill" src={previewSrc} alt="Dateivorschau" />
	<div class="p-3 md:px-5">
		<h4 class="my-1 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
			{title}
		</h4>
		<div class="text-sm sm:text-base lg:text-sm xl:text-base">
			<p class="my-1">
				<slot />
			</p>
			<p class="my-1">
				<i>
					{subject}, {grade == "Oberstufe" ? grade : `Klasse ${grade}`}
				</i>
			</p>
		</div>
	</div>
</a>
