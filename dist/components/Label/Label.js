var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledLabel = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: \"Playfair Display\", serif;\n  cursor: pointer;\n  color: \"#2F2F2F\";\n  ", "\n"], ["\n  font-size: ", ";\n  font-family: \"Playfair Display\", serif;\n  cursor: pointer;\n  color: \"#2F2F2F\";\n  ", "\n"])), function (props) {
    return props.size === 'small'
        ? '0.8rem'
        : props.size === 'medium'
            ? '1rem'
            : '1.1rem';
}, function (props) {
    return props.disabled &&
        "\n    background-color: grey;\n    cursor: not-allowed;\n    color: #ccc;\n  ";
});
var Label = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, htmlFor = _a.htmlFor, text = _a.text, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["size", "htmlFor", "text", "disabled"]);
    return (_jsx(StyledLabel, __assign({ size: size, htmlFor: htmlFor, disabled: disabled }, props, { children: text })));
};
export default Label;
var templateObject_1;
//# sourceMappingURL=Label.js.map