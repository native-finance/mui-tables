import MomentUtils from '@date-io/moment';
import { createStyles, withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { InlineDatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import * as React from 'react';
import { useMUITableContext } from '../MUITable';
var styles = function (theme) {
    return createStyles({
        datePickerWrapper: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        datePicker: {
            margin: '0 10px'
        }
    });
};
var MUITableDatePicker = function (props) {
    var classes = props.classes;
    var context = useMUITableContext();
    var options = context.options;
    var _a = options.toolbar, startDate = _a.startDate, endDate = _a.endDate, showDates = _a.showDates, handleDateChange = _a.handleDateChange, customToolbarRight = _a.customToolbarRight, startLabel = _a.startLabel, endLabel = _a.endLabel;
    var start = startDate ? startDate : new Date();
    var end = endDate ? endDate : new Date();
    if (showDates && !handleDateChange) {
        throw new Error('showDates=true provided to MUITableDatePicker but no handler provided');
    }
    if (!showDates && !customToolbarRight) {
        return null;
    }
    var startLabelText = startLabel ? startLabel : 'Start Date';
    var endLabelText = endLabel ? endLabel : 'End Date';
    return (React.createElement(MuiPickersUtilsProvider, { utils: MomentUtils },
        React.createElement("div", { className: classes.datePickerWrapper },
            customToolbarRight ? customToolbarRight(context) : null,
            showDates && startDate && handleDateChange ? (React.createElement(InlineDatePicker, { className: classnames(classes.datePicker, 'muiTableToolbar-datePicker-start'), label: startLabelText, value: start, onChange: handleDateChange(true), disableFuture: true, maxDate: end })) : null,
            showDates && endDate && handleDateChange ? (React.createElement(InlineDatePicker, { className: classnames(classes.datePicker, 'muiTableToolbar-datePicker-end'), label: endLabelText, value: end, onChange: handleDateChange(false), minDate: start, disableFuture: true })) : null)));
};
export default withStyles(styles, { withTheme: true, name: 'MUITableDatePicker' })(MUITableDatePicker);
//# sourceMappingURL=MUITableDatePicker.js.map