import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';
import React from 'react';
import MUITableUtils from '../../constants/MUITableUtils';
import { useMUITableContext } from '../MUITable';
var defaultToolbarSelectStyles = function (theme) { return ({
    root: {
        flex: '1 1 100%',
        display: 'none',
        height: 56,
        minHeight: 'unset',
        zIndex: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        width: 'auto'
    },
    active: {
        background: 'white',
        display: 'flex'
    },
    top: {
        top: 0,
        height: '100%',
        '&$active': {
            borderBottom: "1px solid " + theme.palette.divider,
            borderRadius: '4px 4px 0'
        }
    },
    bottom: {
        bottom: 0,
        '&$active': {
            borderRadius: '0 0 4px 4px'
        }
    },
    title: {
        position: 'relative'
    },
    iconButton: {
        display: 'block',
        position: 'relative'
    },
    deleteIcon: {},
    titleGrid: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    actionsGrid: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}); };
var TableToolbarSelect = function (props) {
    var classes = props.classes;
    var context = useMUITableContext();
    var selectedRows = context.selectedRows, options = context.options, onRowsDelete = context.onRowsDelete, rows = context.rows;
    var textLabels = options.translations.selectedRows;
    var selectedRowData = rows.filter(function (r) {
        return selectedRows.indexOf(MUITableUtils.rowId(r)) >= 0;
    });
    var active = selectedRows.length > 0;
    var positionClass = options.rows.selectBarTop === false ? classes.bottom : classes.top;
    return (React.createElement(Toolbar, { className: classNames(classes.root, positionClass, active && classes.active), role: 'select-toolbar', "aria-label": 'Selected Toolbar' }, options.rows.customToolbarSelect && selectedRows.length > 0 ? (options.rows.customToolbarSelect(selectedRowData, context)) : selectedRows.length <= 0 ? null : (React.createElement(React.Fragment, null,
        React.createElement(Grid, { item: true, xs: 4, className: classes.titleGrid },
            React.createElement(Typography, { variant: "subtitle1", className: classes.title },
                selectedRows.length,
                " ",
                textLabels.text)),
        React.createElement(Grid, { item: true, xs: 8, className: classes.actionsGrid },
            options.rows.selectBarActions
                ? options.rows.selectBarActions(selectedRowData, context)
                : null,
            options.rows.hideSelectDelete ? null : (React.createElement(Tooltip, { title: textLabels.delete },
                React.createElement(IconButton, { className: classes.iconButton, onClick: onRowsDelete, "aria-label": textLabels.deleteAria },
                    React.createElement(DeleteIcon, { className: classes.deleteIcon })))))))));
};
export default withStyles(defaultToolbarSelectStyles, { name: 'MUITableToolbarSelect' })(TableToolbarSelect);
//# sourceMappingURL=MUITableToolbarSelect.js.map