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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledTable = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border: none;\n  ", "\n"], ["\n  width: 100%;\n  border: none;\n  ", "\n"])), function (props) {
    return props.disabled &&
        "\n    background-color: lightgrey;\n    cursor: not-allowed;\n    color: #darkgrey;\n  ";
});
var Table = function (props) {
    return _jsx(StyledTable, __assign({}, props, { children: props.children }));
};
export default Table;
var templateObject_1;
//# sourceMappingURL=Table.js.map