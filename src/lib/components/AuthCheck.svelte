<script lang="ts">
	import { auth, user } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const credentials = await signInWithPopup(auth, provider);

		console.log(credentials);
	}
</script>

{#if $user}
	<slot />
{:else}
	<div class="flex flex-col items-center gap-14 mt-20">
		<p class="text-red-600 font-playpen text-base">You must be signed in to view this page.</p>
		<button
			class="outline-none border-none bg-green-600 text-white text-lg font-playpen rounded-full py-4 px-8"
			on:click={signInWithGoogle}>Sign in</button
		>
	</div>
{/if}
