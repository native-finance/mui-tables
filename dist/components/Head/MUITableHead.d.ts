import { Theme, WithStyles } from '@material-ui/core/styles';
import React from 'react';
declare const defaultHeadStyles: (theme: Theme) => {
    main: {};
    responsiveStacked: {
        [x: string]: {
            display: string;
        };
    };
};
export interface MUITableHeadProps {
}
interface Props extends MUITableHeadProps, WithStyles<typeof defaultHeadStyles> {
}
export declare const MUITableHead: (props: Props) => JSX.Element;
declare const _default: React.ComponentType<Pick<Props, never> & import("@material-ui/core/styles").StyledComponentProps<"main" | "responsiveStacked">>;
export default _default;
