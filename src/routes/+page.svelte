<script lang="ts">
	export let data;
	console.log(data.result);
</script>

<h1 class="text-4xl">
	Welcome to SvelteKit
	{#each data.result as user, i}
		{#if i < data.result.length - 1}
			{user.firstName},
		{:else}
			{user.firstName}
		{/if}
	{/each}
</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
