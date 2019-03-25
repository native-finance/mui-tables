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
import MuiTableFooter from '@material-ui/core/TableFooter';
import MuiTablePagination from '@material-ui/core/TablePagination';
import MuiTableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useMUITableContext } from '../MUITable';
import MUITablePaginationActions from './MUITablePaginationActions';
var defaultPaginationStyles = {
    root: {
        '&:last-child': {
            padding: '0px 24px 0px 24px'
        }
    },
    toolbar: {},
    selectRoot: {},
    '@media screen and (max-width: 400px)': {
        toolbar: {
            '& span:nth-child(2)': {
                display: 'none'
            }
        },
        selectRoot: {
            marginRight: '8px'
        }
    }
};
var MUITablePagination = function (props) {
    var classes = props.classes;
    var _a = useMUITableContext(), options = _a.options, changePage = _a.changePage, changeRowsPerPage = _a.changeRowsPerPage, pagination = _a.pagination, displayRows = _a.displayRows;
    var translations = options.translations;
    if (!options.display.paginate) {
        return null;
    }
    var onChangeRowsPerPage = function (event) {
        var rows = parseInt(event.target.value, 10);
        changeRowsPerPage(rows);
        if (options.hooks && options.hooks.onChangeRowsPerPage) {
            options.hooks.onChangeRowsPerPage(rows);
        }
    };
    var textLabels = translations.pagination;
    var onChangePage = function (e, page) {
        changePage(page);
        if (options.hooks && options.hooks.onChangePage) {
            options.hooks.onChangePage(page);
        }
    };
    return (React.createElement(MuiTableFooter, null,
        React.createElement(MuiTableRow, null,
            React.createElement(MuiTablePagination, { className: classes.root, classes: {
                    toolbar: classes.toolbar,
                    selectRoot: classes.selectRoot
                }, SelectProps: { title: 'MUITable-rowsPerPageSelect' }, count: displayRows.length, rowsPerPage: pagination.rowsPerPage, page: pagination.page, labelRowsPerPage: textLabels.rowsPerPage, labelDisplayedRows: function (_a) {
                    var from = _a.from, to = _a.to, count = _a.count;
                    return from + "-" + to + " " + textLabels.displayRows + " " + count;
                }, backIconButtonProps: {
                    'aria-label': textLabels.previous
                }, nextIconButtonProps: {
                    'aria-label': textLabels.next
                }, rowsPerPageOptions: pagination.rowsPerPageOptions, onChangePage: onChangePage, onChangeRowsPerPage: onChangeRowsPerPage, ActionsComponent: function (props) { return React.createElement(MUITablePaginationActions, __assign({}, props)); } }))));
};
export default withStyles(defaultPaginationStyles, { name: 'MUITablePagination' })(MUITablePagination);
//# sourceMappingURL=MUITablePagination.js.map