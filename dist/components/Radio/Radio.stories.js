import { jsx as _jsx } from "react/jsx-runtime";
import { Radio } from './Radio';
export default {
    title: 'Components/Radio',
    component: Radio
};
export var Default = function () { return _jsx(Radio, { id: "radio1", name: "radio", value: "value1" }); };
export var Disabled = function () { return (_jsx(Radio, { id: "radio2", name: "radio", value: "value2", disabled: true })); };
//# sourceMappingURL=Radio.stories.js.map