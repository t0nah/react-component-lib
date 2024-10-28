import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';
describe('Running Test for Button', function () {
    test('renders the Button component', function () {
        render(_jsx(Button, { text: "Click me" }));
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });
    test('Check Button Disabled', function () {
        render(_jsx(Button, { text: "Button", disabled: true }));
        expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
    });
});
//# sourceMappingURL=Button.test.js.map