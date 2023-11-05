<script lang="ts">
	import { user } from '$lib/firebase';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="mt-6 font-playpen text-2xl text-white">User Id: {$user?.uid}</h1>
