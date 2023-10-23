<script>
	import Prism from "prismjs";
	import "prismjs/components/prism-rust.js";
	import "prismjs/components/prism-pug.js";
	import "prismjs/components/prism-clike.js";
	import "prismjs/components/prism-c.js";
	import "prismjs/components/prism-cpp.js";
	import "prismjs/components/prism-bash.js";
	import "prismjs/components/prism-python.js";
	import "prismjs/themes/prism-dark.min.css";

	export let language;
	export let code;
	let html = "";
	if (Prism.languages[language]) {
		html = Prism.highlight(code.trim(), Prism.languages[language], language);
	} else {
		html = `<span>${code}</span>`;
	}
</script>

<pre class={"language-" + language}><code class={"language-" + language}
		>{@html html}</code
	>
</pre>
