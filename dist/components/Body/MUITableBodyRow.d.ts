import { Theme, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { Row } from '../../types';
declare const styles: (theme: Theme) => {
    root: {};
};
export interface MUITableBodyRowProps {
    row?: Row<any>;
    index: number;
    hover?: boolean;
    selected?: boolean;
    className?: string;
    testId?: string;
    children?: any;
}
interface Props extends MUITableBodyRowProps, WithStyles<typeof styles> {
}
declare const _default: React.ComponentType<Pick<Props, "row" | "index" | "children" | "selected" | "hover" | "className" | "testId"> & import("@material-ui/core").StyledComponentProps<"root">>;
export default _default;
