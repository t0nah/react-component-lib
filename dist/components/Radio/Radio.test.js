import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Radio } from './Radio';
test('radio is visible', function () {
    render(_jsx(Radio, { id: "radio1", name: "radio", value: "value1" }));
    var radioElement = screen.getByRole('radio');
    expect(radioElement).toBeVisible();
});
test('radio is disabled', function () {
    render(_jsx(Radio, { id: "radio2", name: "radio", value: "value2", disabled: true }));
    var radioElement = screen.getByRole('radio');
    expect(radioElement).toBeDisabled();
});
//# sourceMappingURL=Radio.test.js.map