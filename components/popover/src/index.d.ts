import { WeElement } from 'omi';
interface Props {
    effect?: string;
    position?: string;
    trigger?: string;
}
export default class Popover extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        effect: string;
        position: string;
        trigger: string;
    };
    static propTypes: {
        content: StringConstructor;
        effect: StringConstructor;
        position: StringConstructor;
        trigger: StringConstructor;
    };
    installed(): void;
    onEnter: (evt: any) => void;
    timeout: any;
    onLeave: () => void;
    onEnterPopover: (evt: any) => void;
    onLeavePopover: () => void;
    isShow: boolean;
    render(props: any): JSX.Element;
}
export {};
