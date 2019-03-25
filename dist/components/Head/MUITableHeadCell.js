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
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import React from 'react';
import { useMUITableContext } from '../MUITable';
var defaultHeadCellStyles = function (theme) { return ({
    root: {},
    fixedHeader: {
        position: 'sticky',
        top: '0px',
        left: '0px',
        zIndex: 100,
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        '&::after': {
            content: "\"\"",
            zIndex: 400,
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            borderBottom: "1px solid " + theme.palette.divider
        }
    },
    tooltip: {
        cursor: 'pointer'
    },
    mypopper: {
        '&[data-x-out-of-boundaries]': {
            display: 'none'
        }
    },
    data: {
        display: 'inline-block'
    },
    sortAction: {
        display: 'inline-block',
        verticalAlign: 'top',
        cursor: 'pointer',
        paddingLeft: '4px',
        height: '10px'
    },
    sortActive: {
        color: theme.palette.text.primary
    },
    toolButton: {
        outline: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        height: 'auto'
    }
}); };
var MUITableHeadCell = function (props) {
    var _a, _b;
    var children = props.children, classes = props.classes, column = props.column, index = props.index;
    var _c = useMUITableContext(), toggleSort = _c.toggleSort, sortColumn = _c.sortColumn, options = _c.options;
    var display = options.display, translations = options.translations;
    var handleSortClick = function () { return toggleSort(props.index); };
    var sort = column.sort !== false && display.sort !== false;
    var sortActive = sort && sortColumn.index === index;
    var direction = sortColumn.asc ? 'asc' : 'desc';
    var sortLabelProps = __assign({ active: sortActive }, (sortActive ? { direction: direction } : {}));
    var cellClass = classNames((_a = {},
        _a[classes.root] = true,
        _a[classes.fixedHeader] = display.fixedHeader,
        _a));
    return (React.createElement(TableCell, { className: cellClass, scope: 'col', sortDirection: sortActive && direction }, sort ? (React.createElement(Tooltip, { title: translations.body.toolTip, placement: 'bottom-end', classes: {
            tooltip: classes.tooltip,
            popper: classes.mypopper
        }, enterDelay: 300 },
        React.createElement("span", { role: "button", onKeyUp: handleSortClick, onClick: handleSortClick, className: classes.toolButton, tabIndex: 0 },
            React.createElement("div", { className: classNames((_b = {},
                    _b[classes.data] = true,
                    _b[classes.sortActive] = sortActive,
                    _b)) }, column.customHeadRender ? column.customHeadRender(column) : children),
            React.createElement("div", { className: classes.sortAction },
                React.createElement(TableSortLabel, __assign({}, sortLabelProps)))))) : column.customHeadRender ? (column.customHeadRender(column)) : (children)));
};
export default withStyles(defaultHeadCellStyles, { name: 'MUITableHeadCell' })(MUITableHeadCell);
//# sourceMappingURL=MUITableHeadCell.js.map