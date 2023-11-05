<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { user, userData } from '$lib/firebase';
	import '../app.css';

	$user;
	$userData;
</script>

<div class="min-h-screen min-w-screen flex flex-col bg-slate-900 items-center p-6">
	<Navbar />
	<slot />
</div>
