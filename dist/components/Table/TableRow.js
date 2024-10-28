var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledTableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"], ["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"])));
var TableRow = function (_a) {
    var children = _a.children;
    return _jsx(StyledTableRow, { children: children });
};
export default TableRow;
var templateObject_1;
//# sourceMappingURL=TableRow.js.map