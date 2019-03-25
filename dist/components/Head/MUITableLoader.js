import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';
var styles = {
    progressWrap: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        zIndex: 200,
        height: 10,
        overflow: 'hidden',
        top: 0,
        borderRadius: 4
    },
    progress: {
        position: 'absolute',
        display: 'block',
        width: '100%'
    }
};
export var MUITableLoader = function (props) {
    var loading = props.loading;
    if (!loading)
        return null;
    return (React.createElement("div", { style: styles.progressWrap },
        React.createElement(LinearProgress, { style: styles.progress })));
};
//# sourceMappingURL=MUITableLoader.js.map