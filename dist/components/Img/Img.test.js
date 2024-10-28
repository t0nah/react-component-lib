import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Img from './Img';
describe('Img', function () {
    it('renders the component', function () {
        var getByAltText = render(_jsx(Img, { src: "test.jpg", alt: "Test" })).getByAltText;
        expect(getByAltText('Test')).toBeVisible();
    });
    it('changes opacity when disabled', function () {
        var getByAltText = render(_jsx(Img, { src: "test.jpg", alt: "Test", disabled: true })).getByAltText;
        expect(getByAltText('Test')).toHaveStyle('opacity: 0.5');
    });
});
//# sourceMappingURL=Img.test.js.map