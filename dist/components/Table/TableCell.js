var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledTableCell = styled.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 8px;\n  text-align: ", ";\n"], ["\n  padding: 8px;\n  text-align: ", ";\n"])), function (props) { var _a; return (_a = props.align) !== null && _a !== void 0 ? _a : 'center'; });
var TableCell = function (_a) {
    var children = _a.children, _b = _a.align, align = _b === void 0 ? 'center' : _b;
    return _jsx(StyledTableCell, { align: align, children: children });
};
export default TableCell;
var templateObject_1;
//# sourceMappingURL=TableCell.js.map