import { Theme, WithStyles } from '@material-ui/core';
import React from 'react';
import { SummaryRowCell } from '../../types/index';
declare const styles: (theme: Theme) => {
    summaryTitle: {
        color: string;
    };
    emptyTitle: {
        textAlign: "center";
    };
    summaryRow: {};
    fixedHeader: {
        position: "sticky";
        top: number;
        left: string;
        zIndex: number;
        bottom: number;
    };
    summaryCell: {
        backgroundColor: string;
        border: string;
        '&::after': {
            content: string;
            zIndex: number;
            position: "absolute";
            bottom: number;
            left: number;
            width: string;
            borderBottom: string;
        };
        '&::before': {
            content: string;
            zIndex: number;
            position: "absolute";
            top: number;
            left: number;
            width: string;
            borderBottom: string;
            height: number;
            background: string;
        };
    };
    summaryCaption: {
        color: string;
    };
};
interface MUISummaryCellProps extends WithStyles<typeof styles> {
    summaryCell: SummaryRowCell;
    cellKey: string;
}
export declare const MUISummaryCell: (props: MUISummaryCellProps) => JSX.Element;
declare const _default: React.ComponentType<Pick<{
    classes: Record<"fixedHeader" | "summaryTitle" | "emptyTitle" | "summaryRow" | "summaryCell" | "summaryCaption", string>;
}, never> & import("@material-ui/core").StyledComponentProps<"fixedHeader" | "summaryTitle" | "emptyTitle" | "summaryRow" | "summaryCell" | "summaryCaption">>;
export default _default;
