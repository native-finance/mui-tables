import { WithStyles } from '@material-ui/core/styles';
import React from 'react';
declare const defaultFilterListStyles: {
    root: {
        display: string;
        justifyContent: string;
        flexWrap: "wrap";
        margin: string;
    };
    chip: {
        margin: string;
    };
};
export interface MUITableFilterListProps {
}
interface Props extends MUITableFilterListProps, WithStyles<typeof defaultFilterListStyles> {
}
declare const _default: React.ComponentType<Pick<Props, never> & import("@material-ui/core/styles").StyledComponentProps<"root" | "chip">>;
export default _default;
