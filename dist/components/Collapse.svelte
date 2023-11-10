<script>"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = void 0;
const transition_1 = require("svelte/transition");
let open = false;
const click = () => open = !open;
let className = "";
exports.class = className;
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

<style global>:global(:root) {
  --darkness: 0%;
  --background: color-mix(in srgb, black var(--darkness), white);
  --second-background: #999;
  --solution: green;
  --shadow-color: gray;
  --text-color: black;
  --second-text: #928da0;
  --text-added-color: #7f88ac;
  --link-color: #543fd7;
  --note-color: yellow;
  --mark-color: yellow;
  --invert: var(--darkness);
  --important-color: rgb(143, 0, 0);
  --content-margin: 10vw;
}

@media (prefers-color-scheme: dark) {
  :global(:root) {
    --darkness: 95%;
    --second-background: #3e2628;
    --shadow-color: #558ABB;
    --text-color: #d7d7d7;
    --second-text: #928da0;
    --text-added-color: #7f88ac;
    --link-color: #6ee4ff;
    --note-color: #746429;
    --mark-color: rgb(73, 73, 0);
    --important-color: rgb(183, 0, 0);
    --solution: rgb(13, 150, 13);
  }
}
:global(.no-invert) {
  filter: invert(0);
}

:global(.invert) {
  filter: invert(var(--invert));
}

:global(.right) {
  float: right;
}

:global(.left) {
  float: left;
}

:global(.hidden) {
  display: none;
}

:global(section.collapse.example) :global(button.switcher) {
  background-color: greenyellow;
}

:global(section.collapse) :global(button.switcher) {
  width: 100%;
  display: block;
  background-color: aliceblue;
  padding: 0;
  display: flex;
  justify-content: center;
}

:global(section.collapse) :global(button.switcher:last-child) {
  height: 0.5rem;
}

:global(section.collapse) :global(button.switcher:first-child) {
  height: 0.5rem;
}

:global(section.collapse) :global(button.switcher:first-child) :global(svg) {
  width: 3rem;
  height: 100%;
}

:global(section.collapse) :global(button.switcher:first-child) :global(svg) :global(polygon) {
  fill: purple;
  stroke: white;
  stroke-width: 0.3rem;
}</style>
