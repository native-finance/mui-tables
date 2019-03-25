import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import classNames from 'classnames';
import React from 'react';
import { useMUITableContext } from '../MUITable';
var defaultBodyCellStyles = function (theme) {
    var _a, _b;
    return ({
        root: {},
        cellHide: {
            display: 'none'
        },
        cellStacked: (_a = {},
            _a[theme.breakpoints.down('sm')] = {
                display: 'inline-block',
                backgroundColor: theme.palette.background.paper,
                fontSize: '16px',
                height: '24px',
                width: 'calc(50% - 80px)',
                whiteSpace: 'nowrap'
            },
            _a),
        responsiveStacked: (_b = {},
            _b[theme.breakpoints.down('sm')] = {
                display: 'inline-block',
                fontSize: '16px',
                width: 'calc(50% - 80px)',
                whiteSpace: 'nowrap',
                height: '24px'
            },
            _b)
    });
};
var MUITableBodyCell = function (props) {
    var _a;
    var classes = props.classes, cell = props.cell, className = props.className, colSpan = props.colSpan, row = props.row, rowIndex = props.rowIndex, key = props.key;
    var _b = useMUITableContext().options, hooks = _b.hooks, display = _b.display;
    var handleClick = function () {
        if (hooks && hooks.onRowClick && row) {
            hooks.onRowClick(row, rowIndex);
        }
        if (hooks && hooks.onCellClick && cell && row) {
            hooks.onCellClick(cell, row, rowIndex);
        }
    };
    return (React.createElement(TableCell, { key: key, onClick: handleClick, colSpan: colSpan, className: classNames((_a = {},
            _a[classes.root] = true,
            _a[classes.responsiveStacked] = display.responsive === 'stacked',
            _a), className) }, props.children || !cell ? props.children : cell.display));
};
export default withStyles(defaultBodyCellStyles, { name: 'MUITableBodyCell' })(MUITableBodyCell);
//# sourceMappingURL=MUITableBodyCell.js.map