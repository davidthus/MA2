<script lang="ts">
	import type { IAct } from '$lib/types';

	export let act: IAct;
</script>

<a href={`/acts/${act.number}`}>
	<article
		class="rounded-lg bg-slate-800 flex flex-col items-center p-8 mt-6 hover:scale-110 transition-all duration-300"
	>
		<h2 class="font-kay text-slate-50 text-xl">Act {act.number}</h2>
		<p class="font-kay text-slate-50">{act.description}</p>
	</article>
</a>
