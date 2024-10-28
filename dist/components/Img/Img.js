var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var StyledImg = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  opacity: ", ";\n  ", "\n"], ["\n\n  opacity: ", ";\n  ", "\n"])), function (props) { return (props.disabled ? 0.5 : 1); }, function (props) {
    return props.disabled &&
        "\n    cursor: not-allowed;\n    color: #darkgrey;\n  ";
});
var Img = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, disabled = _a.disabled;
    return (_jsx(StyledImg, { src: src, alt: alt, width: width, height: height, disabled: disabled }));
};
export default Img;
var templateObject_1;
//# sourceMappingURL=Img.js.map