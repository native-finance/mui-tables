import { Theme, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { Row } from '../../types';
declare const defaultSelectCellStyles: (theme: Theme) => {
    root: {
        [x: string]: {
            display: string;
        };
    };
    fixedHeader: {
        position: "sticky";
        top: string;
        left: string;
        zIndex: number;
        backgroundColor: string;
        border: string;
        '&::after': {
            content: string;
            zIndex: number;
            position: "absolute";
            bottom: number;
            left: number;
            width: string;
            borderBottom: string;
        };
    };
    icon: {
        cursor: string;
        transition: string;
    };
    expanded: {
        transform: string;
    };
    hide: {
        visibility: "hidden";
    };
    headerCell: {
        backgroundColor: string;
    };
    checkboxRoot: {
        '&$checked': {
            color: string;
        };
    };
    checked: {};
    disabled: {};
};
export interface MUITableSelectCellProps {
    checked: boolean;
    isHeaderCell: boolean;
    row?: Row<any>;
    testId?: string;
}
interface Props extends MUITableSelectCellProps, WithStyles<typeof defaultSelectCellStyles> {
}
declare const _default: React.ComponentType<Pick<Props, "row" | "testId" | "checked" | "isHeaderCell"> & import("@material-ui/core/styles").StyledComponentProps<"fixedHeader" | "hide" | "expanded" | "icon" | "disabled" | "root" | "headerCell" | "checkboxRoot" | "checked">>;
export default _default;
