import { createStyles, Typography, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import FilterIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import { default as React, useState } from 'react';
import { useMUITableContext } from '../MUITable';
import MUITableFilter from './Filters/MUITableFilter';
import Popover from './MUITablePopover';
var popStyles = function (theme) {
    return createStyles({
        icon: {
            '&:hover': {
                color: theme.palette.primary.main
            }
        },
        iconActive: {
            color: theme.palette.primary.main
        },
        iconButton: {
            padding: 7
        },
        pop: {
            maxHeight: 400
        }
    });
};
export var FixedSearchPopover = function (props) {
    var classes = props.classes;
    var options = useMUITableContext().options;
    var _a = useState(false), active = _a[0], setActive = _a[1];
    return (React.createElement(Popover, { open: active, refExit: function () { return setActive(!active); }, className: classes.pop, trigger: React.createElement(IconButton, { "data-testid": 'fixed-search-filter', "aria-label": options.translations.filter.title, className: classes.iconButton, classes: { root: active ? classes.iconActive : classes.icon }, onClick: function () { return setActive(!active); } },
            React.createElement(Tooltip, { title: options.translations.filter.title },
                React.createElement(FilterIcon, null))), content: React.createElement(MUITableFilter, null) }));
};
var FSPop = withStyles(popStyles, { withTheme: true })(FixedSearchPopover);
var searchStyles = function (theme) {
    return createStyles({
        root: {
            padding: '20px 0'
        },
        textField: {
            margin: 0,
            paddingTop: 10
        },
        input: {
            padding: 0,
            height: 46
        },
        notchedOutline: {
            borderColor: theme.palette.grey['100'] + " !important"
        },
        cssFocused: {},
        inputRoot: {
            background: theme.palette.grey['100'],
            border: 'none',
            boxSizing: 'border-box',
            borderRadius: 4,
            '&$inputFocused $notchedOutline': {
                borderColor: "white !important",
                boxShadow: theme.shadows[1]
            }
        },
        inputFocused: {
            background: theme.palette.common.white,
            borderColor: theme.palette.divider + " !important"
        },
        icon: {
            color: theme.palette.text.secondary
        },
        iconButton: {
            color: theme.palette.text.secondary,
            padding: 7
        },
        wrapper: {
            padding: 5,
            justifyItems: 'flex-start',
            alignItems: 'center',
            display: 'flex'
        },
        adornment: {
            marginLeft: 0
        },
        tabWrapper: {
            borderTop: "1px solid " + theme.palette.divider,
            borderBottom: "1px solid " + theme.palette.divider,
            marginTop: 20
        },
        tab: {
            '&:hover': {
                background: theme.palette.grey['100']
            }
        },
        customSelectWrap: {
            position: 'absolute',
            width: '100%',
            left: 0,
            top: 0
        }
    });
};
var MUITableFixedSearch = function (props) {
    var classes = props.classes;
    var _a = useMUITableContext(), searchTextUpdate = _a.searchTextUpdate, search = _a.search, options = _a.options, toggleSearchVisible = _a.toggleSearchVisible;
    var title = options.title;
    // Event handler for text field
    var onChange = function (e) {
        changeText(e.target.value ? e.target.value : null);
    };
    // Used by close button
    var changeText = function (text) {
        if (!search.open && !!text) {
            toggleSearchVisible();
        }
        searchTextUpdate(text ? text : '');
    };
    return (React.createElement(Grid, { spacing: 0, container: true, className: classes.root, alignItems: 'center', "data-testid": 'FixedSearch' },
        React.createElement(Grid, { item: true, xs: 12 },
            React.createElement(Typography, { variant: 'h5', gutterBottom: true }, title),
            React.createElement(TextField, { "data-testid": "fixed-search", className: classes.textField, value: search.text ? search.text : '', onChange: onChange, variant: "outlined", fullWidth: true, InputProps: {
                    inputProps: {
                        'data-testid': 'fixed-search-input'
                    },
                    classes: {
                        root: classes.inputRoot,
                        focused: classes.inputFocused,
                        notchedOutline: classes.notchedOutline,
                        input: classes.input
                    },
                    startAdornment: (React.createElement(InputAdornment, { position: "start" },
                        React.createElement(SearchIcon, { className: classes.icon }))),
                    endAdornment: (React.createElement(React.Fragment, null,
                        search.text && search.text.length > 0 ? (React.createElement(InputAdornment, { position: "end", className: classes.adornment },
                            React.createElement(IconButton, { "data-testid": 'clear-fixed-search', id: 'clear-fixed-search', className: classes.iconButton, onClick: function () { return changeText(); } },
                                React.createElement(CloseIcon, null)))) : null,
                        React.createElement(InputAdornment, { position: "end", className: classes.adornment },
                            React.createElement(FSPop, null))))
                } }))));
};
export default withStyles(searchStyles, { withTheme: true, name: 'MUITableFixedSearch' })(MUITableFixedSearch);
//# sourceMappingURL=MUITableFixedSearch.js.map