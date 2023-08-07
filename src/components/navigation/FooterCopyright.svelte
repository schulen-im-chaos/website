<script>
	const yearStarted = 2023;
	const yearCurrent = new Date().getFullYear();
	const yearDisplay =
		yearCurrent > yearStarted ? `${yearStarted}-${yearCurrent}` : yearStarted.toString();
</script>

<div class="px-2 sm:px-4 md:px-6 lg:px-10 font-light">&copy; {yearDisplay} Schulen im Chaos</div>
