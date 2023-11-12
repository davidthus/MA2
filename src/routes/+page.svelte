<script lang="ts">
	import { auth, user } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const credentials = await signInWithPopup(auth, provider);

		console.log(credentials);
	}
</script>

<svelte:head>
	<title>Mathical Adventures</title>
	<meta
		name="description"
		content="A place for primary school children to enjoy reading and learning mathematics."
	/>
</svelte:head>

{#if $user}
	<h2 class="text-lg text-slate-50 mt-6 font-playpen">Welcome, {$user.displayName}</h2>
	<section class="rounded-lg bg-slate-800 flex flex-col items-center p-8 mt-6">
		<p class="text-center text-red-500 font-playpen">you are not reading anything...</p>
		<a href="/acts"
			><button
				class="py-4 px-8 my-4 rounded-full text-slate-50 bg-blue-600 outline-none font-playpen"
				>Go To Acts</button
			></a
		>
		<p class="text-center text-green-500 font-playpen">or preview</p>
		<a href="/acts/1"
			><div
				class="py-4 px-8 mt-8 rounded-md text-slate-50 bg-green-600 outline-none font-playpen flex flex-col"
			>
				<p class="font-kay">Act I / Chapter I</p>
				<p class="font-kay">A Gift From An Imp</p>
			</div></a
		>
	</section>
{:else}
	<p class="text-8xl text-slate-50 w-9/12 mt-6 text-center font-playpen">
		a character is in need of you...
	</p>
	<div class="mt-6">
		<button
			class="py-4 px-8 mt-8 rounded-full text-slate-50 bg-blue-600 outline-none font-playpen"
			on:click={signInWithGoogle}>MAKE MYSELF KNOWN</button
		>
	</div>
{/if}
