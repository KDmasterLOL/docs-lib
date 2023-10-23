<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Settings from '$lib/components/Settings.svelte';
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	const links: Record<string, Object> = {
		PROGRAMMING: { WEB: {}, DATA_STRUCTURES: {}, MULTITHREADING: {} },
		DOCUMENT_STRUCTURE: {},
		SPORT: {},
		MYSELF: {}
	};
	let hovered = '';
	let timeout_id = -1;
	function link(page: string, enter_leave: Boolean = true) {
		if (enter_leave) {
			if (timeout_id != -1) {
				clearTimeout(timeout_id);
			}
			hovered = page;
		} else {
			timeout_id = setTimeout(() => (hovered = ''), 1000);
		}
	}
	let path_to: Array<string> =
		$page.url.pathname == '/'
			? []
			: $page.url.pathname.substring(1, $page.url.pathname.length - 1).split('/');
	afterNavigate(() => {
		path_to =
			$page.url.pathname == '/'
				? []
				: $page.url.pathname.substring(1, $page.url.pathname.length - 1).split('/');
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

<style lang="scss">
	$padding-from-screen: 8px;

	nav {
		position: relative;
		padding: $padding-from-screen;
		height: fit-content;
		font-size: 1.25rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		gap: 0.3rem;
		header > & {
			background-color: rgb(54, 54, 54);
			$space-around: relative_vw(10);
			margin: {
				left: $space-around;
				right: $space-around;
			}
			border-radius: 25px;
			box-shadow: inset 0 0px 10px 0 var(--background);
			border: 1px solid white;
		}

		a {
			width: min-content;
			word-break: keep-all;
			height: fit-content;
			color: aqua;
			text-underline-offset: 0.2rem;
		}

		> section > nav {
			position: absolute;
			backdrop-filter: blur(5px);
			justify-content: center;
			gap: 2rem;
			a {
				width: max-content;
			}
			border-top: 0.1rem white solid;
			bottom: 0;
			left: 0;
			right: 0;
			translate: 0 100%;
		}
	}
	h1 {
		text-align: center;
		font-weight: 700;
		font-size: clamp(3.5rem, 10rem, relative_vw(12));
		word-break: break-word;
		font-family: serif;
		transition: font-size $left-panel-speed linear;

		&::after,
		&::before {
			display: none;
		}
	}
	header {
		margin: {
			left: calc(var(--padding-main) * var(--left-panel) * 2);
			right: 0;
		}
		transition: margin $left-panel-speed linear;
		@media screen and (width <= 900px) {
			margin: 0;
			h1 {
				font-size: clamp(3.5rem, 10rem, 12vw);
			}
			nav {
				margin: 0;
			}
		}
	}
</style>
