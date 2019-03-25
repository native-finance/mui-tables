import { Theme, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { StateColumn } from '../../../types';
export declare const defaultFilterStyles: (theme: Theme) => {
    __docgenInfo: {};
    displayName: {};
    root: {
        backgroundColor: string;
        padding: string;
        fontFamily: string;
    };
    header: {
        flex: string;
        marginBottom: string;
        width: string;
        display: string;
        justifyContent: string;
    };
    title: {
        display: string;
        marginLeft: string;
        color: string;
        fontSize: string;
        fontWeight: number;
    };
    noMargin: {
        marginLeft: string;
    };
    reset: {
        alignSelf: string;
    };
    resetLink: {
        marginLeft: string;
        fontSize: string;
        cursor: string;
    };
    filtersSelected: {
        alignSelf: "right";
    };
    checkboxList: {
        flex: string;
        display: string;
        marginRight: string;
    };
    checkboxListTitle: {
        marginLeft: string;
        marginBottom: string;
        fontSize: string;
        color: string;
        textAlign: "left";
        fontWeight: number;
    };
    checkboxFormGroup: {
        marginTop: string;
    };
    checkboxFormControl: {
        margin: string;
    };
    checkboxFormControlLabel: {
        fontSize: string;
        marginLeft: string;
        color: string;
    };
    checkboxIcon: {
        width: string;
        height: string;
    };
    checkbox: {
        '&$checked': {
            color: string;
        };
    };
    checked: {};
    selectRoot: {
        display: string;
        marginTop: string;
        flexDirection: "row";
        flexWrap: "wrap";
        width: string;
        height: string;
        justifyContent: string;
    };
    selectFormControl: {
        flex: string;
        marginRight: string;
        marginBottom: string;
    };
    textFieldRoot: {
        display: string;
        marginTop: string;
        flexDirection: "row";
        flexWrap: "wrap";
        width: string;
    };
    textFieldFormControl: {
        flex: string;
        marginRight: string;
        marginBottom: string;
    };
};
interface RenderFilterProp extends WithStyles<typeof defaultFilterStyles> {
    column: StateColumn<any>;
    index: number;
    currentValues: string[];
}
export declare const MUITableMultiSelectFilter: (props: RenderFilterProp) => JSX.Element;
export declare const MUITableSelectFilter: (props: RenderFilterProp) => JSX.Element;
export declare const MUITableCheckBoxFilter: (props: RenderFilterProp) => JSX.Element;
declare const _default: React.ComponentType<{}>;
export default _default;
