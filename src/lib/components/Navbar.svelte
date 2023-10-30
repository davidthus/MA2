<script>
	import Logo from './Logo.svelte';

	const routes = ['', 'Acts', 'Pro'];
</script>

<header class="flex justify-between items-center max-w-3xl w-full">
	<Logo />
	<nav>
		<ul class="flex">
			{#each routes as route}
				<li class="border-x p-4 border-gray-50 text-gray-50 font-kay text-lg">
					<a href={`/${route.toLowerCase()}`}>{route === '' ? 'Home' : route}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
