<script>
	import katex from "katex";
	import "katex/dist/katex.min.css";

	export let expression;
	export let is_block = false;
	const props = {
		macros: {
			"\\dd": "\\text{d}#1",
			"\\ddvd": "\\frac{\\dd^{#1}{#2}}{\\dd{#3}^{#1}}",
			"\\ddv": "\\frac{\\dd{#1}}{\\dd{#2}}",
			"\\same": String.raw`\left\{#1\mathbb{=}#2\right\}`,
			"\\arsh": `\\operatorname{arsh}`,
			"\\arch": `\\operatorname{arch}`,
			"\\arth": `\\operatorname{arth}`,
			"\\arcth": `\\operatorname{arcth}`,
			"\\const": `\\operatorname{const}`,
			"\\vb": `\\textbf{#1}`,
			"\\Veci": String.raw`\vb #1 = \left( #1_1, #1_2, \dots, #1_#2 \right)`,
			"\\Vec": String.raw`\vb #1 = \begin{pmatrix} #1_1 \\ #1_2 \\ \vdots \\ #1_#2 \end{pmatrix}`,
			"\\Re": String.raw`\operatorname{Re}\ #1\ `,
			"\\Im": String.raw`\operatorname{Im}\ #1\ `,
			"\\b": `\\text{0b}#1`,
		},
		displayMode: is_block,
		throwOnError: false,
		trust: true,
	};
</script>

{#if expression}
	{@html katex.renderToString(expression.replace("\n", " "), props)}
{/if}
