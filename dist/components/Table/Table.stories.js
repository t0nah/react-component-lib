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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Table from './Table';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableFooter from './TableFooter';
var meta = {
    title: 'Components/Table',
    component: Table
};
export default meta;
var Template = function (args) { return (_jsxs(Table, __assign({}, args, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Header 1" }), _jsx(TableCell, { children: "Header 2" })] }) }), _jsxs("tbody", { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Row 1, Cell 1" }), _jsx(TableCell, { children: "Row 1, Cell 2" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Row 2, Cell 1" }), _jsx(TableCell, { children: "Row 2, Cell 2" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Row 3, Cell 1" }), _jsx(TableCell, { children: "Row 3, Cell 2" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Row 4, Cell 1" }), _jsx(TableCell, { children: "Row 4, Cell 2" })] })] }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Footer 1" }), _jsx(TableCell, { children: "Footer 2" })] }) })] }))); };
// Default Table
export var Default = Template.bind({});
Default.args = {};
export var DisabledTable = Template.bind({});
DisabledTable.args = {
    disabled: true
};
//# sourceMappingURL=Table.stories.js.map