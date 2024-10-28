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
import Img from './Img';
export default {
    title: 'Components/Img',
    component: Img
};
var Template = function (args) { return _jsx(Img, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image'
};
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { disabled: true });
//# sourceMappingURL=Img.stories.js.map