<script lang="ts">
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { db, storage, user, userData } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

	let previewURL: string;
	let uploading = false;

	async function upload(e: any) {
		uploading = true;
		const file = e.target.files[0];
		previewURL = URL.createObjectURL(file);
		const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
		const result = await uploadBytes(storageRef, file);
		const url = await getDownloadURL(result.ref);

		await updateDoc(doc(db, 'users', $user!.uid), { photoURL: url });
		uploading = false;
	}
</script>

<AuthCheck>
	<h2 class="font-playpen text-white text-xl mt-6">Upload a Profile Photo</h2>

	<form class="max-w-screen-md w-full">
		<div class="flex flex-col w-full max-w-xs my-10 mx-auto text-center items-center">
			<img
				src={previewURL ?? $userData?.photoURL ?? '/user.png'}
				alt="photoURL"
				width="256"
				height="256"
				class="mx-auto rounded-full mb-2"
			/>
			<label for="photoURL">
				<span class="text-white font-playpen text-md">Pick a file</span>
			</label>
			<input
				on:change={upload}
				name="photoURL"
				type="file"
				class="mt-4 w-full max-w-xs flex justify-center gap-2 text-white font-playpen text-base"
				accept="image/png, image/jpeg, image/gif, image/webp"
			/>
			{#if uploading}
				<p>Uploading...</p>
			{/if}
		</div>
	</form>
	<h1 class="mt-6 font-playpen text-2xl text-white">User Id: {$user?.uid}</h1>
	<p class="">Email: {$user?.email}</p>
</AuthCheck>
