import { withStyles } from '@material-ui/core/styles';
import MuiTableHead from '@material-ui/core/TableHead';
import classNames from 'classnames';
import React from 'react';
import TableSelectCell from '../Body/MUITableSelectCell';
import { useMUITableContext } from '../MUITable';
import MUISummaryRow from '../Summary/SummaryRow';
import TableHeadCell from './MUITableHeadCell';
import TableHeadRow from './MUITableHeadRow';
var defaultHeadStyles = function (theme) {
    var _a;
    return ({
        main: {},
        responsiveStacked: (_a = {},
            _a[theme.breakpoints.down('sm')] = {
                display: 'none'
            },
            _a)
    });
};
export var MUITableHead = function (props) {
    var _a;
    var classes = props.classes;
    var _b = useMUITableContext(), selectedRows = _b.selectedRows, options = _b.options, columns = _b.columns, viewColumns = _b.viewColumns, displayRows = _b.displayRows;
    var numSelected = (selectedRows && selectedRows.length) || 0;
    var isChecked = numSelected === displayRows.length;
    return (React.createElement(MuiTableHead, { className: classNames((_a = {},
            _a[classes.responsiveStacked] = options.display.responsive === 'stacked',
            _a[classes.main] = true,
            _a)) },
        React.createElement(TableHeadRow, null,
            React.createElement(TableSelectCell, { checked: isChecked, isHeaderCell: true }),
            columns.map(function (column, index) {
                return viewColumns[index] && (React.createElement(TableHeadCell, { key: index, index: index, column: column }, column.title ? column.title : column.name));
            })),
        options.rows.showSummaryRow && options.rows.summaryTop && React.createElement(MUISummaryRow, null)));
};
export default withStyles(defaultHeadStyles, { name: 'MUITableHead' })(MUITableHead);
//# sourceMappingURL=MUITableHead.js.map