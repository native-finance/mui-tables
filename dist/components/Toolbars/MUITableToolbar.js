var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import FilterIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import classNames from 'classnames';
import React from 'react';
import MUITableFilter from './Filters/MUITableFilter';
import MUITableDatePicker from './MUITableDatePicker';
import MUITableFixedSearch from './MUITableFixedSearch';
import Popover from './MUITablePopover';
import MUITableSearch from './MUITableSearch';
import MUITableViewCols from './MUITableViewCols';
export var defaultToolbarStyles = function (theme) {
    var _a;
    return (_a = {
            root: {
                width: '100%',
                flexWrap: 'wrap'
            },
            selectActive: {
                visibility: 'hidden'
            },
            leftBar: {},
            actions: {
                textAlign: 'right'
            },
            titleRoot: {},
            titleText: {},
            icon: {
                '&:hover': {
                    color: theme.palette.primary.main
                }
            },
            iconActive: {
                color: theme.palette.primary.main
            },
            searchIcon: {
                display: 'inline-flex',
                marginTop: '10px',
                marginRight: '8px'
            }
        },
        _a[theme.breakpoints.down('sm')] = {
            titleRoot: {},
            titleText: {
                fontSize: '16px'
            },
            spacer: {
                display: 'none'
            },
            leftBar: {
                // flex: "1 1 40%",
                padding: '8px 0px'
            },
            actions: {
                // flex: "1 1 60%",
                textAlign: 'right'
            }
        },
        _a[theme.breakpoints.down('xs')] = {
            root: {
                display: 'block'
            },
            leftBar: {
                padding: '8px 0px 0px 0px'
            },
            titleText: {
                textAlign: 'center'
            },
            actions: {
                textAlign: 'center'
            }
        },
        _a);
};
var MUITableToolbar = /** @class */ (function (_super) {
    __extends(MUITableToolbar, _super);
    function MUITableToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchButton = null;
        _this.state = {
            iconActive: null
        };
        _this.setActiveIcon = function (iconName) { return function () {
            _this.setState(function () { return ({
                iconActive: iconName
            }); });
        }; };
        _this.getActiveIcon = function (iconName) {
            var classes = _this.props.classes;
            return _this.state.iconActive !== iconName ? classes.icon : classes.iconActive;
        };
        _this.toggleSearch = function () {
            var _a = _this.props.context, toggleSearchVisible = _a.toggleSearchVisible, search = _a.search;
            toggleSearchVisible();
            _this.setState({
                iconActive: search.open ? null : 'search'
            });
        };
        return _this;
    }
    MUITableToolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, context = _a.context;
        var options = context.options, search = context.search, selectedRows = context.selectedRows;
        var translations = options.translations, display = options.display, title = options.title, toolbar = options.toolbar;
        var _b = translations.toolbar, viewColumns = _b.viewColumns, filterTable = _b.filterTable;
        var hidden = options.rows.selectBarTop && selectedRows.length > 0;
        return toolbar.customToolbarFull /* Fragment  prevents errors if fn doesn't return*/ ? (React.createElement(React.Fragment, null, toolbar.customToolbarFull(context))) : (React.createElement(Toolbar, { className: classNames(classes.root, hidden && classes.selectActive), role: 'toolbar', "aria-label": 'Table Toolbar' },
            React.createElement(Grid, { container: true, spacing: 0, alignItems: 'center' },
                React.createElement(Grid, { item: true, xs: 6, className: classes.leftBar }, display.fixedSearch ? (React.createElement(MUITableFixedSearch, null)) : toolbar.customToolbarLeft ? (toolbar.customToolbarLeft(context)) : search.open ? (React.createElement(MUITableSearch, { context: this.props.context, toggleSearchVisible: this.toggleSearch })) : (React.createElement("div", { className: classes.titleRoot, "aria-hidden": 'true' },
                    React.createElement(Typography, { variant: "h6", className: classes.titleText }, title)))),
                React.createElement(Grid, { item: true, xs: 6, className: classes.actions },
                    display.search && (React.createElement(Tooltip, { title: translations.toolbar.search },
                        React.createElement(IconButton, { "aria-label": translations.toolbar.search, buttonRef: function (el) { return (_this.searchButton = el); }, classes: { root: this.getActiveIcon('search') }, onClick: this.toggleSearch },
                            React.createElement(SearchIcon, null)))),
                    display.viewColumns && (React.createElement(Popover, { refExit: this.setActiveIcon(null), refClose: this.setActiveIcon(null), open: this.state.iconActive === 'viewcolumns', trigger: React.createElement(IconButton, { "aria-label": viewColumns, classes: { root: this.getActiveIcon('viewcolumns') }, onClick: this.setActiveIcon('viewcolumns') },
                            React.createElement(Tooltip, { title: viewColumns },
                                React.createElement(ViewColumnIcon, null))), content: React.createElement(MUITableViewCols, null) })),
                    display.filter && (React.createElement(Popover, { refExit: this.setActiveIcon(null), refClose: this.setActiveIcon(null), open: this.state.iconActive === 'filter', trigger: React.createElement(IconButton, { "aria-label": filterTable, classes: { root: this.getActiveIcon('filter') }, onClick: this.setActiveIcon('filter') },
                            React.createElement(Tooltip, { title: filterTable },
                                React.createElement(FilterIcon, null))), content: React.createElement(MUITableFilter, null) })),
                    React.createElement(MUITableDatePicker, null))),
            toolbar.customToolbarBottom ? (React.createElement(Grid, { container: true, spacing: 0, alignItems: 'center' }, toolbar.customToolbarBottom(context))) : null));
    };
    return MUITableToolbar;
}(React.Component));
export { MUITableToolbar };
export default withStyles(defaultToolbarStyles, { name: 'MUIDataTableToolbar' })(MUITableToolbar);
//# sourceMappingURL=MUITableToolbar.js.map