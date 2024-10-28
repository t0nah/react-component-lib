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
import Card from './Card';
export default {
    title: 'Components/Card',
    component: Card
};
var Template = function (args) { return _jsx(Card, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    imageurl: 'https://via.placeholder.com/300',
    title: 'Card Title',
    content: 'This is a card description.',
    buttonText: 'Click Me'
};
export var Disabled = Template.bind({});
Disabled.args = {
    imageurl: 'https://via.placeholder.com/300',
    title: 'Card Title',
    content: 'This is a card description.',
    buttonText: 'Click Me',
    disabled: true
};
//# sourceMappingURL=Card.stories.js.map