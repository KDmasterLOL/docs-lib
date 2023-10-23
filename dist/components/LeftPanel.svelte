<script>"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("$app/environment");
const navigation_1 = require("$app/navigation");
const svelte_1 = require("svelte");
let width = 0;
let is_open = false;
$:
  if (environment_1.browser) {
    document.documentElement.style.setProperty("--left-panel", is_open ? "1" : "0");
  }
let contents;
(0, svelte_1.onMount)(() => {
  Promise.resolve().then(() => __importStar(require("$lib/custom_elements/table-of-contents")));
});
(0, navigation_1.afterNavigate)(() => {
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

#left-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--background);
  width: calc(var(--padding-main) * 2);
  box-sizing: border-box;
  z-index: 998;
  border-right: 0.15rem solid var(--text);
  background: linear-gradient(to left, white 0, black 3px, black 4px, gray 4px, darkgray 7px, black 1rem, black 100%);
  transform: translateX(calc(-100% + var(--left-panel) * 100%));
  transition: transform 0.5s ease-in-out;
  padding: 1rem;
  padding-left: 0.5rem;
}

@media screen and (width <= 900px) {
  #left-panel {
    width: 100vw;
  }
}
#left-panel + .switcher {
  position: fixed;
  background-color: transparent;
  z-index: 999;
  border: none;
  top: 15px;
  width: 50px;
  height: 50px;
  padding: 0;
  left: calc(var(--padding-main) * var(--left-panel) * 2 + 15px);
  box-shadow: 0 0 10px 2px var(--text);
  transition: box-shadow ease 500ms, left 0.5s ease-in-out;
}

@media screen and (width <= 900px) {
  #left-panel + .switcher {
    top: initial;
    bottom: 15px;
  }
}
#left-panel + .switcher svg {
  width: 100%;
  height: 100%;
}

@media screen and (width <= 900px) {
  #left-panel + .switcher {
    left: 15px;
  }
}
#left-panel + .switcher svg {
  background-color: var(--text);
}

#left-panel + .switcher svg line {
  stroke: var(--background);
  stroke-width: 10px;
}

#left-panel + .switcher:hover {
  box-shadow: 0 0 10px 10px var(--text);
}</style>
