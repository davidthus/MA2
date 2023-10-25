<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { user, userData } from '$lib/firebase';
	import '../app.css';

	$user;
	$userData;
</script>

<div class="min-h-screen min-w-screen flex flex-col bg-slate-900 items-center p-6">
	<Logo />
	<slot />
</div>
