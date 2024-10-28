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
import { jsx as _jsx } from "react/jsx-runtime";
import Button from './Button';
var meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {}
};
export default meta;
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    primary: true,
    size: 'medium',
    text: 'Primary Medium'
};
export var Small = Template.bind({});
Small.args = {
    primary: true,
    size: 'small',
    text: 'Small Button'
};
export var Large = Template.bind({});
Large.args = {
    primary: true,
    size: 'large',
    text: 'Large Button'
};
export var Disabled = Template.bind({});
Disabled.args = {
    primary: true,
    size: 'medium',
    text: 'Disabled',
    disabled: true
};
export var Success = Template.bind({});
Success.args = {
    primary: true,
    size: 'medium',
    text: 'Success',
    isSuccess: true
};
export var Error = Template.bind({});
Error.args = {
    primary: true,
    size: 'medium',
    text: 'Error',
    isError: true
};
export var Warning = Template.bind({});
Warning.args = {
    primary: true,
    size: 'medium',
    text: 'Warning',
    isWarning: true
};
//# sourceMappingURL=Button.stories.js.map