import React from 'react';
import { MUITableContext, ParentProps, Props, State, StateColumn } from '../types';
export declare function useMUITableContext(): MUITableContext;
export declare class MUIChildTable extends React.Component<Props<any>, State<any>> {
    constructor(props: Props<any>);
    sortedFilteredRows: () => {
        displayRows: import("../types").Cell<any>[][];
        rows: import("../types").Cell<any>[][];
    };
    getVisibleColumns: () => StateColumn<any>[];
    toggleViewColumn: (i: number) => void;
    searchTextUpdate: (text: string | null) => void;
    toggleSearchVisible: () => void;
    onFilterUpdate: (colIndex: number, value: string | string[]) => void;
    onFilterReset: () => void;
    onRowsDelete: () => void;
    toggleRowSelected: (row: import("../types").Cell<any>[]) => void;
    getFilterData: (column: StateColumn<any>) => string[];
    changePage: (page: number) => void;
    toggleSort: (colIndex: number) => void;
    changeRowsPerPage: (rows: number) => void;
    handleAllSelect: () => void;
    getContext: () => MUITableContext;
    render: () => JSX.Element;
}
declare const MUIParentTable: (props: ParentProps<any>) => JSX.Element;
export declare const MUITable: (props: ParentProps<any>) => JSX.Element;
export default MUIParentTable;
