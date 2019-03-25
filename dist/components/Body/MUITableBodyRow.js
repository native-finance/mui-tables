import { withStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow/TableRow';
import classNames from 'classnames';
import * as React from 'react';
import { useMUITableContext } from '../MUITable';
var styles = function (theme) { return ({
    root: {}
}); };
var MUITableBodyRow = function (props) {
    var selected = props.selected, classes = props.classes, className = props.className, testId = props.testId;
    var options = useMUITableContext().options;
    return (React.createElement(TableRow, { hover: options.rows.rowHover, "data-testid": testId, className: classNames(classes.root, className), selected: selected }, props.children));
};
export default withStyles(styles, { name: 'MUITableBodyRow' })(MUITableBodyRow);
//# sourceMappingURL=MUITableBodyRow.js.map