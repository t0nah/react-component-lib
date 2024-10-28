import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Label from './Label';
describe('Running Test for Label', function () {
    test('Check Label Front Size', function () {
        render(_jsx(Label, { htmlFor: "username", size: "large", text: "Label" }));
        var labelElement = screen.getByText('Label');
        expect(labelElement).toBeInTheDocument();
    });
    test('has correct style when disabled', function () {
        render(_jsx(Label, { htmlFor: "username", disabled: true, text: "Disabled Label" }));
        var label = screen.getByText('Disabled Label');
        expect(label).toHaveStyle('background-color: grey');
    });
});
//# sourceMappingURL=Label.test.js.map