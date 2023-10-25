<script lang="ts">
	import { auth } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const credentials = await signInWithPopup(auth, provider);

		console.log(credentials);
	}
</script>

<p class="text-8xl text-slate-50 w-9/12 mt-6 text-center">a character is in need of you...</p>
<div class="mt-6">
	<button
		class="py-4 px-8 mt-8 rounded-full text-slate-50 bg-blue-600 outline-none"
		on:click={signInWithGoogle}>Make Myself Known</button
	>
</div>
