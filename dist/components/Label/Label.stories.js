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
import Label from './Label';
var meta = {
    title: 'Components/Label',
    component: Label,
    argTypes: {}
};
export default meta;
export var Default = {
    args: {
        htmlFor: 'my-input',
        text: 'Username:'
    }
};
export var SmallFontSize = {
    args: __assign(__assign({}, Default.args), { size: 'small' })
};
export var LargeFontSize = {
    args: __assign(__assign({}, Default.args), { size: 'large' })
};
export var DisabledLabel = {
    args: __assign(__assign({}, Default.args), { size: 'large', disabled: true })
};
//# sourceMappingURL=Label.stories.js.map