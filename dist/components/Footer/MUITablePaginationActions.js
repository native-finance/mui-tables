import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import React from 'react';
import { useMUITableContext } from '../MUITable';
var styles = function (theme) { return ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5
    }
}); };
var PaginationActions = function (props) {
    var _a = useMUITableContext(), displayRows = _a.displayRows, options = _a.options;
    var textLabels = options.translations.pagination;
    var classes = props.classes, onChangePage = props.onChangePage, page = props.page, rowsPerPage = props.rowsPerPage;
    var lastPage = displayRows.length / rowsPerPage - 1;
    var handleFirstPageButtonClick = function (e) {
        onChangePage(e, 0);
    };
    var handleBackButtonClick = function (e) {
        onChangePage(e, page - 1);
    };
    var handleNextButtonClick = function (e) {
        onChangePage(e, page + 1);
    };
    var handleLastPageButtonClick = function (e) {
        onChangePage(e, lastPage);
    };
    return (React.createElement("div", { className: classes.root },
        React.createElement(IconButton, { onClick: handleFirstPageButtonClick, disabled: page === 0, "aria-label": textLabels.first, "data-testid": "First Page" },
            React.createElement(FirstPageIcon, null)),
        React.createElement(IconButton, { onClick: handleBackButtonClick, disabled: page === 0, "aria-label": textLabels.previous, "data-testid": "Previous Page" },
            React.createElement(KeyboardArrowLeft, null)),
        React.createElement(IconButton, { onClick: handleNextButtonClick, disabled: page >= Math.ceil(lastPage) - 1, "aria-label": textLabels.next, "data-testid": "Next Page" },
            React.createElement(KeyboardArrowRight, null)),
        React.createElement(IconButton, { onClick: handleLastPageButtonClick, disabled: page >= Math.ceil(lastPage) - 1, "aria-label": textLabels.last, "data-testid": "Last Page" },
            React.createElement(LastPageIcon, null))));
};
export var MUITablePaginationActions = withStyles(styles, {
    withTheme: true,
    name: 'MUITablePaginationActions'
})(PaginationActions);
export default MUITablePaginationActions;
//# sourceMappingURL=MUITablePaginationActions.js.map