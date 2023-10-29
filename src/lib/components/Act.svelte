<script lang="ts">
	import type { IAct } from '$lib/types';

	export let act: IAct;
</script>

<h1 class="mt-6 text-slate-50 font-kay text-4xl">Act {act.number}</h1>
<p class="mt-6 text-slate-50 font-playpen text-base">
	{act.chapters.length} Chapter{#if act.chapters.length > 1}s{/if}
</p>
