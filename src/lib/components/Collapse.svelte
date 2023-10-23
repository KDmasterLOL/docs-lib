<script lang="ts">
	import { slide } from "svelte/transition";
	let open = false;
	const click = () => (open = !open);
	let className: string = "";
	export { className as class };
</script>

<section class="collapse {className}">
	<button class="switcher" on:click={click}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 50"
			style="rotate: {open ? '180deg' : '0deg'}"
			preserveAspectRatio="none"
		>
			<polygon points="0 0 50 50 100 0" />
		</svg>
	</button>
	{#if open}
		<div transition:slide>
			<section class="content">
				<slot />
			</section>
			<button class="switcher" on:click={click} />
		</div>
	{/if}
</section>

<style lang="scss" global>
	section.collapse {
		&.example {
			button.switcher {
				background-color: greenyellow;
			}
		}
		button.switcher {
			width: 100%;
			display: block;
			background-color: aliceblue;
			padding: 0;
			display: flex;
			justify-content: center;
			// Important to be before last-child else it overwrite first-child selector
			&:last-child {
				height: 0.5rem;
			}
			&:first-child {
				height: 0.5rem;
				svg {
					width: 3rem;
					height: 100%;
					polygon {
						fill: purple;
						stroke: white;
						stroke-width: 0.3rem;
					}
				}
			}
		}
	}
</style>
