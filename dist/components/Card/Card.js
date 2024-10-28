var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var CardContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 20px;\n  max-width: ", ";\n  opacity: ", ";\n  ", "\n"], ["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 20px;\n  max-width: ", ";\n  opacity: ", ";\n  ", "\n"])), function (props) { return (props.width || '300px'); }, function (props) { return (props.disabled ? 0.5 : 1); }, function (props) {
    return props.disabled &&
        "\n  cursor: not-allowed;\n";
});
var Image = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  border-radius: 4px;\n"], ["\n  width: 100%;\n  border-radius: 4px;\n"])));
var Title = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1.2em;\n  margin-top: 10px;\n"], ["\n  font-size: 1.2em;\n  margin-top: 10px;\n"])));
var Content = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"])));
var Button = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 20px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: blue;\n  color: white;\n  cursor: pointer;\n"], ["\n  margin-top: 20px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: blue;\n  color: white;\n  cursor: pointer;\n"])));
var Card = function (_a) {
    var imageurl = _a.imageurl, title = _a.title, content = _a.content, buttonText = _a.buttonText, onButtonClick = _a.onButtonClick, disabled = _a.disabled, props = __rest(_a, ["imageurl", "title", "content", "buttonText", "onButtonClick", "disabled"]);
    return (_jsxs(CardContainer, __assign({ disabled: disabled }, props, { children: [imageurl && _jsx(Image, { src: imageurl, alt: title }), _jsx(Title, { children: title }), _jsx(Content, { children: content }), buttonText && (_jsx(Button, { onClick: onButtonClick, disabled: disabled, children: buttonText }))] })));
};
export default Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Card.js.map