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
import HeroImage from './HeroImg';
import { HeroImg } from '.';
export default {
    title: 'Components/HeroImage',
    component: HeroImg
};
var Template = function (args) { return _jsx(HeroImage, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    imageUrl: 'https://via.placeholder.com/1200x400',
    title: 'Welcome to Our Website',
    subtitle: 'Discover our amazing services',
    Text: 'Learn More'
};
export var Disabled = Template.bind({});
Disabled.args = __assign(__assign({}, Default.args), { disabled: true });
//# sourceMappingURL=HeroImg.stories.js.map