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
	<h2 class="text-lg text-slate-50 mt-6 font-playpen">Welcome, {$user.displayName}</h2>
	<p class="text-center text-green-500 font-playpen">You are logged in</p>
	<button
		class="py-4 px-8 mt-8 rounded-full text-slate-50 bg-blue-600 outline-none font-playpen"
		on:click={async () => {
			await signOut(auth);
		}}>Sign out</button
	>
{:else}
	<p class="text-8xl text-slate-50 w-9/12 mt-6 text-center">a character is in need of you...</p>
	<div class="mt-6">
		<button
			class="py-4 px-8 mt-8 rounded-full text-slate-50 bg-blue-600 outline-none"
			on:click={signInWithGoogle}>MAKE MYSELF KNOWN</button
		>
	</div>
{/if}
