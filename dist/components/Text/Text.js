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
var StyledText = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: \"Playfair Display\", serif;\n  font-size: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  ", "\n"], ["\n  font-family: \"Playfair Display\", serif;\n  font-size: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  ", "\n"])), function (props) {
    return props.types === 'header'
        ? '1.6rem'
        : props.types === 'paragraph'
            ? '1rem'
            : '0.7rem';
}, function (props) { return (props.bold ? 'bold' : 'normal'); }, function (props) { return (props.italic ? 'italic' : 'normal'); }, function (props) {
    return props.disabled &&
        "\n    background-color: grey;\n    cursor: not-allowed;\n    color: #ccc;\n  ";
});
var Text = function (_a) {
    var _b = _a.types, types = _b === void 0 ? 'paragraph' : _b, bold = _a.bold, italic = _a.italic, text = _a.text, props = __rest(_a, ["types", "bold", "italic", "text"]);
    return (_jsx(StyledText, __assign({ types: types, bold: bold, italic: italic }, props, { children: text })));
};
export default Text;
var templateObject_1;
//# sourceMappingURL=Text.js.map