import React from 'react';
export var DEFAULT_COL = {
    name: 'column',
    title: 'Column',
    type: 'dimension',
    display: 'true',
    isRowId: true,
    calculateCellDefinition: function (entry) { return ({ display: '', value: '' }); },
    summary: false,
    filter: true,
    filterOptions: {
        type: 'multiselect',
        exact: false
    },
    sort: true,
    download: true,
    viewColumns: true
};
export var DEFAULT_OPTS = {
    title: 'Table',
    loading: false,
    toolbar: {
        showDates: false
    },
    columns: {
        static: [],
        generated: []
    },
    rows: {
        rowHover: false,
        showSummaryRow: false,
        summaryTop: true,
        selectable: false,
        skipDuplicates: false,
        mergeDuplicates: false,
        hiddenColumnMerge: false
    },
    pagination: {
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 25, 50]
    },
    translations: {
        body: {
            noMatch: 'Sorry, no matching records found',
            toolTip: 'Sort',
            summary: 'SUMMARY'
        },
        pagination: {
            next: 'Next Page',
            previous: 'Previous Page',
            first: 'First Page',
            last: 'Last Page',
            rowsPerPage: 'Rows per page:',
            displayRows: 'of'
        },
        toolbar: {
            search: 'Search',
            downloadCsv: 'Download CSV',
            print: 'Print',
            viewColumns: 'View Columns',
            filterTable: 'Filter Table'
        },
        filter: {
            all: 'All',
            title: 'FILTERS',
            reset: 'RESET'
        },
        viewColumns: {
            title: 'Show Columns',
            titleAria: 'Show/Hide Table Columns'
        },
        selectedRows: {
            text: 'row(s) selected',
            delete: 'Delete',
            deleteAria: 'Delete Selected Rows'
        }
    },
    display: {
        sort: true,
        paginate: true,
        filter: true,
        fixedSearch: false,
        search: true,
        download: false,
        viewColumns: true,
        fixedHeader: true,
        elevation: 4,
        responsive: 'scroll',
        filterValues: true
    }
};
export var DEFAULT_CONTEXT = {
    options: DEFAULT_OPTS,
    columns: [],
    rows: [],
    displayRows: [],
    columnFilters: [],
    selectedRows: [],
    search: {
        open: false,
        text: null
    },
    viewColumns: [],
    sortColumn: {
        index: null,
        asc: false
    },
    pagination: {
        page: 0,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 15]
    },
    toggleViewColumn: function (index) { },
    searchTextUpdate: function (text) { },
    toggleSearchVisible: function () { },
    onFilterUpdate: function (colIndex, value) { },
    onFilterReset: function () { },
    onRowsDelete: function () { },
    toggleRowSelected: function (row) { },
    handleAllSelect: function () { },
    toggleSort: function (colIndex) { },
    changePage: function (p) { },
    changeRowsPerPage: function (p) { },
    getFilterData: function (column) { return []; },
    getVisibleColumns: function () { return []; }
};
export var MUITABLE_DEF_CONTEXT = React.createContext(DEFAULT_CONTEXT);
//# sourceMappingURL=index.js.map