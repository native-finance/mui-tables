import React from 'react';
import { Cell, Row } from '../../types/index';
interface MUITableBodyCellProps {
    cell?: Cell<any>;
    row?: Row<any>;
    rowIndex: number;
    className?: string;
    colSpan: number;
    children?: any;
    key: string;
}
declare const _default: React.FunctionComponent<MUITableBodyCellProps>;
export default _default;
