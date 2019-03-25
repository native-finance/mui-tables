import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow/TableRow';
import Typography from '@material-ui/core/Typography/Typography';
import classNames from 'classnames';
import React from 'react';
import MUITableUtils from '../../constants/MUITableUtils';
import { useMUITableContext } from '../MUITable';
var styles = function (theme) { return ({
    summaryTitle: {
        color: theme.palette.text.primary
    },
    emptyTitle: {
        textAlign: 'center'
    },
    summaryRow: {},
    fixedHeader: {
        position: 'sticky',
        top: 56,
        left: '0px',
        zIndex: 100,
        bottom: 0
    },
    summaryCell: {
        backgroundColor: theme.palette.grey['100'],
        border: 'none',
        '&::after': {
            content: "\"\"",
            zIndex: 400,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            borderBottom: "1px solid " + theme.palette.divider
        },
        '&::before': {
            content: "\"\"",
            zIndex: 400,
            position: 'absolute',
            top: -1,
            left: 0,
            width: '100%',
            borderBottom: "1px solid " + theme.palette.divider,
            height: 1,
            background: theme.palette.background.paper
        }
    },
    summaryCaption: {
        color: theme.palette.text.secondary
    }
}); };
export var MUISummaryCell = function (props) {
    var _a;
    var classes = props.classes, summaryCell = props.summaryCell, cellKey = props.cellKey;
    var total = summaryCell.total, visible = summaryCell.visible;
    var options = useMUITableContext().options;
    var column = total.column;
    var percentTotal = (visible.value / total.value) * 100;
    var caption = "% of Total: " + percentTotal.toFixed(2) + "% (" + total.display + ")";
    if (column.summaryOptions && column.summaryOptions.type === 'AVG') {
        var diff = -(1 - visible.value / total.value) * 100;
        caption = "Avg for All: " + total.display + " (" + diff.toFixed(2) + "%)";
    }
    var className = classNames((_a = {},
        _a[classes.summaryCell] = true,
        _a[classes.fixedHeader] = options.display.fixedHeader,
        _a));
    var isDiff = total.value !== visible.value;
    var showDiff = !column.summaryOptions ||
        !column.summaryOptions.showComparison ||
        (column.summaryOptions.showComparison === 'true' ||
            (column.summaryOptions.showComparison === 'whenDifferent' && isDiff));
    return (React.createElement(TableCell, { colSpan: 1, className: className, key: cellKey }, column.summary && (React.createElement(React.Fragment, null,
        React.createElement(Typography, { className: classes.summaryTitle, variant: 'body1', role: "summaryTitle" }, visible.display),
        showDiff && (React.createElement(Typography, { className: classes.summaryCaption, variant: 'caption', role: 'summaryCaption' }, caption))))));
};
var MUISummaryTitle = function (props) {
    var _a;
    var classes = props.classes;
    var options = useMUITableContext().options;
    var className = classNames((_a = {},
        _a[classes.summaryCell] = true,
        _a[classes.fixedHeader] = options.display.fixedHeader,
        _a));
    return (React.createElement(TableCell, { colSpan: 1, className: className, key: '0' },
        React.createElement(Typography, { className: classes.summaryTitle, variant: 'body2', role: 'summaryHead' }, options.translations.body.summary)));
};
var SummaryRow = function (props) {
    var classes = props.classes;
    var _a = useMUITableContext(), displayRows = _a.displayRows, columns = _a.columns, viewColumns = _a.viewColumns, rows = _a.rows, options = _a.options;
    var summaryRow = MUITableUtils.calculateSummaryRow(displayRows, rows, columns);
    return (React.createElement(TableRow, { key: displayRows.length + 1, className: classes.summaryRow },
        options.rows.selectable && React.createElement(MUISummaryTitle, { classes: classes }),
        summaryRow.map(function (cell, index) {
            if (cell.visible.column.display === 'true' && viewColumns[index] !== false) {
                if (index === 0 && !options.rows.selectable && cell.visible.value === null) {
                    return React.createElement(MUISummaryTitle, { classes: classes, key: '0' });
                }
                return (React.createElement(MUISummaryCell, { cellKey: index.toString(), summaryCell: cell, classes: classes }));
            }
        })));
};
export default withStyles(styles, { name: 'MUITableSummaryRow' })(SummaryRow);
//# sourceMappingURL=SummaryRow.js.map