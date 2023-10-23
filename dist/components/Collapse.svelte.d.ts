import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CollapseProps = typeof __propDef.props;
export type CollapseEvents = typeof __propDef.events;
export type CollapseSlots = typeof __propDef.slots;
export default class Collapse extends SvelteComponent<CollapseProps, CollapseEvents, CollapseSlots> {
}
export {};
