import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { useMUITableContext } from '../../MUITable';
var defaultFilterListStyles = {
    root: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        margin: '0px 16px 0px 16px'
    },
    chip: {
        margin: '8px 8px 0px 0px'
    }
};
var MUITableFilterList = function (props) {
    var _a = useMUITableContext(), onFilterUpdate = _a.onFilterUpdate, columns = _a.columns, columnFilters = _a.columnFilters, options = _a.options;
    var classes = props.classes;
    if (!options.display.filterValues) {
        return null;
    }
    var filterUpdate = function (col, valueIndex, value) { return function () {
        onFilterUpdate(valueIndex, value);
    }; };
    return (React.createElement("div", { className: classes.root, id: 'MUITable-FilterList' }, columnFilters.map(function (col, index) {
        return col.map(function (data, valIndex) { return (React.createElement(Chip, { label: data, key: index + "-" + valIndex, onDelete: filterUpdate(columns[index], index, data), className: classes.chip })); });
    })));
};
export default withStyles(defaultFilterListStyles, { name: 'MUITableFilterList' })(MUITableFilterList);
//# sourceMappingURL=MUITableFilterList.js.map