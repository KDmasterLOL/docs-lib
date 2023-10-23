<script>
	import Prism from "prismjs";
	import "prismjs/components/prism-rust";
	import "prismjs/components/prism-pug";
	import "prismjs/components/prism-c";
	import "prismjs/components/prism-cpp";
	import "prismjs/components/prism-bash";
	import "prismjs/components/prism-python";
	import "prismjs/themes/prism-dark.min.css";

	export let language;
	export let code;
	const html = Prism.highlight(
		code.trim(),
		Prism.languages[language],
		language
	);
</script>

<pre class={"language-" + language}><code class={"language-" + language}
		>{@html html}</code
	>
</pre>
