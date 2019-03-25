import { createStyles, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import React from 'react';
import MUITableBody from './Body/MUITableBody';
import MUITableFooter from './Footer/MUITableFooter';
import MUITableHead from './Head/MUITableHead';
import { MUITableLoader } from './Head/MUITableLoader';
import { useMUITableContext } from './MUITable';
import MUITableFilterList from './Toolbars/Filters/MUITableFilterList';
import MUITableToolbar from './Toolbars/MUITableToolbar';
import MUITableToolbarSelect from './Toolbars/MUITableToolbarSelect';
var styles = function (theme) {
    return createStyles({
        root: {},
        tableRoot: {
            outline: 'none',
            position: 'relative',
            width: '100%'
        },
        responsiveScroll: {
            overflowX: 'auto',
            overflow: 'auto',
            height: '100%',
            maxHeight: '499px'
        },
        responsiveStack: {},
        caption: {
            position: 'absolute',
            left: '-3000px'
        },
        paper: {
            position: 'relative'
        },
        toolbarGrid: {
            position: 'relative'
        }
    });
};
var MUITableWrapper = function (props) {
    var loading = props.loading, classes = props.classes;
    var context = useMUITableContext();
    var options = context.options;
    var title = options.title;
    return (React.createElement(Paper, { elevation: options.display.elevation, className: classes.paper },
        React.createElement(MUITableLoader, { loading: loading }),
        React.createElement(Grid, { container: true, spacing: 0, className: classes.toolbarGrid },
            React.createElement(MUITableToolbar, { context: context }),
            options.rows.selectBarTop && React.createElement(MUITableToolbarSelect, null)),
        React.createElement(MUITableFilterList, null),
        React.createElement("div", { "data-testid": "responsive-style-div", className: options.display.responsive === 'scroll'
                ? classes.responsiveScroll
                : classes.responsiveStack },
            React.createElement(Table, { tabIndex: 0, role: 'grid', className: classes.tableRoot },
                React.createElement("caption", { className: classes.caption }, title),
                React.createElement(MUITableHead, null),
                React.createElement(MUITableBody, null))),
        React.createElement(MUITableFooter, null)));
};
export default withStyles(styles, { withTheme: true, name: 'MUITableWrapper' })(MUITableWrapper);
//# sourceMappingURL=MUITableWrapper.js.map