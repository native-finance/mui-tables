import { Theme, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import { MUITableContext } from '../../types';
declare const defaultSearchStyles: (theme: Theme) => {
    main: {
        display: string;
        flex: string;
    };
    searchIcon: {
        color: string;
        marginTop: string;
        marginRight: string;
    };
    searchText: {
        flex: string;
    };
    clearIcon: {
        '&:hover': {
            color: string;
        };
    };
};
export interface MUITableSearchProps {
    context: MUITableContext;
    toggleSearchVisible: () => void;
}
interface Props extends WithStyles<typeof defaultSearchStyles>, MUITableSearchProps {
}
export declare class MUITableSearch extends React.Component<Props> {
    handleTextChange: (event: React.ChangeEvent<any>) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<MUITableSearchProps>;
export default _default;
