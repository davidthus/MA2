<script>
	import { user, userData } from '$lib/firebase';
	import Logo from './Logo.svelte';
</script>

<header class="flex justify-between items-center max-w-3xl w-full">
	<Logo />
	<nav class="flex gap-8">
		<ul class="flex">
			<li class="p-4 border-gray-50 text-gray-50 font-kay text-lg">
				<a
					class="transition-shadow duration-300 text-base font-normal text-green-500 border-green-400 border rounded-md px-2 py-1 hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.9)]"
					href="/pro">PRO</a
				>
			</li>
			<li class="p-4 border-gray-50 text-gray-50 font-kay text-lg">
				<a href="/acts">Acts</a>
			</li>
		</ul>
		{#if $user}
			<a href="/dashboard" class="bg-transparent fit-cont">
				<img src={$userData?.photoURL} alt="" class="w-12 h-12 rounded-full" /></a
			>
		{/if}
	</nav>
</header>
