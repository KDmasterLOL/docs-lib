<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let width = 0;
	let is_open = false;

	$: if (browser) {
		document.documentElement.style.setProperty('--left-panel', is_open ? '1' : '0');
	}
	let contents: Node;
	onMount(() => {
		import('$lib/custom_elements/table-of-contents');
	});

	afterNavigate(() => {
		customElements.upgrade(contents);
	});
</script>

<aside id="left-panel" bind:clientWidth={width}>
	<table-of-contents this={contents} />
</aside>
<button class="switcher" on:click={() => (is_open = !is_open)}>
	<svg viewBox="0 0 100 80">
		{#each { length: 3 } as _, i}
			{@const y = 10 + i * 30}
			<line x1="20" y1={y} x2="80" y2={y} />
		{/each}
	</svg>
</button>

<style lang="scss">
	#left-panel {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		background-color: var(--background);
		width: calc(var(--padding-main) * 2);
		box-sizing: border-box;
		z-index: $pop-up-index;
		border-right: 0.15rem solid var(--text);
		background: linear-gradient(
			to left,
			white 0,
			black 3px,
			black 4px,
			gray 4px,
			darkgray 7px,
			black 1rem,
			black 100%
		);

		transform: translateX(calc(-100% + var(--left-panel) * 100%));
		transition: transform $left-panel-speed ease-in-out;

		padding: 1rem {
			left: 0.5rem;
		}

		@media screen and (width <= 900px) {
			width: 100vw;
		}

		& + .switcher {
			@include toolbar-icon {
				left: calc(var(--padding-main) * var(--left-panel) * 2 + $screen-save);
			}
			box-shadow: 0 0 10px 2px var(--text);
			transition: box-shadow ease 500ms, left $left-panel-speed ease-in-out;
			@media screen and (width <= 900px) {
				left: $screen-save;
			}
			svg {
				background-color: var(--text);
				line {
					stroke: var(--background);
					stroke-width: 10px;
				}
			}
			&:hover {
				box-shadow: 0 0 10px 10px var(--text);
			}
		}
	}
</style>
