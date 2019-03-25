import { Cell, GeneratedColumn, MUIDataObj, Options, ParentProps, ColumnProp, Row, State, StateColumn, SummaryFormats, SummaryRowCell } from '../types';
export default class MUITableUtils {
    static formatSeconds: (secs: number) => string;
    static formatValue: (value: number, format?: SummaryFormats) => string;
    static formatColumnValue: (value: number, column?: StateColumn<any> | undefined) => string;
    static sumColumnCell: (value: number, cell: Cell<any>) => number;
    static validateCustomSummaryCell: (cell: SummaryRowCell) => void;
    static calculateSummaryRow: (displayRows: Cell<any>[][], allRows: Cell<any>[][], columns: StateColumn<any>[]) => SummaryRowCell[];
    static sortRows: (rows: Cell<any>[][], tableState: State<any>, columns: StateColumn<any>[]) => Cell<any>[][];
    static searchFilterOk: (row: Cell<any>[], tableState: State<any>) => boolean;
    static filterRows: (rows: Cell<any>[][], tableState: State<any>, options: Options<any>, columns: StateColumn<any>[]) => Cell<any>[][];
    static findRowIndex: (row: Cell<any>[], rowIds: string[]) => number;
    static rowId: (row: Cell<any>[]) => string;
    static buildRows: <R extends MUIDataObj = MUIDataObj>(data: R[], columns: StateColumn<any>[], options: Options<any>) => Cell<any>[][];
    static buildOptions: (props: ParentProps<any>) => Options<any>;
    static buildStaticColumns: (data: MUIDataObj[], staticCols: ColumnProp<any>[], generatedColumns?: GeneratedColumn<any>[] | undefined) => StateColumn<any>[];
    static buildGeneratedColumns: (generatedColumns: GeneratedColumn<any>[], data: MUIDataObj[]) => StateColumn<any>[];
    static getRowIds: (rows: Cell<any>[][]) => string[];
    static filterDuplicates: (rows: Row<any>[]) => Row<any>[];
    static mergeDuplicates: (rows: Row<any>[], options: Options<any>) => Row<any>[];
    static mergeForHiddenColumns: (rows: Cell<any>[][], options: Options<any>, viewColumns: boolean[]) => Cell<any>[][];
    static mergeCellsCalc: (rows: Row<any>[]) => Row<any>;
}
