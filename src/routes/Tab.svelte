<script>
	import { getContext } from "svelte";
	export let name;
	let is_open = false;
	function toggle() {
		is_open = !is_open;
		console.log("Toggle was called", is_open);
	}
	let addTab = getContext("addTab");
	addTab({ [name]: toggle });
</script>

{#if is_open}
	<div>
		<slot />
	</div>
{/if}
