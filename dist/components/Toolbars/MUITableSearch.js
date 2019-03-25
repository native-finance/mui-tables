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
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
var defaultSearchStyles = function (theme) { return ({
    main: {
        display: 'flex',
        flex: '1 0 auto'
    },
    searchIcon: {
        color: theme.palette.text.secondary,
        marginTop: '10px',
        marginRight: '8px'
    },
    searchText: {
        flex: '0.8 0'
    },
    clearIcon: {
        '&:hover': {
            color: theme.palette.error.main
        }
    }
}); };
var MUITableSearch = /** @class */ (function (_super) {
    __extends(MUITableSearch, _super);
    function MUITableSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTextChange = function (event) {
            var _a = _this.props.context, searchTextUpdate = _a.searchTextUpdate, options = _a.options;
            if (options.hooks && options.hooks.onSearchChange) {
                options.hooks.onSearchChange(event.target.value);
            }
            searchTextUpdate(event.target.value);
        };
        _this.onKeyDown = function (event) {
            var toggleSearchVisible = _this.props.toggleSearchVisible;
            if (event.keyCode === 27) {
                toggleSearchVisible();
            }
        };
        return _this;
    }
    MUITableSearch.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.onKeyDown, false);
    };
    MUITableSearch.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.onKeyDown, false);
    };
    MUITableSearch.prototype.render = function () {
        var _a = this.props, classes = _a.classes, context = _a.context, toggleSearchVisible = _a.toggleSearchVisible;
        var translations = context.options.translations;
        return (React.createElement(Grow, { appear: true, in: true, timeout: 300 },
            React.createElement("div", { className: classes.main },
                React.createElement(SearchIcon, { className: classes.searchIcon }),
                React.createElement(TextField, { className: classes.searchText, autoFocus: true, InputProps: {
                        'aria-label': translations.toolbar.search
                    }, onChange: this.handleTextChange, fullWidth: true }),
                React.createElement(IconButton, { className: classes.clearIcon, "data-testid": "toggleSearchVisible", onClick: toggleSearchVisible },
                    React.createElement(ClearIcon, null)))));
    };
    return MUITableSearch;
}(React.Component));
export { MUITableSearch };
export default withStyles(defaultSearchStyles, { name: 'MUITableSearch' })(MUITableSearch);
//# sourceMappingURL=MUITableSearch.js.map