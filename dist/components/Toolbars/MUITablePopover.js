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
import MuiPopover from '@material-ui/core/Popover';
import React from 'react';
import { findDOMNode } from 'react-dom';
var MUITablePopover = /** @class */ (function (_super) {
    __extends(MUITablePopover, _super);
    function MUITablePopover(props) {
        var _this = _super.call(this, props) || this;
        _this.anchorEl = null;
        _this.popoverActions = null;
        _this.handleClick = function () {
            _this.anchorEl = findDOMNode(_this.anchorEl);
            _this.setState({ open: true });
        };
        _this.handleRequestClose = function (cb) {
            _this.setState({ open: false }, function () {
                cb && typeof cb === 'function' && cb();
            });
        };
        _this.handleOnExit = function () {
            if (_this.props.refExit) {
                _this.props.refExit();
            }
        };
        _this.state = {
            open: !!props.open
        };
        return _this;
    }
    MUITablePopover.prototype.componentWillMount = function () {
        this.anchorEl = null;
    };
    MUITablePopover.prototype.componentDidMount = function () {
        if (this.props.refClose) {
            this.props.refClose(this.handleRequestClose);
        }
    };
    MUITablePopover.prototype.componentDidUpdate = function (prevProps, prevState) {
        /*
         * Update Popover position if a filter removes data from the table because
         * it affects the window height which would cause the Popover to in the wrong place
         */
        if (this.state.open === true) {
            this.anchorEl = findDOMNode(this.anchorEl);
            if (this.popoverActions) {
                this.popoverActions.updatePosition();
            }
        }
    };
    MUITablePopover.prototype.render = function () {
        var _this = this;
        var _a = this.props, trigger = _a.trigger, content = _a.content, open = _a.open, className = _a.className;
        var transformOriginSpecs = {
            vertical: 'bottom',
            horizontal: 'center'
        };
        var anchorOriginSpecs = {
            vertical: 'bottom',
            horizontal: 'center'
        };
        var triggerEl = React.cloneElement(trigger, {
            key: 'content',
            ref: function (el) { return (_this.anchorEl = el); },
            onClick: function () {
                if (trigger.props.onClick) {
                    trigger.props.onClick();
                }
                _this.handleClick();
            }
        });
        return (React.createElement(React.Fragment, null,
            React.createElement(MuiPopover, { className: className, action: function (actions) { return (_this.popoverActions = actions); }, elevation: 2, open: open && this.state.open, onClose: this.handleRequestClose, onExited: this.handleOnExit, anchorEl: this.anchorEl, anchorOrigin: anchorOriginSpecs, transformOrigin: transformOriginSpecs }, content),
            triggerEl));
    };
    return MUITablePopover;
}(React.Component));
export default MUITablePopover;
//# sourceMappingURL=MUITablePopover.js.map