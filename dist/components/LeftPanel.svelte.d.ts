import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LeftPanelProps = typeof __propDef.props;
export type LeftPanelEvents = typeof __propDef.events;
export type LeftPanelSlots = typeof __propDef.slots;
export default class LeftPanel extends SvelteComponent<LeftPanelProps, LeftPanelEvents, LeftPanelSlots> {
}
export {};
