<script>"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paths_1 = require("$app/paths");
const stores_1 = require("$app/stores");
const Settings_svelte_1 = __importDefault(require("$lib/components/Settings.svelte"));
const transition_1 = require("svelte/transition");
const navigation_1 = require("$app/navigation");
const links = {
  PROGRAMMING: { WEB: {}, DATA_STRUCTURES: {}, MULTITHREADING: {} },
  DOCUMENT_STRUCTURE: {},
  SPORT: {},
  MYSELF: {}
};
let hovered = "";
let timeout_id = -1;
function link(page, enter_leave = true) {
  if (enter_leave) {
    if (timeout_id != -1) {
      clearTimeout(timeout_id);
    }
    hovered = page;
  } else {
    timeout_id = setTimeout(() => hovered = "", 1e3);
  }
}
let path_to = $page.url.pathname == "/" ? [] : $page.url.pathname.substring(1, $page.url.pathname.length - 1).split("/");
(0, navigation_1.afterNavigate)(() => {
  path_to = $page.url.pathname == "/" ? [] : $page.url.pathname.substring(1, $page.url.pathname.length - 1).split("/");
});
</script>

<header>
	<Settings />
	<nav on:mouseleave={() => (hovered = '')}>
		<a href="{base}/">Home page</a>
		{#each Object.keys(links) as page}
			<section
				class="link"
				aria-label="Link"
				on:mouseenter={() => link(page)}
				on:mouseleave={() => link(page, false)}
			>
				<a href="{base}/{page}">{page.replaceAll('_', ' ')}</a>
				{#if hovered == page && Object.keys(links[page]).length != 0}
					<nav transition:fade>
						{#each Object.keys(links[page]) as subpage}
							<a href="{base}/{page}/{subpage}">{subpage.replaceAll('_', ' ')}</a>
						{/each}
					</nav>
				{/if}
			</section>
		{/each}
	</nav>
	<h1 id="page-title">
		{path_to.length == 0 ? 'HOME PAGE' : path_to[path_to.length - 1].replaceAll('_', ' ')}
	</h1>
	{#if path_to.length != 0 && Object.keys(path_to.reduce((a, b) => a[b], links) || {}).length != 0}
		{@const subpages = Object.keys(path_to.reduce((a, b) => a[b], links) || {})}
		<nav id="subpages">
			{#each subpages as page}
				<a href="./{page}">{page.replaceAll('_', ' ')}</a>
			{/each}
		</nav>
	{/if}
</header>

<style>:root {
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
  :root {
    --darkness: 100%;
    --text: white;
  }
}
:root {
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
  :root {
    --darkness: 100%;
    --text: white;
  }
}
.invert {
  filter: invert(var(--darkness));
}

nav {
  position: relative;
  padding: 8px;
  height: fit-content;
  font-size: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 0.3rem;
}

header > nav {
  background-color: rgb(54, 54, 54);
  margin-left: calc((100vw - var(--left-panel) * var(--padding-main) * 2) / 100 * 10);
  margin-right: calc((100vw - var(--left-panel) * var(--padding-main) * 2) / 100 * 10);
  border-radius: 25px;
  box-shadow: inset 0 0px 10px 0 var(--background);
  border: 1px solid white;
}

nav a {
  width: min-content;
  word-break: keep-all;
  height: fit-content;
  color: aqua;
  text-underline-offset: 0.2rem;
}

nav > section > nav {
  position: absolute;
  backdrop-filter: blur(5px);
  justify-content: center;
  gap: 2rem;
  border-top: 0.1rem white solid;
  bottom: 0;
  left: 0;
  right: 0;
  translate: 0 100%;
}

nav > section > nav a {
  width: max-content;
}

h1 {
  text-align: center;
  font-weight: 700;
  font-size: clamp(3.5rem, 10rem, (100vw - var(--left-panel) * var(--padding-main) * 2) / 100 * 12);
  word-break: break-word;
  font-family: serif;
  transition: font-size 0.5s linear;
}

h1::after, h1::before {
  display: none;
}

header {
  margin-left: calc(var(--padding-main) * var(--left-panel) * 2);
  margin-right: 0;
  transition: margin 0.5s linear;
}

@media screen and (width <= 900px) {
  header {
    margin: 0;
  }
  header h1 {
    font-size: clamp(3.5rem, 10rem, 12vw);
  }
  header nav {
    margin: 0;
  }
}</style>
