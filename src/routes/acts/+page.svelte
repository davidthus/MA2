<script lang="ts">
	import ActCard from '$lib/components/ActCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { acts } = data;
</script>

<svelte:head>
	<title>Acts Collection</title>
	<meta name="description" content="Choose an act to start you adventure in..." />
</svelte:head>

<h1 class="font-playpen text-6xl text-slate-50 my-6">Acts</h1>
<div class="flex gap-8">
	{#each acts as act}
		<ActCard {act} />
	{/each}
</div>
