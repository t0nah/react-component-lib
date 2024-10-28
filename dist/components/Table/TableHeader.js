var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledTableHeader = styled.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (props) { return props.theme.textColor; });
var TableHeader = function (_a) {
    var children = _a.children;
    return _jsx(StyledTableHeader, { children: children });
};
export default TableHeader;
var templateObject_1;
//# sourceMappingURL=TableHeader.js.map