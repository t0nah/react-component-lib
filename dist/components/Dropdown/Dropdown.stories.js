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
import { useState } from 'react';
import Dropdown from './Dropdown';
var meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
    argTypes: {}
};
export default meta;
var Template = function (args) {
    var _a = useState(args.value), value = _a[0], setValue = _a[1];
    return (_jsx(Dropdown, __assign({}, args, { value: value, onChange: function (e) {
            setValue(e.target.value);
        } })));
};
export var Primary = Template.bind({});
Primary.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ],
    value: 'option1'
};
export var Disabled = Template.bind({});
Disabled.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ],
    value: 'option1',
    disabled: true
};
//# sourceMappingURL=Dropdown.stories.js.map