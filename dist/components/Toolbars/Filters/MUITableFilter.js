import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';
import { useMUITableContext } from '../../MUITable';
export var defaultFilterStyles = function (theme) { return ({
    __docgenInfo: {},
    displayName: {},
    root: {
        backgroundColor: theme.palette.background.default,
        padding: '16px 24px 16px 24px',
        fontFamily: 'Roboto'
    },
    header: {
        flex: '0 0 auto',
        marginBottom: '16px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        display: 'inline-block',
        marginLeft: '7px',
        color: theme.palette.text.primary,
        fontSize: '14px',
        fontWeight: 500
    },
    noMargin: {
        marginLeft: '0px'
    },
    reset: {
        alignSelf: 'left'
    },
    resetLink: {
        marginLeft: '16px',
        fontSize: '12px',
        cursor: 'pointer'
    },
    filtersSelected: {
        alignSelf: 'right'
    },
    /* checkbox */
    checkboxList: {
        flex: '1 1 100%',
        display: 'inline-flex',
        marginRight: '24px'
    },
    checkboxListTitle: {
        marginLeft: '7px',
        marginBottom: '8px',
        fontSize: '14px',
        color: theme.palette.text.secondary,
        textAlign: 'left',
        fontWeight: 500
    },
    checkboxFormGroup: {
        marginTop: '8px'
    },
    checkboxFormControl: {
        margin: '0px'
    },
    checkboxFormControlLabel: {
        fontSize: '15px',
        marginLeft: '8px',
        color: theme.palette.text.primary
    },
    checkboxIcon: {
        width: '32px',
        height: '32px'
    },
    checkbox: {
        '&$checked': {
            color: theme.palette.primary.main
        }
    },
    checked: {},
    /* selects */
    selectRoot: {
        display: 'flex',
        marginTop: '16px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '80%',
        justifyContent: 'space-between'
    },
    selectFormControl: {
        flex: '1 1 calc(50% - 24px)',
        marginRight: '24px',
        marginBottom: '24px'
    },
    /* textField */
    textFieldRoot: {
        display: 'flex',
        marginTop: '16px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    textFieldFormControl: {
        flex: '1 1 calc(50% - 24px)',
        marginRight: '24px',
        marginBottom: '24px'
    }
}); };
export var MUITableMultiSelectFilter = function (props) {
    var classes = props.classes, column = props.column, index = props.index, currentValues = props.currentValues;
    var _a = useMUITableContext(), onFilterUpdate = _a.onFilterUpdate, getFilterData = _a.getFilterData;
    var handleMultiselectChange = function (e) {
        onFilterUpdate(index, e.target.value);
    };
    var filterData = getFilterData(column);
    var filterList = currentValues;
    return (React.createElement("div", { className: classes.selectRoot, "data-testid": "MUITableMultiSelectFilter" },
        React.createElement(FormControl, { className: classes.selectFormControl, key: index },
            React.createElement(InputLabel, { htmlFor: column.name }, column.title || column.name),
            React.createElement(Select, { multiple: true, value: filterList, renderValue: function (selected) { return (React.createElement("span", { "data-testid": "MUITableMultiSelectFilterVal" }, selected ? selected.toString() : null)); }, displayEmpty: true, name: column.name, onChange: handleMultiselectChange, input: React.createElement(Input, { name: column.name, id: column.name }) }, filterData.map(function (filterValue, filterIndex) { return (React.createElement(MenuItem, { value: filterValue, key: filterIndex + 1 },
                React.createElement(Checkbox, { checked: filterList.indexOf(filterValue) >= 0, value: filterValue.toString(), className: classes.checkboxIcon, classes: {
                        root: classes.checkbox,
                        checked: classes.checked
                    } }),
                React.createElement(ListItemText, { primary: filterValue }))); })))));
};
export var MUITableSelectFilter = function (props) {
    var classes = props.classes, column = props.column, index = props.index, currentValues = props.currentValues;
    var _a = useMUITableContext(), translations = _a.options.translations, getFilterData = _a.getFilterData, onFilterUpdate = _a.onFilterUpdate;
    var handleDropdownChange = function (event) {
        var value = event.target.value === 'All' ? '' : event.target.value;
        onFilterUpdate(index, value);
    };
    var filterData = getFilterData(column);
    var filterList = currentValues;
    var textLabels = translations.filter;
    return (React.createElement("div", { className: classes.selectRoot },
        React.createElement(FormControl, { className: classes.selectFormControl, key: index, "data-testid": "MUITableSelectFilter" },
            React.createElement(InputLabel, { htmlFor: column.name }, column.title || column.name),
            React.createElement(Select, { value: filterList.length > 0 ? filterList.join(',') : textLabels.all, name: column.title || column.name, onChange: handleDropdownChange, input: React.createElement(Input, { name: column.name, id: column.name }), renderValue: function (value) { return (React.createElement("span", { "data-testid": "MUITableSelectFilterVal" }, value)); } },
                React.createElement(MenuItem, { value: textLabels.all, key: 0 }, textLabels.all),
                filterData.map(function (filterValue, filterIndex) { return (React.createElement(MenuItem, { value: filterValue, key: filterIndex + 1 }, filterValue.toString())); })))));
};
export var MUITableCheckBoxFilter = function (props) {
    var _a = useMUITableContext(), getFilterData = _a.getFilterData, onFilterUpdate = _a.onFilterUpdate;
    var classes = props.classes, column = props.column, index = props.index, currentValues = props.currentValues;
    var handleCheckboxChange = function (value) { return function () {
        onFilterUpdate(index, value);
    }; };
    var filterData = getFilterData(column);
    var filterList = currentValues;
    return (React.createElement("div", { className: classes.checkboxList, key: index, "data-testid": "MUITableCheckBoxFilter" },
        React.createElement(FormGroup, null,
            React.createElement(Typography, { variant: "body2", className: classes.checkboxListTitle }, column.title || column.name),
            filterData.map(function (filterValue, filterIndex) { return (React.createElement(FormControlLabel, { key: filterIndex, classes: {
                    root: classes.checkboxFormControl,
                    label: classes.checkboxFormControlLabel
                }, "data-testid": 'MUITableCheckBoxFilterVal', control: React.createElement(Checkbox, { className: classes.checkboxIcon, onChange: handleCheckboxChange(filterValue), checked: filterList.indexOf(filterValue) >= 0, classes: {
                        root: classes.checkbox,
                        checked: classes.checked
                    }, value: filterValue }), label: filterValue })); }))));
};
var MUITableFilter = function (props) {
    var _a;
    var classes = props.classes;
    var _b = useMUITableContext(), columns = _b.columns, translations = _b.options.translations, onFilterReset = _b.onFilterReset, columnFilters = _b.columnFilters;
    var textLabels = translations.filter;
    return (React.createElement("div", { className: classes.root },
        React.createElement("div", { className: classes.header },
            React.createElement("div", { className: classes.reset },
                React.createElement(Typography, { variant: "body2", className: classNames((_a = {},
                        _a[classes.title] = true,
                        _a)) }, textLabels.title),
                React.createElement(Button, { color: "primary", className: classes.resetLink, tabIndex: 0, "aria-label": textLabels.reset, onClick: onFilterReset }, textLabels.reset)),
            React.createElement("div", { className: classes.filtersSelected })),
        columns.map(function (col, index) {
            if (!col.filter || !col.filterOptions) {
                return null;
            }
            return col.filterOptions.type === 'checkbox' ? (React.createElement(MUITableCheckBoxFilter, { key: index, classes: classes, column: col, index: index, currentValues: columnFilters[index] })) : col.filterOptions.type === 'multiselect' ? (React.createElement(MUITableMultiSelectFilter, { key: index, classes: classes, column: col, index: index, currentValues: columnFilters[index] })) : (React.createElement(MUITableSelectFilter, { key: index, classes: classes, column: col, index: index, currentValues: columnFilters[index] }));
        })));
};
export default withStyles(defaultFilterStyles, { name: 'MUIDataTableFilter' })(MUITableFilter);
//# sourceMappingURL=MUITableFilter.js.map