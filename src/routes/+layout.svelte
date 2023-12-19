<script lang="ts">
	import '../app.css';
	export let data;
</script>

{#if data.session !== null}
	User = {data.session.user.email} 
{/if}
enviroment = {data.callBackRootURL}
<slot />
