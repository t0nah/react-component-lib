var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var HeroImageContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  ", "\n"], ["\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: relative;\n  ", "\n"])), function (props) { return props.imageUrl; }, function (props) {
    return props.disabled &&
        "\n    cursor: not-allowed;\n  ";
});
var Title = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #fff;\n"], ["\n  color: #fff;\n"])));
var Subtitle = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #fff;\n"], ["\n  color: #fff;\n"])));
var CallToActionButton = styled.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 20px;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n"], ["\n  padding: 10px 20px;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n"])));
var HeroImage = function (_a) {
    var imageUrl = _a.imageUrl, title = _a.title, subtitle = _a.subtitle, Text = _a.Text, _b = _a.disabled, disabled = _b === void 0 ? false : _b, OnClick = _a.OnClick;
    return (_jsxs(HeroImageContainer, { imageUrl: imageUrl, disabled: disabled, children: [title && _jsx(Title, { children: title }), subtitle && _jsx(Subtitle, { children: subtitle }), Text && (_jsx(CallToActionButton, { onClick: OnClick, children: Text }))] }));
};
export default HeroImage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=HeroImg.js.map