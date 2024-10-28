import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import HeroImage from './HeroImg';
describe('HeroImage', function () {
    it('renders the title and subtitle', function () {
        var getByText = render(_jsx(HeroImage, { imageUrl: "test.jpg", title: "Test Title", subtitle: "Test Subtitle" })).getByText;
        expect(getByText('Test Title')).toBeVisible();
        expect(getByText('Test Subtitle')).toBeVisible();
    });
    it('calls OnClick when the button is clicked', function () {
        var mockOnClick = jest.fn();
        var getByText = render(_jsx(HeroImage, { imageUrl: "test.jpg", title: "Test Title", subtitle: "Test Subtitle", Text: "Click Me", OnClick: mockOnClick })).getByText;
        var button = getByText('Click Me');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalled();
    });
});
//# sourceMappingURL=HeroImg.test.js.map