<script lang="ts">
	export let data;

	const users = data.users;
</script>

<h1 class="text-4xl">
	Welcome to SvelteKit
	{#each users as user, i}
		{#if i < users.length - 1}
			{user.firstName},
		{:else}
			{user.firstName}
		{/if}
	{/each}
</h1>

<a href="/auth"> Get Started </a>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
