var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useContext } from 'react';
import { MUITABLE_DEF_CONTEXT } from '../constants';
import MUITableUtils from '../constants/MUITableUtils';
import MUITableWrapper from './MUITableWrapper';
export function useMUITableContext() {
    var context = useContext(MUITABLE_DEF_CONTEXT);
    if (!context) {
        throw new Error("MUITable child components cannot be rendered outside the MUITable component");
    }
    return context;
}
var MUIChildTable = /** @class */ (function (_super) {
    __extends(MUIChildTable, _super);
    function MUIChildTable(props) {
        var _this = _super.call(this, props) || this;
        _this.sortedFilteredRows = function ( /* join: boolean = true */) {
            var _a = _this.props, rows = _a.rows, columns = _a.columns, options = _a.options;
            var viewColumns = _this.state.viewColumns;
            var preppedRows = MUITableUtils.mergeForHiddenColumns(rows, options, viewColumns);
            var sortedRows = MUITableUtils.sortRows(preppedRows, _this.state, columns);
            var displayRows = MUITableUtils.filterRows(sortedRows, _this.state, options, columns);
            return {
                displayRows: displayRows,
                rows: sortedRows
            };
        };
        _this.getVisibleColumns = function () {
            var viewColumns = _this.state.viewColumns;
            var columns = _this.props.columns;
            return columns.filter(function (c, i) { return !!viewColumns[i]; });
        };
        _this.toggleViewColumn = function (i) {
            var _a = _this.props, options = _a.options, columns = _a.columns;
            var viewColumns = _this.state.viewColumns;
            var newViewCols = viewColumns.slice();
            if (newViewCols.hasOwnProperty(i)) {
                newViewCols[i] = !newViewCols[i];
                _this.setState({ viewColumns: newViewCols });
                if (options.hooks && options.hooks.onColumnViewChange) {
                    options.hooks.onColumnViewChange(columns[i], newViewCols[i]);
                }
            }
        };
        _this.searchTextUpdate = function (text) {
            _this.setState({ search: __assign({}, _this.state.search, { text: text }) });
        };
        _this.toggleSearchVisible = function () {
            var _a = _this.state.search, text = _a.text, open = _a.open;
            _this.setState({
                search: {
                    text: open ? null : text,
                    open: !open
                }
            });
        };
        _this.onFilterUpdate = function (colIndex, value) {
            var options = _this.props.options;
            var columnFilters = _this.state.columnFilters;
            var newFilters = columnFilters.slice();
            if (newFilters[colIndex]) {
                if (Array.isArray(value)) {
                    newFilters[colIndex] = value;
                }
                else if (!value) {
                    newFilters[colIndex] = [];
                }
                else if (newFilters[colIndex].indexOf(value) >= 0) {
                    newFilters[colIndex] = newFilters[colIndex].filter(function (v) { return v !== value; });
                }
                else {
                    newFilters[colIndex] = [value];
                }
                _this.setState({ columnFilters: newFilters });
                if (options.hooks && options.hooks.onFilterChange) {
                    options.hooks.onFilterChange(value, newFilters);
                }
            }
        };
        _this.onFilterReset = function () {
            var _a = _this.props, columns = _a.columns, options = _a.options;
            var columnFilters = columns.map(function () { return []; });
            if (options.hooks && options.hooks.onFilterChange) {
                options.hooks.onFilterChange([], columnFilters);
            }
            _this.setState({ columnFilters: columnFilters });
        };
        _this.onRowsDelete = function () {
            var _a = _this.props, options = _a.options, rows = _a.rows;
            var selectedRows = _this.state.selectedRows;
            if (options.hooks && options.hooks.onRowsDelete) {
                try {
                    options.hooks.onRowsDelete(rows.filter(function (r) { return selectedRows.indexOf(MUITableUtils.rowId(r)) >= 0; }));
                }
                catch (e) {
                    console.error(e);
                }
            }
        };
        _this.toggleRowSelected = function (row) {
            var options = _this.props.options;
            var selectedRows = _this.state.selectedRows;
            var index = MUITableUtils.findRowIndex(row, selectedRows);
            var selectedRowIds = index < 0
                ? selectedRows.concat([MUITableUtils.rowId(row)]) : selectedRows.filter(function (r, i) { return i !== index; });
            _this.setState({ selectedRows: selectedRowIds }, function () {
                if (options.hooks && options.hooks.onRowsSelect) {
                    var currentSelected = _this.sortedFilteredRows().rows.filter(function (r) { return selectedRowIds.indexOf(MUITableUtils.rowId(r)) >= 0; });
                    options.hooks.onRowsSelect(index < 0 ? [row] : [], index < 0 ? [] : [row], currentSelected);
                }
            });
        };
        _this.getFilterData = function (column) {
            var _a = _this.props, rows = _a.rows, columns = _a.columns;
            var colIndex = columns.findIndex(function (c) { return c.name === column.name; });
            if (colIndex < 0)
                return [];
            var dynamicVals = rows.reduce(function (opts, row) {
                if (row[colIndex]) {
                    var opt = row[colIndex].display;
                    if (opt && opts.indexOf(opt) < 0) {
                        return opts.concat([opt]);
                    }
                }
                return opts;
            }, []);
            if (column.filterOptions && column.filterOptions.defaultOpts) {
                return column.filterOptions.defaultOpts.concat(dynamicVals);
            }
            return dynamicVals;
        };
        _this.changePage = function (page) {
            var pagination = _this.state.pagination;
            _this.setState({ pagination: __assign({}, pagination, { page: page }) });
        };
        _this.toggleSort = function (colIndex) {
            var _a = _this.props, options = _a.options, columns = _a.columns;
            // default if it wasn't the sort column (we'll go asc, desc, off)
            var newState = {
                sortColumn: { index: colIndex, asc: true }
            };
            if (_this.state.sortColumn.index === colIndex) {
                if (_this.state.sortColumn.asc) {
                    // if asc, switch to desc
                    newState = { sortColumn: { asc: false, index: colIndex } };
                }
                else {
                    // if desc, switch to off (asc back to true)
                    newState = { sortColumn: { index: null, asc: true } };
                }
            }
            _this.setState(newState);
            if (options.hooks && options.hooks.onColumnSortChange) {
                var dir = newState.sortColumn.index === null
                    ? null
                    : newState.sortColumn.asc
                        ? 'asc'
                        : 'desc';
                options.hooks.onColumnSortChange(columns[colIndex], dir);
            }
        };
        _this.changeRowsPerPage = function (rows) {
            var pagination = _this.state.pagination;
            _this.setState({
                pagination: __assign({}, pagination, { rowsPerPage: rows })
            });
        };
        _this.handleAllSelect = function () {
            var options = _this.props.options;
            var displayRows = _this.sortedFilteredRows().displayRows;
            var selectedRows = _this.state.selectedRows;
            if (options.hooks && options.hooks.onRowsSelect) {
                var removedSelections = selectedRows.length === displayRows.length ? displayRows : [];
                var newSelections = selectedRows.length === displayRows.length
                    ? []
                    : displayRows.filter(function (d) { return selectedRows.indexOf(MUITableUtils.rowId(d)) < 0; });
                options.hooks.onRowsSelect(newSelections, removedSelections, selectedRows.length === displayRows.length ? [] : displayRows);
            }
            if (selectedRows.length === displayRows.length) {
                _this.setState({ selectedRows: [] });
            }
            else {
                _this.setState({ selectedRows: displayRows.map(function (r) { return MUITableUtils.rowId(r); }) });
            }
        };
        _this.getContext = function () {
            var _a = _this.props, options = _a.options, columns = _a.columns;
            var _b = _this.sortedFilteredRows(), displayRows = _b.displayRows, rows = _b.rows;
            var contextActions = {
                toggleViewColumn: _this.toggleViewColumn,
                searchTextUpdate: _this.searchTextUpdate,
                toggleSearchVisible: _this.toggleSearchVisible,
                onFilterUpdate: _this.onFilterUpdate,
                onFilterReset: _this.onFilterReset,
                onRowsDelete: _this.onRowsDelete,
                toggleRowSelected: _this.toggleRowSelected,
                handleAllSelect: _this.handleAllSelect,
                toggleSort: _this.toggleSort,
                changePage: _this.changePage,
                changeRowsPerPage: _this.changeRowsPerPage,
                getFilterData: _this.getFilterData,
                getVisibleColumns: _this.getVisibleColumns
            };
            var contextState = __assign({}, _this.state, { pagination: __assign({}, _this.state.pagination, { rowsPerPageOptions: options.pagination.rowsPerPageOptions ||
                        _this.state.pagination.rowsPerPageOptions }) });
            return __assign({ options: options,
                rows: rows,
                columns: columns }, contextState, contextActions, { displayRows: displayRows });
        };
        _this.render = function () {
            var options = _this.props.options;
            var loading = options.loading;
            var context = _this.getContext();
            return (React.createElement(MUITABLE_DEF_CONTEXT.Provider, { value: context },
                React.createElement(CssBaseline, null),
                React.createElement(MUITableWrapper, { loading: !!loading })));
        };
        var options = props.options;
        var paginateOptions = options.pagination;
        if (paginateOptions.rowsPerPage &&
            paginateOptions.rowsPerPageOptions &&
            paginateOptions.rowsPerPageOptions.indexOf(paginateOptions.rowsPerPage) < 0) {
            paginateOptions.rowsPerPageOptions.push(paginateOptions.rowsPerPage);
        }
        _this.state = {
            columnFilters: props.columns.map(function () { return []; }),
            selectedRows: [],
            search: {
                open: options.display.fixedSearch,
                text: null
            },
            viewColumns: props.columns.map(function (c) { return c.display === 'true'; }),
            sortColumn: {
                index: null,
                asc: false
            },
            pagination: {
                page: paginateOptions.page ? paginateOptions.page : 0,
                rowsPerPage: paginateOptions.rowsPerPage ? paginateOptions.rowsPerPage : 5,
                rowsPerPageOptions: paginateOptions.rowsPerPageOptions
                    ? paginateOptions.rowsPerPageOptions
                    : [5, 10, 15]
            }
        };
        return _this;
    }
    return MUIChildTable;
}(React.Component));
export { MUIChildTable };
var MUIParentTable = function (props) {
    var options = MUITableUtils.buildOptions(props);
    var columns = MUITableUtils.buildStaticColumns(props.data, options.columns.static, options.columns.generated);
    if (options.columns.sortColumns) {
        try {
            columns = options.columns.sortColumns(columns);
        }
        catch (e) {
            console.error(e);
        }
    }
    var rows = MUITableUtils.buildRows(props.data, columns, options);
    return React.createElement(MUIChildTable, { options: options, data: props.data, columns: columns, rows: rows });
};
export var MUITable = MUIParentTable;
export default MUIParentTable;
//# sourceMappingURL=MUITable.js.map