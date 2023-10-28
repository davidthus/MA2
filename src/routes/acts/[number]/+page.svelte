<script lang="ts">
	import { page } from '$app/stores';
	import Act from '$lib/components/Act.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { act } = data;
</script>

{#if $page.error}
	<h1>{$page.error.message}</h1>
{/if}
<Act {act} />
