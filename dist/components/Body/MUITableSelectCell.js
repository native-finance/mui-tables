import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import classNames from 'classnames';
import React from 'react';
import { useMUITableContext } from '../MUITable';
var defaultSelectCellStyles = function (theme) {
    var _a;
    return ({
        root: (_a = {},
            _a[theme.breakpoints.down('sm')] = {
                display: 'none'
            },
            _a),
        fixedHeader: {
            position: 'sticky',
            top: '0px',
            left: '0px',
            zIndex: 100,
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            '&::after': {
                content: "\"\"",
                zIndex: 400,
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                borderBottom: "1px solid " + theme.palette.divider
            }
        },
        icon: {
            cursor: 'pointer',
            transition: 'transform 0.25s'
        },
        expanded: {
            transform: 'rotate(90deg)'
        },
        hide: {
            visibility: 'hidden'
        },
        headerCell: {
            backgroundColor: theme.palette.background.paper
        },
        checkboxRoot: {
            '&$checked': {
                color: theme.palette.primary.main
            }
        },
        checked: {},
        disabled: {}
    });
};
var TableSelectCell = function (props) {
    var _a;
    var classes = props.classes, isHeaderCell = props.isHeaderCell, checked = props.checked, row = props.row, testId = props.testId;
    var _b = useMUITableContext(), options = _b.options, toggleRowSelected = _b.toggleRowSelected, handleAllSelect = _b.handleAllSelect;
    var cellClass = classNames((_a = {},
        _a[classes.root] = true,
        _a[classes.fixedHeader] = options.display.fixedHeader && isHeaderCell,
        _a[classes.headerCell] = isHeaderCell,
        _a));
    var onChange = isHeaderCell
        ? handleAllSelect
        : function () {
            if (row) {
                toggleRowSelected(row);
            }
        };
    return !options.rows.selectable ? null : (React.createElement(TableCell, { className: cellClass, padding: "checkbox" },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
            React.createElement(Checkbox, { "data-testid": testId, classes: {
                    root: classes.checkboxRoot,
                    checked: classes.checked,
                    disabled: classes.disabled
                }, checked: checked, onChange: onChange }))));
};
export default withStyles(defaultSelectCellStyles, { name: 'MUIDataTableSelectCell' })(TableSelectCell);
//# sourceMappingURL=MUITableSelectCell.js.map