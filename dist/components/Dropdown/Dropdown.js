var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
var Select = styled.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  &:disabled {\n    background-color: #f3f3f3;\n    color: #ccc;\n    cursor: not-allowed;\n  }\n"], ["\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  &:disabled {\n    background-color: #f3f3f3;\n    color: #ccc;\n    cursor: not-allowed;\n  }\n"])));
var Dropdown = function (_a) {
    var id = _a.id, name = _a.name, value = _a.value, onChange = _a.onChange, options = _a.options, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (_jsx(Select, { id: id, name: name, value: value, onChange: onChange, disabled: disabled, children: options.map(function (option) { return (_jsx("option", { value: option.value, children: option.label }, option.value)); }) }));
};
export default Dropdown;
var templateObject_1;
//# sourceMappingURL=Dropdown.js.map