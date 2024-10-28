import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableFooter from './TableFooter';
describe('Running Test for Table', function () {
    test('Check Text Front Size', function () {
        render(_jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Header 1" }), _jsx(TableCell, { children: "Header 2" })] }) }), _jsx("tbody", { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Cell 1" }), _jsx(TableCell, { children: "Cell 2" })] }) }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Footer 1" }), _jsx(TableCell, { children: "Footer 2" })] }) })] }));
        expect(screen.getByText('Cell 1')).toBeInTheDocument();
        expect(screen.getByText('Cell 2')).toBeInTheDocument();
    });
    test('has correct style when disabled', function () {
        render(_jsxs(Table, { disabled: true, children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Header 1" }), _jsx(TableCell, { children: "Header 2" })] }) }), _jsx("tbody", { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Cell 1" }), _jsx(TableCell, { children: "Cell 2" })] }) }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Footer 1" }), _jsx(TableCell, { children: "Footer 2" })] }) })] }));
        var table = screen.getByRole('table');
        expect(table).toHaveStyle('background-color: lightgrey');
        expect(table).toHaveStyle('cursor: not-allowed');
        expect(table).toHaveStyle('color: #darkgrey');
    });
});
//# sourceMappingURL=Table.test.js.map