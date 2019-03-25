import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import React from 'react';
var defaultHeadRowStyles = {
    root: {}
};
var TableHeadRow = function (props) {
    var _a;
    var classes = props.classes;
    return (React.createElement(TableRow, { className: classNames((_a = {},
            _a[classes.root] = true,
            _a)) }, props.children));
};
export default withStyles(defaultHeadRowStyles, { name: 'MUITableHeadRow' })(TableHeadRow);
//# sourceMappingURL=MUITableHeadRow.js.map