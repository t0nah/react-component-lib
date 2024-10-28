import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from './Text';
describe('Running Test for Text', function () {
    test('Check Text Front Size', function () {
        render(_jsx(Text, { types: "paragraph", text: "Text" }));
        var TextElement = screen.getByText('Text');
        expect(TextElement).toBeInTheDocument();
    });
    test('has correct style when disabled', function () {
        render(_jsx(Text, { disabled: true, text: "Disabled Text" }));
        var text = screen.getByText('Disabled Text');
        expect(text).toHaveStyle('background-color: grey');
    });
});
//# sourceMappingURL=Text.test.js.map