<script lang="ts">
	import { user } from '$lib/firebase';
</script>

{#if $user}
	<slot />
{:else}
	<p class="text-red-600 font-playpen text-base">
		You must be signed in to view this page.
		<a
			class="outline-none border-none bg-green-600 text-lg font-playpen rounded-full py-4 px-8"
			href="/login">Sign in</a
		>
	</p>
{/if}
