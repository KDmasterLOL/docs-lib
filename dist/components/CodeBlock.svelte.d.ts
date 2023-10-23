/** @typedef {typeof __propDef.props}  CodeBlockProps */
/** @typedef {typeof __propDef.events}  CodeBlockEvents */
/** @typedef {typeof __propDef.slots}  CodeBlockSlots */
export default class CodeBlock extends SvelteComponent<{
    language: string;
    code: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CodeBlockProps = typeof __propDef.props;
export type CodeBlockEvents = typeof __propDef.events;
export type CodeBlockSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        language: string;
        code: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
