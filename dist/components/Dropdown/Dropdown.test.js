import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
describe('Dropdown', function () {
    test('renders the Dropdown component', function () {
        render(_jsx(Dropdown, { options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' }
            ], value: "option1", onChange: function () { } }));
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
    test('disabled state changes background color', function () {
        render(_jsx(Dropdown, { options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' }
            ], value: "option1", onChange: function () { }, disabled: true }));
        expect(screen.getByRole('combobox')).toHaveStyle('background-color: #f3f3f3');
    });
});
//# sourceMappingURL=Dropdown.test.js.map