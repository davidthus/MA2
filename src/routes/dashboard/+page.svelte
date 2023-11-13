<script lang="ts">
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { auth, db, storage, user, userData } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
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
			<label for="imageUpload" class="relative cursor-pointer rounded-full w-64 h-64">
				<div
					id="pencilIconWrapper"
					class="w-64 h-64 hover:bg-black/50 absolute inset-0 flex justify-center items-center z-10 rounded-full transition"
				>
					<img id="pencilIcon" src="/pencil.png" class="w-20 h-20" alt="" />
				</div>
				<input
					on:change={upload}
					name="photoURL"
					type="file"
					id="imageUpload"
					class="opacity-0 absolute inset-0"
					accept="image/png, image/jpeg, image/gif, image/webp"
				/>
				<img
					src={previewURL ?? $userData?.photoURL ?? '/user.png'}
					alt="photoURL"
					width="256"
					height="256"
					class="mx-auto rounded-full w-64 h-64 absolute inset-0"
				/>
			</label>
			{#if uploading}
				<p class="text-white text-base font-playpen mt-4">Uploading...</p>
			{/if}
		</div>
	</form>
	<p class="mt-6 font-playpen text-2xl text-white">User Id: {$user?.uid}</p>
	<p class="mt-2 font-playpen text-xl text-white">Email: {$user?.email}</p>
	<button
		class="py-4 px-8 mt-8 rounded-full text-slate-50 bg-blue-600 outline-none font-playpen"
		on:click={async () => {
			await signOut(auth);
		}}>Sign out</button
	>
</AuthCheck>

<style>
	#pencilIconWrapper #pencilIcon {
		display: none;
	}
	#pencilIconWrapper:hover #pencilIcon {
		display: block;
	}
</style>
