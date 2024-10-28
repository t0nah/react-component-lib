import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from './Card';
describe('Card', function () {
    it('renders the card with title and content', function () {
        var getByText = render(_jsx(Card, { title: "Test Title", content: "Test Content", disabled: false })).getByText;
        expect(getByText('Test Title')).toBeVisible();
        expect(getByText('Test Content')).toBeVisible();
    });
    it('displays the card as disabled', function () {
        var _a = render(_jsx(Card, { title: "Test Title", content: "Test Content", disabled: true })), getByText = _a.getByText, container = _a.container;
        expect(getByText('Test Title')).toBeVisible();
        expect(container.firstChild).toHaveStyle('opacity: 0.5');
        expect(container.firstChild).toHaveStyle('cursor: not-allowed');
    });
});
//# sourceMappingURL=Card.test.js.map