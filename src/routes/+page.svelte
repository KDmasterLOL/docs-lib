<script>
	import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Math from "$lib/components/Math.svelte";
	let language = "rust";
	let code = "func () => (let i = 10)\nfunc() => (let i = 10)";
</script>

<h1>Welcome to your library project</h1>
<p>
	Create your package using @sveltejs/package and preview/showcase your work
	with SvelteKit
</p>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<CodeBlock {language} {code} />
<Math expression={"x_2=\\frac 1{234}"}></Math>
<template lang="pug">
+m x_2 = \frac 1{234}
CodeBlock(language="js" code="function() => return 0;")
+code('rust').
	func function() -> int {
		return 1
	}

</template>
