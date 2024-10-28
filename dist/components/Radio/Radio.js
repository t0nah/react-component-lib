var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledRadio = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0.5rem;\n  cursor: pointer;\n  ", "\n"], ["\n  margin: 0.5rem;\n  cursor: pointer;\n  ", "\n"])), function (props) {
    return props.disabled &&
        "\n    cursor: not-allowed;\n  ";
});
export var Radio = function (_a) {
    var id = _a.id, name = _a.name, value = _a.value, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange;
    return (_jsx(StyledRadio, { type: "radio", id: id, name: name, value: value, checked: checked, disabled: disabled, onChange: onChange }));
};
export default Radio;
var templateObject_1;
//# sourceMappingURL=Radio.js.map