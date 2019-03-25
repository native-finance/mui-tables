import { PopoverActions, PopoverProps } from '@material-ui/core/Popover';
import React, { ReactElement, ReactNode } from 'react';
export interface MUITablePopoverState {
    open: boolean;
}
export interface MUITablePopoverProps extends PopoverProps {
    trigger: ReactElement<any, any>;
    refClose?: (cb: any) => void;
    refExit?: () => void;
    content: ReactNode;
}
declare class MUITablePopover extends React.Component<MUITablePopoverProps, MUITablePopoverState> {
    constructor(props: MUITablePopoverProps);
    anchorEl: null | any;
    popoverActions: null | PopoverActions;
    componentWillMount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MUITablePopoverProps, prevState: MUITablePopoverState): void;
    handleClick: () => void;
    handleRequestClose: (cb: any) => void;
    handleOnExit: () => void;
    render(): JSX.Element;
}
export default MUITablePopover;
