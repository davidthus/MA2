<script lang="ts">
	const memberships = [
		{
			name: 'plan',
			benefits: [
				'Unlimited access to PRO benefits',
				'30 day moneyback guarantee',
				'Math quizzes with handpicked prizes'
			]
		},
		{
			name: 'lifetime',
			benefits: [
				'All PRO-tier benefits',
				'Single payment, lifetime access',
				'30 day moneyback guarantee'
			]
		}
	];
</script>

<h1 class="mt-8 text-3xl text-white text-kay capitalize">
	BECOME A <span class="text-3xl text-orange-400 text-kay capitalize">SAVIOUR</span>
</h1>
<p class="text-white font-lg font-playpen">Get access to all the acts and action</p>

<section class="flex gap-6 mt-8">
	{#each memberships as item}
		<article class="flex flex-col p-8 bg-slate-700">
			<h2
				class={`font-kay text-lg ${
					item.name === 'lifetime' ? 'text-lime-600' : 'text-orange-400'
				} capitalize`}
			>
				{item.name}
			</h2>
			{#if item.name === 'lifetime'}
				<p class="text-xl text-white">£<span class="text-3xl text-lime-600">100</span> once</p>
			{:else}
				<p class="text-xl text-white">£<span class="text-3xl text-orange-400">29</span>/month</p>
			{/if}
			<ul class="mt-6 flex flex-col gap-2">
				{#each item.benefits as benefit}
					<li class="text-white font-playpen text-base">{benefit}</li>
				{/each}
			</ul>
			<button
				class="outline-none border-none bg-green-600 rounded-sm text-white font-playpen text-lg py-4 px-8 mt-6"
			>
				{#if item.name === 'lifetime'}
					UPGRADE FOR LIFE
				{:else}
					SUBSCRIBE
				{/if}
			</button>
		</article>
	{/each}
</section>
