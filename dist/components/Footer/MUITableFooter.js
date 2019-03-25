import { createStyles } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import React from 'react';
import { useMUITableContext } from '../MUITable';
import MUITableToolbarSelect from '../Toolbars/MUITableToolbarSelect';
import MUITablePagination from './MUITablePagination';
var styles = function (theme) {
    return createStyles({
        root: {
            position: 'relative'
        },
        table: {}
    });
};
var MUITableFooter = function (props) {
    var classes = props.classes;
    var context = useMUITableContext();
    var options = context.options;
    if (options.pagination.customFooter) {
        return React.createElement(Table, null, options.pagination.customFooter(context));
    }
    if (!options.display.paginate) {
        return null;
    }
    return (React.createElement("div", { className: classes.root },
        !options.rows.selectBarTop && React.createElement(MUITableToolbarSelect, null),
        React.createElement(Table, { className: classes.table },
            React.createElement(MUITablePagination, null))));
};
export default withStyles(styles, { withTheme: true, name: 'MUITableFooter' })(MUITableFooter);
//# sourceMappingURL=MUITableFooter.js.map