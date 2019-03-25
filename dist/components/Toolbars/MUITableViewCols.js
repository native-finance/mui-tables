import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useMUITableContext } from '../MUITable';
export var styles = function (theme) { return ({
    __docgenInfo: {},
    displayName: {},
    root: {
        padding: '16px 24px 16px 24px',
        fontFamily: 'Roboto'
    },
    title: {
        marginLeft: '-7px',
        fontSize: '14px',
        color: theme.palette.text.secondary,
        textAlign: 'left',
        fontWeight: 500
    },
    formGroup: {
        marginTop: '8px'
    },
    formControl: {},
    checkbox: {
        padding: '0px',
        width: '32px',
        height: '32px'
    },
    checkboxRoot: {
        '&$checked': {
            color: theme.palette.primary.main
        }
    },
    checked: {},
    label: {
        fontSize: '15px',
        marginLeft: '8px',
        color: theme.palette.text.primary
    }
}); };
var MUITableViewCols = function (props) {
    var classes = props.classes;
    var _a = useMUITableContext(), columns = _a.columns, options = _a.options, toggleViewColumn = _a.toggleViewColumn, viewColumns = _a.viewColumns;
    var textLabels = options.translations.viewColumns;
    return (React.createElement(FormControl, { component: 'fieldset', className: classes.root, "aria-label": textLabels.titleAria },
        React.createElement(Typography, { variant: "caption", className: classes.title }, textLabels.title),
        React.createElement(FormGroup, { className: classes.formGroup }, columns.map(function (column, index) { return (React.createElement(FormControlLabel, { key: index, classes: { root: classes.formControl, label: classes.label }, "data-testid": 'MUITableViewColsVal', control: React.createElement(Checkbox, { className: classes.checkbox, classes: {
                    root: classes.checkboxRoot,
                    checked: classes.checked
                }, onChange: function () { return toggleViewColumn(index); }, checked: !!viewColumns[index], value: column.name }), label: column.title ? column.title : column.name })); }))));
};
export default withStyles(styles, { name: 'MUITableViewCols' })(MUITableViewCols);
//# sourceMappingURL=MUITableViewCols.js.map