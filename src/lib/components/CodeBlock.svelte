<script>
	import Prism from "prismjs";
	import "prismjs/components/prism-rust.js?inline";
	import "prismjs/components/prism-pug.js?inline";
	import "prismjs/components/prism-clike.js?inline";
	import "prismjs/components/prism-c.js?inline";
	import "prismjs/components/prism-cpp.js?inline";
	import "prismjs/components/prism-bash.js?inline";
	import "prismjs/components/prism-python.js?inline";
	import "prismjs/themes/prism-dark.min.css";

	/**
	 * @type {string}
	 */
	export let language;
	export let code;
	let html = "";
	if (Prism.languages && Prism.languages[language]) {
		html = Prism.highlight(code.trim(), Prism.languages[language], language);
	} else {
		html = `<span>${code}</span>`;
		console.log("Not find " + language);
	}
</script>

<pre class={"language-" + language}><code class={"language-" + language}
		>{@html html}</code
	>
</pre>
