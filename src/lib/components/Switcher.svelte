<script>
	import { onMount } from "svelte";

	/**
	 * @type {HTMLElement}
	 */
	let switcher;

	onMount(() => {
		let current = switcher.children[0];
		for (let index = 0; index < switcher.children.length; index++) {
			const element = switcher.children[index];
			element.addEventListener("click", (ev) => {
				const target = ev.currentTarget;
				if (target.nextElementSibling) {
					target.classList.toggle("hidden");
					target.nextElementSibling.classList.toggle("hidden");
				} else {
					target.classList.toggle("hidden");
					current.classList.toggle("hidden");
				}
			});

			if (index != 0) {
				element.classList.toggle("hidden");
			}
		}
	});
</script>

<section bind:this={switcher} class="switcher">
	<slot />
</section>

<style>
	section {
		user-select: none;
		overflow-x: scroll;
	}
</style>
