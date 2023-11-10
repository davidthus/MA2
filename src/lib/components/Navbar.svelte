<script>
	import { user, userData } from '$lib/firebase';
	import Logo from './Logo.svelte';
</script>

<header class="flex justify-between items-center max-w-3xl w-full">
	<Logo />
	<nav class="flex gap-8">
		<ul class="flex">
			<li class="p-4 border-gray-50 text-gray-50 font-kay text-lg">
				<a href="/pro">Pro</a>
			</li>
			<li class="p-4 border-gray-50 text-gray-50 font-kay text-lg">
				<a href="/acts">Acts</a>
			</li>
		</ul>
		{#if $user}
			<a href="/dashboard">
				<img src={$userData?.photoURL} alt="" class="w-12 h-12 rounded-full" /></a
			>
		{/if}
	</nav>
</header>
