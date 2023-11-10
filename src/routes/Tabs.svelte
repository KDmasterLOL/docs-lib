<script>
	import { onMount, setContext } from "svelte";
	let tabs = {};
	setContext("addTab", (tab) => Object.assign(tabs, tab));
	onMount(() => {
		console.log(tabs);
		tabs = tabs;
		Object.values(tabs)[0]();
	});
</script>

<div>
	<menu>
		{#each Object.keys(tabs) as tab_name}
			<li><button on:click={tabs[tab_name]()} />{tab_name}</li>
		{/each}
	</menu>
	<slot />
</div>
