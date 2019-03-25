var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import get from 'lodash.get';
import has from 'lodash.has';
import { DEFAULT_COL, DEFAULT_OPTS } from './index';
var MUITableUtils = /** @class */ (function () {
    function MUITableUtils() {
    }
    MUITableUtils.formatSeconds = function (secs) {
        var hours = secs / 3600;
        var hoursDisplay = (hours - (hours % 1)).toFixed(0);
        var minutes = (secs / 60) % 60;
        var minDisplay = (minutes / 10 >= 1 ? '' : '0') + Math.floor(minutes);
        return hoursDisplay + ":" + minDisplay;
    };
    MUITableUtils.formatValue = function (value, format) {
        if (format === void 0) { format = 'float'; }
        switch (format) {
            case 'float':
                return value.toFixed(2);
            case 'integer':
                return value.toFixed(0);
            case 'seconds':
                return MUITableUtils.formatSeconds(value);
            case 'minutes':
                return MUITableUtils.formatSeconds(value * 60);
            case 'hours':
                return MUITableUtils.formatSeconds(value * 60 * 60);
        }
    };
    MUITableUtils.formatColumnValue = function (value, column) {
        var formatType = column && column.summaryOptions ? column.summaryOptions.format : 'float';
        var result = MUITableUtils.formatValue(value, formatType);
        if (column && column.summaryOptions) {
            if (column.summaryOptions.postfix) {
                result += column.summaryOptions.postfix;
            }
            if (column.summaryOptions.prefix) {
                result = column.summaryOptions.prefix + result;
            }
        }
        return result;
    };
    MUITableUtils.sumColumnCell = function (value, cell) {
        if (cell && cell.value) {
            return value + Number(cell.value);
        }
        return value;
    };
    MUITableUtils.validateCustomSummaryCell = function (cell) {
        var errorMessages = [];
        if (typeof cell !== 'object') {
            errorMessages.push("Summary cell returned from custom calculation incorrectly \n            formatted. Expected object, was returned \"" + typeof cell + "\"");
        }
        var checkProps = [
            'total',
            'total.value',
            'total.display',
            'total.column',
            'visible',
            'visible.value',
            'visible.display',
            'visible.column'
        ];
        errorMessages.length === 0 &&
            checkProps.forEach(function (prop) {
                if (!has(cell, prop)) {
                    errorMessages.push("Summary cell returned from custom \n                        calculation missing required prop " + prop);
                }
            });
        if (errorMessages.length > 0) {
            console.error(errorMessages, cell);
            throw new Error("Summary cell returned from custom calculation does not meet requirements");
        }
    };
    MUITableUtils.calculateSummaryRow = function (displayRows, allRows, columns) {
        return columns.reduce(function (summary, column, colIndex) {
            if (column.summaryOptions &&
                column.summaryOptions.customCalculate &&
                column.summary) {
                try {
                    var customRow = column.summaryOptions.customCalculate(displayRows, allRows);
                    MUITableUtils.validateCustomSummaryCell(customRow);
                    return summary.concat([customRow]);
                }
                catch (e) {
                    console.error(e);
                    console.error("^^ The above error occured in the \n                        summaryOptions.customCalculate function for the " + column.name + " column. \n                        Using standard summary calculation..,");
                }
            }
            if (!column.summary || column.type === 'dimension') {
                var nullCell = {
                    column: column,
                    value: null,
                    display: ''
                };
                var nullSummary = { visible: nullCell, total: nullCell };
                return summary.concat([nullSummary]);
            }
            var displayVal = displayRows
                .map(function (r) { return r[colIndex]; })
                .reduce(MUITableUtils.sumColumnCell, 0);
            var totalVal = allRows.map(function (r) { return r[colIndex]; }).reduce(MUITableUtils.sumColumnCell, 0);
            if (column.summaryOptions && column.summaryOptions.type === 'AVG') {
                totalVal = totalVal / allRows.length;
                displayVal = displayVal / displayRows.length;
            }
            var summaryCell = {
                visible: {
                    column: column,
                    display: MUITableUtils.formatColumnValue(displayVal, column),
                    value: displayVal
                },
                total: {
                    column: column,
                    display: MUITableUtils.formatColumnValue(totalVal, column),
                    value: totalVal
                }
            };
            return summary.concat([summaryCell]);
        }, []);
    };
    MUITableUtils.sortRows = function (rows, tableState, columns) {
        var colIndex = tableState.sortColumn.index;
        if (colIndex === null || colIndex < 0 || !columns[colIndex])
            return rows;
        var direction = tableState.sortColumn.asc ? 'asc' : 'desc';
        var colTitle = columns[colIndex].name;
        var findCellIndex = function (cell) {
            return cell.column.name === colTitle;
        };
        return rows.sort(function (a, b) {
            var dir = direction === 'asc' ? 1 : -1;
            var aValue = a[a.findIndex(findCellIndex)];
            var bValue = b[b.findIndex(findCellIndex)];
            if (aValue && bValue) {
                var modifier = typeof aValue.value.localeCompare === 'function'
                    ? aValue.value.localeCompare(bValue.value)
                    : Number(aValue.value) - Number(bValue.value);
                return modifier * dir;
            }
            return -1;
        });
    };
    MUITableUtils.searchFilterOk = function (row, tableState) {
        if (!tableState.search.text || !tableState.search.open) {
            return true;
        }
        var searchText = tableState.search.text.trim().toLowerCase();
        var rowText = row
            .map(function (c) { return c.display; })
            .join(' ')
            .toLowerCase();
        return rowText.indexOf(searchText) >= 0;
    };
    MUITableUtils.filterRows = function (rows, tableState, options, columns) {
        var filterColumns = tableState.columnFilters;
        if (!options.display.filter || filterColumns.length <= 0) {
            return rows;
        }
        return rows.reduce(function (passed, row) {
            var ok = MUITableUtils.searchFilterOk(row, tableState) &&
                filterColumns.reduce(function (ok, filterOptions, index) {
                    var column = columns[index];
                    var cell = row[index];
                    if (!cell || !cell.display) {
                        return ok;
                    }
                    if (filterOptions.length <= 0) {
                        return ok;
                    }
                    if (column && column.filterOptions && column.filterOptions.exact) {
                        return filterOptions.indexOf(cell.display) >= 0 ? ok : false;
                    }
                    return (ok &&
                        filterOptions.reduce(function (ok, val) { return (cell.display.includes(val) ? true : ok); }, false));
                }, true);
            return ok ? passed.concat([row]) : passed;
        }, []);
    };
    MUITableUtils.findRowIndex = function (row, rowIds) {
        var rowId = MUITableUtils.rowId(row);
        return rowIds.findIndex(function (r) { return rowId === r; });
    };
    MUITableUtils.rowId = function (row) {
        var idVals = row.reduce(function (idVals, cell) {
            if (cell.column.isRowId) {
                return idVals.concat([cell.display]);
            }
            return idVals;
        }, []);
        if (idVals.length <= 0) {
            return '-';
        }
        return idVals.join('-');
    };
    MUITableUtils.buildRows = function (data, columns, options) {
        var rows = data.map(function (entry) {
            return columns.map(function (c) { return (__assign({}, c.calculateCellDefinition(entry), { column: c })); });
        });
        if (options.rows.skipDuplicates) {
            return MUITableUtils.filterDuplicates(rows);
        }
        if (options.rows.mergeDuplicates) {
            return MUITableUtils.mergeDuplicates(rows, options);
        }
        return rows;
    };
    MUITableUtils.buildOptions = function (props) {
        var defaultOpts = DEFAULT_OPTS;
        var options = {
            title: props.title,
            loading: props.loading,
            display: __assign({}, defaultOpts.display, props.display),
            toolbar: __assign({}, defaultOpts.toolbar, props.toolbar),
            columns: __assign({}, defaultOpts.columns, props.columns),
            rows: __assign({}, defaultOpts.rows, props.rows),
            pagination: __assign({}, defaultOpts.pagination, props.pagination),
            translations: {
                body: __assign({}, defaultOpts.translations.body, (props.translations ? props.translations.body : {})),
                pagination: __assign({}, defaultOpts.translations.pagination, (props.translations ? props.translations.pagination : {})),
                toolbar: __assign({}, defaultOpts.translations.toolbar, (props.translations ? props.translations.toolbar : {})),
                filter: __assign({}, defaultOpts.translations.filter, (props.translations ? props.translations.filter : {})),
                viewColumns: __assign({}, defaultOpts.translations.viewColumns, (props.translations ? props.translations.viewColumns : {})),
                selectedRows: __assign({}, defaultOpts.translations.selectedRows, (props.translations ? props.translations.selectedRows : {}))
            },
            hooks: __assign({}, props.hooks)
        };
        return options;
    };
    MUITableUtils.buildStaticColumns = function (data, staticCols, generatedColumns) {
        var defaultCol = DEFAULT_COL;
        var columns = staticCols.map(function (s) { return (__assign({}, defaultCol, { isRowId: s.type === 'dimension' }, s)); });
        return generatedColumns
            ? columns.concat(MUITableUtils.buildGeneratedColumns(generatedColumns, data)) : columns;
    };
    MUITableUtils.buildGeneratedColumns = function (generatedColumns, data) {
        return generatedColumns.reduce(function (columns, dynamicCol) {
            var columnSourceObjs = data.reduce(function (prev, entry) {
                var rootObj = get(entry, dynamicCol.path, null);
                if (rootObj &&
                    rootObj.hasOwnProperty(dynamicCol.nameProp) &&
                    typeof rootObj[dynamicCol.nameProp] === 'string' &&
                    prev.indexOf(rootObj[dynamicCol.nameProp]) < 0) {
                    return prev.concat([rootObj]);
                }
                return prev;
            }, []);
            for (var _i = 0, columnSourceObjs_1 = columnSourceObjs; _i < columnSourceObjs_1.length; _i++) {
                var entry = columnSourceObjs_1[_i];
                var title = entry[dynamicCol.nameProp];
                var name_1 = title
                    .toLowerCase()
                    .trim()
                    .replace(' ', '') + Math.random();
                var newCol = __assign({}, DEFAULT_COL, { name: name_1,
                    title: title, type: dynamicCol.type }, dynamicCol.options);
                if (dynamicCol.modifyProps) {
                    try {
                        newCol = dynamicCol.modifyProps(newCol, entry);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                columns.push(newCol);
                if (dynamicCol.generateRelatedColumns) {
                    try {
                        var genCols = dynamicCol.generateRelatedColumns(newCol, entry);
                        if (genCols && Array.isArray(genCols)) {
                            genCols.forEach(function (genCol) {
                                return columns.push(__assign({}, DEFAULT_COL, genCol));
                            });
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            }
            return columns;
        }, []);
    };
    MUITableUtils.getRowIds = function (rows) {
        return rows.map(function (r) { return MUITableUtils.rowId(r); });
    };
    MUITableUtils.filterDuplicates = function (rows) {
        return rows.reduce(function (prev, row) {
            if (MUITableUtils.findRowIndex(row, MUITableUtils.getRowIds(prev)) < 0) {
                return prev.concat([row]);
            }
            return prev;
        }, []);
    };
    MUITableUtils.mergeDuplicates = function (rows, options) {
        return rows.reduce(function (prev, row) {
            var prevIndex = MUITableUtils.findRowIndex(row, MUITableUtils.getRowIds(prev));
            var existingRow = prev[prevIndex];
            if (existingRow) {
                if (options.rows.mergeFunction) {
                    try {
                        prev[prevIndex] = options.rows.mergeFunction([existingRow, row]);
                    }
                    catch (e) {
                        console.error('Error thrown in the options.rows.mergeFunction provided, ' +
                            'reverting to default', e);
                        prev[prevIndex] = MUITableUtils.mergeCellsCalc([existingRow, row]);
                    }
                }
                else {
                    prev[prevIndex] = MUITableUtils.mergeCellsCalc([existingRow, row]);
                }
                return prev;
            }
            return prev.concat([row]);
        }, []);
    };
    MUITableUtils.mergeForHiddenColumns = function (rows, options, viewColumns) {
        // If no columns are hidden or the option = false just return rows
        if (!options.rows.hiddenColumnMerge || viewColumns.indexOf(false) < 0) {
            return rows;
        }
        /**
         * Set isRowId = false for any columns that are hidden, since rowIds are calculated
         * based on cells where the column.isRowId = true
         */
        var newRows = rows.map(function (row) {
            return row.map(function (cell, colIndex) { return (__assign({}, cell, { column: __assign({}, cell.column, { isRowId: cell.column.isRowId && !!viewColumns[colIndex] }) })); });
        });
        return MUITableUtils.mergeDuplicates(newRows, options);
    };
    // Utility function, used for both mergeDuplicates and hiddenColumnsMergeDuplicates
    MUITableUtils.mergeCellsCalc = function (rows) {
        return rows.reduce(function (finalRow, row) {
            row.forEach(function (cell, cellIndex) {
                if (!finalRow[cellIndex]) {
                    finalRow[cellIndex] = cell;
                }
                else if (cell.column.type === 'metric') {
                    var existingSummaryOpts = finalRow[cellIndex].column.summaryOptions;
                    var format = existingSummaryOpts ? existingSummaryOpts.format : 'float';
                    finalRow[cellIndex].value =
                        Number(finalRow[cellIndex].value) + Number(cell.value);
                    finalRow[cellIndex].display = MUITableUtils.formatValue(finalRow[cellIndex].value, format);
                }
            });
            return finalRow;
        }, []);
    };
    return MUITableUtils;
}());
export default MUITableUtils;
//# sourceMappingURL=MUITableUtils.js.map