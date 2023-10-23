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
  --second-background: color-mix(in srgb, brown 0.2, var(--background));
  --note-background: rgb(70, 70, 0);
  --mark-background-color: #6c6100;
  --code-background: #343434;
  --important-background-color: rgb(111, 4, 4);
  --remark-color: rgb(45, 43, 73);
  --note-color: rgb(45, 43, 73);
  --important-color: rgb(111, 4, 4);
  --code-color: rgb(255, 229, 144);
  --mark-color: white;
  --text: black;
  --second-text: rgb(141, 255, 153);
  --third-text: rgb(153, 205, 255);
  --added-text: rgb(0, 146, 146);
  --padding-main: 10vw;
  --left-panel: 0;
}

@media (prefers-color-scheme: dark) {
  :global(:root) {
    --darkness: 100%;
    --text: white;
  }
}
:global(:root) {
  --darkness: 0%;
  --background: color-mix(in srgb, black var(--darkness), white);
  --second-background: color-mix(in srgb, brown 0.2, var(--background));
  --note-background: rgb(70, 70, 0);
  --mark-background-color: #6c6100;
  --code-background: #343434;
  --important-background-color: rgb(111, 4, 4);
  --remark-color: rgb(45, 43, 73);
  --note-color: rgb(45, 43, 73);
  --important-color: rgb(111, 4, 4);
  --code-color: rgb(255, 229, 144);
  --mark-color: white;
  --text: black;
  --second-text: rgb(141, 255, 153);
  --third-text: rgb(153, 205, 255);
  --added-text: rgb(0, 146, 146);
  --padding-main: 10vw;
  --left-panel: 0;
}

@media (prefers-color-scheme: dark) {
  :global(:root) {
    --darkness: 100%;
    --text: white;
  }
}
:global(.invert) {
  filter: invert(var(--darkness));
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
