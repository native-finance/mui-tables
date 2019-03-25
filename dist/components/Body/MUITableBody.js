var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createStyles } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiTableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import MUITableUtils from '../../constants/MUITableUtils';
import { useMUITableContext } from '../MUITable';
import MUISummaryRow from '../Summary/SummaryRow';
import MUITableBodyCell from './MUITableBodyCell';
import MUITableBodyRow from './MUITableBodyRow';
import MUITableSelectCell from './MUITableSelectCell';
var styles = function (theme) {
    return createStyles({
        root: {},
        bodyRow: {},
        emptyTitle: {
            textAlign: 'center'
        }
    });
};
var MUITableBody = function (props) {
    var classes = props.classes;
    var _a = useMUITableContext(), displayRows = _a.displayRows, columns = _a.columns, options = _a.options, selectedRows = _a.selectedRows, viewColumns = _a.viewColumns, pagination = _a.pagination;
    var isRowSelected = function (row) { return MUITableUtils.findRowIndex(row, selectedRows) >= 0; };
    // Pagination for displayRows
    var start = options.display.paginate ? pagination.rowsPerPage * pagination.page : 0;
    var end = options.display.paginate ? start + pagination.rowsPerPage : displayRows.length;
    var tableRows = displayRows.slice().slice(start, end);
    if (tableRows.length <= 0) {
        return (React.createElement(MuiTableBody, { className: classes.root },
            React.createElement(MUITableBodyRow, { index: 0, className: classes.bodyRow },
                React.createElement(MUITableBodyCell, { key: '0', colSpan: options.rows.selectable ? columns.length + 1 : columns.length, rowIndex: 0 },
                    React.createElement(Typography, { variant: "subtitle1", className: classes.emptyTitle }, options.translations.body.noMatch)))));
    }
    var setRowProps = options.rows.setRowProps;
    return (React.createElement(MuiTableBody, { className: classes.root },
        tableRows.map(function (row, rowIndex) { return (React.createElement(MUITableBodyRow, __assign({ className: classes.bodyRow, index: rowIndex, key: rowIndex }, (setRowProps ? setRowProps(row, rowIndex) : {})),
            React.createElement(MUITableSelectCell, { row: row, checked: isRowSelected(row), isHeaderCell: false }),
            row.map(function (cell, columnIndex) {
                var shouldDisplay = cell.column.display !== 'false' &&
                    cell.column.display !== 'excluded' &&
                    viewColumns[columnIndex] !== false;
                if (!shouldDisplay) {
                    return null;
                }
                return cell.column.customBodyRender ? (React.createElement(MUITableBodyCell, { colSpan: 1, rowIndex: rowIndex, key: rowIndex + "-" + columnIndex }, cell.column.customBodyRender(cell, row))) : (React.createElement(MUITableBodyCell, { cell: cell, row: row, colSpan: 1, rowIndex: rowIndex, key: rowIndex + "-" + columnIndex }));
            }))); }),
        options.rows.showSummaryRow && !options.rows.summaryTop && React.createElement(MUISummaryRow, null)));
};
export default withStyles(styles, { withTheme: true, name: 'MUITableBody' })(MUITableBody);
//# sourceMappingURL=MUITableBody.js.map