import { Theme, WithStyles } from '@material-ui/core';
import React from 'react';
import { MUITableContext } from '../../types';
export declare const defaultToolbarStyles: (theme: Theme) => {
    [x: string]: {
        width: string;
        flexWrap: "wrap";
        visibility?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        visibility: "hidden";
        width?: undefined;
        flexWrap?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        textAlign: "right";
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        '&:hover': {
            color: string;
        };
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        textAlign?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        color: string;
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        display: string;
        marginTop: string;
        marginRight: string;
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        titleRoot?: undefined;
        titleText?: undefined;
        spacer?: undefined;
        leftBar?: undefined;
        actions?: undefined;
        root?: undefined;
    } | {
        titleRoot: {};
        titleText: {
            fontSize: string;
            textAlign?: undefined;
        };
        spacer: {
            display: string;
        };
        leftBar: {
            padding: string;
        };
        actions: {
            textAlign: "right";
        };
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        root?: undefined;
    } | {
        root: {
            display: string;
        };
        leftBar: {
            padding: string;
        };
        titleText: {
            textAlign: "center";
            fontSize?: undefined;
        };
        actions: {
            textAlign: "center";
        };
        width?: undefined;
        flexWrap?: undefined;
        visibility?: undefined;
        textAlign?: undefined;
        '&:hover'?: undefined;
        color?: undefined;
        display?: undefined;
        marginTop?: undefined;
        marginRight?: undefined;
        titleRoot?: undefined;
        spacer?: undefined;
    };
    root: {
        width: string;
        flexWrap: "wrap";
    };
    selectActive: {
        visibility: "hidden";
    };
    leftBar: {};
    actions: {
        textAlign: "right";
    };
    titleRoot: {};
    titleText: {};
    icon: {
        '&:hover': {
            color: string;
        };
    };
    iconActive: {
        color: string;
    };
    searchIcon: {
        display: string;
        marginTop: string;
        marginRight: string;
    };
};
export interface MUITableToolbarProps {
    context: MUITableContext;
}
interface Props extends MUITableToolbarProps, WithStyles<typeof defaultToolbarStyles> {
}
interface State {
    iconActive: string | null;
}
export declare class MUITableToolbar extends React.Component<Props, State> {
    searchButton: null | HTMLInputElement;
    state: {
        iconActive: null;
    };
    setActiveIcon: (iconName: string | null) => () => void;
    getActiveIcon: (iconName: string) => string;
    toggleSearch: () => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<MUITableToolbarProps>;
export default _default;
