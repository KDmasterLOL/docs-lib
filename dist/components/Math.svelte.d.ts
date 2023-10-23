/** @typedef {typeof __propDef.props}  MathProps */
/** @typedef {typeof __propDef.events}  MathEvents */
/** @typedef {typeof __propDef.slots}  MathSlots */
export default class Math extends SvelteComponent<{
    expression: any;
    is_block?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MathProps = typeof __propDef.props;
export type MathEvents = typeof __propDef.events;
export type MathSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        expression: any;
        is_block?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
