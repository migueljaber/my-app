var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Text, } from 'react-native';
import Svg, { Path, Circle, Text as SvgText, Defs, RadialGradient, Stop, G, Line, } from 'react-native-svg';
import { getPieChartMainProps, pieColors, } from 'gifted-charts-core';
import { rnVersion } from '../utils';
export var PieChartMain = function (props) {
    var _a, _b;
    var _c = getPieChartMainProps(props), isThreeD = _c.isThreeD, isBiggerPie = _c.isBiggerPie, data = _c.data, showInnerComponent = _c.showInnerComponent, radius = _c.radius, canvasWidth = _c.canvasWidth, canvasHeight = _c.canvasHeight, shadowWidth = _c.shadowWidth, backgroundColor = _c.backgroundColor, shadowColor = _c.shadowColor, semiCircle = _c.semiCircle, pi = _c.pi, initialAngle = _c.initialAngle, shadow = _c.shadow, donut = _c.donut, strokeWidth = _c.strokeWidth, strokeColor = _c.strokeColor, innerRadius = _c.innerRadius, showTooltip = _c.showTooltip, tooltipWidth = _c.tooltipWidth, tooltipComponent = _c.tooltipComponent, tooltipVerticalShift = _c.tooltipVerticalShift, tooltipHorizontalShift = _c.tooltipHorizontalShift, tooltipTextNoOfLines = _c.tooltipTextNoOfLines, tooltipBackgroundColor = _c.tooltipBackgroundColor, tooltipBorderRadius = _c.tooltipBorderRadius, tooltipSelectedIndex = _c.tooltipSelectedIndex, getTooltipText = _c.getTooltipText, showText = _c.showText, textColor = _c.textColor, textSize = _c.textSize, tiltAngle = _c.tiltAngle, labelsPosition = _c.labelsPosition, showTextBackground = _c.showTextBackground, textBackgroundColor = _c.textBackgroundColor, showValuesAsLabels = _c.showValuesAsLabels, showGradient = _c.showGradient, gradientCenterColor = _c.gradientCenterColor, minShiftX = _c.minShiftX, minShiftY = _c.minShiftY, total = _c.total, horizAdjustment = _c.horizAdjustment, vertAdjustment = _c.vertAdjustment, cx = _c.cx, cy = _c.cy, mData = _c.mData, paddingHorizontal = _c.paddingHorizontal, paddingVertical = _c.paddingVertical, extraRadius = _c.extraRadius, showExternalLabels = _c.showExternalLabels, getExternaLabelProperties = _c.getExternaLabelProperties, coordinates = _c.coordinates, onPressed = _c.onPressed, font = _c.font, fontWeight = _c.fontWeight, fontStyle = _c.fontStyle;
    var prevSide = 'right';
    var prevLabelComponentX = 0;
    var wasFirstItemOnPole = false;
    var _d = __read(useState(0), 2), touchX = _d[0], setTouchX = _d[1];
    var _e = __read(useState(0), 2), touchY = _e[0], setTouchY = _e[1];
    var onPressHandler = function (e) {
        var _a = e.nativeEvent, x = _a.locationX, y = _a.locationY;
        x -= extraRadius;
        y -= extraRadius;
        setTouchX(x);
        setTouchY(y);
        var r = Math.sqrt(Math.pow((x - cx), 2) + Math.pow((y - cy), 2));
        if (r > radius)
            return;
        var a = Math.atan2(y - cy, x - cx);
        for (var index = 0; index < data.length; index++) {
            var angle = coordinates[index];
            var sx = angle.sx, sy = angle.sy, ax = angle.ax, ay = angle.ay;
            var startAngle = Math.atan2(sy - cy, sx - cx);
            var endAngle = Math.atan2(ay - cy, ax - cx);
            if (startAngle < endAngle) {
                if (startAngle < a && a < endAngle) {
                    onPressed(data[index], index);
                    break;
                }
            }
            else {
                if (a > startAngle || a < endAngle) {
                    onPressed(data[index], index);
                    break;
                }
            }
        }
    };
    return (_jsx(TouchableWithoutFeedback, { onPress: onPressHandler, children: _jsxs(View, { pointerEvents: "box-only", style: [
                {
                    backgroundColor: backgroundColor,
                    height: semiCircle
                        ? (canvasHeight + paddingVertical) / 2 + extraRadius
                        : canvasHeight + paddingVertical + extraRadius * 2,
                    width: canvasWidth + paddingHorizontal + extraRadius * 2,
                    overflow: 'hidden',
                },
                isThreeD && { transform: [{ rotateX: tiltAngle }] },
            ], children: [_jsxs(Svg, { pointerEvents: rnVersion >= 720000 ? 'box-none' : 'auto', viewBox: "".concat(strokeWidth / -2 + minShiftX - extraRadius - paddingHorizontal / 2, " ").concat(strokeWidth / -2 + minShiftY - extraRadius - paddingVertical / 2, " ").concat((radius + extraRadius + strokeWidth) * 2 +
                        paddingHorizontal +
                        horizAdjustment +
                        (horizAdjustment ? strokeWidth : 0), " ").concat((radius + extraRadius + strokeWidth) * 2 +
                        paddingVertical +
                        vertAdjustment +
                        (vertAdjustment ? strokeWidth : 0)), height: (radius + extraRadius) * 2 + strokeWidth + paddingVertical, width: (radius + extraRadius) * 2 + strokeWidth + paddingHorizontal, children: [_jsx(Defs, { children: data.map(function (item, index) {
                                return (_jsxs(RadialGradient, { id: 'grad' + index, cx: "50%", cy: "50%", rx: "50%", ry: "50%", fx: "50%", fy: "50%", gradientUnits: "userSpaceOnUse", children: [_jsx(Stop, { offset: "0%", stopColor: item.gradientCenterColor || gradientCenterColor, stopOpacity: "1" }), _jsx(Stop, { offset: "100%", stopColor: item.color || pieColors[index % 9], stopOpacity: "1" })] }, index + ''));
                            }) }), data.length === 1 ? (_jsx(_Fragment, { children: _jsx(Circle, { cx: cx, cy: cy, r: radius, fill: showGradient
                                    ? "url(#grad".concat(0, ")")
                                    : data[0].color || pieColors[0 % 9] }) })) : (data.map(function (item, index) {
                            var _a = coordinates[index], sx = _a.sx, sy = _a.sy, ax = _a.ax, ay = _a.ay;
                            if (isBiggerPie && index)
                                return null;
                            return (_jsx(Path, { d: "M ".concat(cx + (item.shiftX || 0), " ").concat(cy + (item.shiftY || 0), " L ").concat(sx, " ").concat(sy, " A ").concat(radius, " ").concat(radius, " 0 ").concat(semiCircle ? 0 : data[index].value > total / 2 ? 1 : 0, " 1 ").concat(ax, " ").concat(ay, " L ").concat(cx + (item.shiftX || 0), " ").concat(cy + (item.shiftY || 0)), stroke: item.strokeColor || strokeColor, strokeWidth: props.focusOnPress && props.selectedIndex === index
                                    ? 0
                                    : item.strokeWidth === 0
                                        ? 0
                                        : item.strokeWidth || strokeWidth, fill: props.selectedIndex === index || item.peripheral
                                    ? 'none'
                                    : showGradient
                                        ? "url(#grad".concat(index, ")")
                                        : item.color || pieColors[index % 9] }, index + 'a'));
                        })), (showText || showInnerComponent || showExternalLabels) &&
                            data.map(function (item, index) {
                                var _a, _b, _c, _d, _e, _f, _g;
                                var localPieInnerComponent = (_a = item.pieInnerComponent) !== null && _a !== void 0 ? _a : props.pieInnerComponent;
                                if (isBiggerPie && index)
                                    return null;
                                if (!props.data[index].value)
                                    return null;
                                var mx = cx * (1 + Math.sin(2 * pi * mData[index] + initialAngle));
                                var my = cy * (1 - Math.cos(2 * pi * mData[index] + initialAngle));
                                var midx = (mx + cx) / 2;
                                var midy = (my + cy) / 2;
                                var x = midx, y = midy;
                                var labelPosition = item.labelPosition || labelsPosition;
                                if (labelPosition === 'onBorder') {
                                    x = mx;
                                    y = my;
                                }
                                else if (labelPosition === 'outward') {
                                    x = (midx + mx) / 2;
                                    y = (midy + my) / 2;
                                }
                                else if (labelPosition === 'inward') {
                                    x = (midx + cx) / 2;
                                    y = (midy + cy) / 2;
                                }
                                x += item.shiftX || 0;
                                y += item.shiftY || 0;
                                if (data.length === 1) {
                                    if (donut) {
                                        y =
                                            (radius -
                                                innerRadius +
                                                (item.textBackgroundRadius ||
                                                    props.textBackgroundRadius ||
                                                    item.textSize ||
                                                    textSize)) /
                                                2;
                                    }
                                    else {
                                        y = cy;
                                    }
                                }
                                var _h = getExternaLabelProperties(item, mx, my, cx, cy, prevSide, prevLabelComponentX, index === data.length - 1, // isLast
                                wasFirstItemOnPole), labelLineColor = _h.labelLineColor, labelLineThickness = _h.labelLineThickness, labelComponentHeight = _h.labelComponentHeight, inX = _h.inX, inY = _h.inY, outX = _h.outX, outY = _h.outY, finalX = _h.finalX, labelComponentX = _h.labelComponentX, labelComponentY = _h.labelComponentY, localExternalLabelComponent = _h.localExternalLabelComponent, isRightHalf = _h.isRightHalf;
                                prevSide = isRightHalf ? 'right' : 'left';
                                prevLabelComponentX = labelComponentX;
                                if (index === 0)
                                    wasFirstItemOnPole = labelComponentY !== outY;
                                return (_jsxs(React.Fragment, { children: [showExternalLabels ? (_jsxs(G, { children: [_jsx(Line, { x1: inX, x2: outX, y1: inY, y2: outY, stroke: labelLineColor, strokeWidth: labelLineThickness }), _jsx(Line, { x1: outX, x2: finalX, y1: outY, y2: outY, stroke: labelLineColor, strokeWidth: labelLineThickness }), localExternalLabelComponent ? (_jsx(G, { x: labelComponentX, y: labelComponentY + labelComponentHeight / 2, children: (_b = localExternalLabelComponent === null || localExternalLabelComponent === void 0 ? void 0 : localExternalLabelComponent(item, index)) !== null && _b !== void 0 ? _b : null })) : null] })) : null, showTextBackground ? (_jsx(Circle, { cx: x + ((_d = (_c = item.shiftTextBackgroundX) !== null && _c !== void 0 ? _c : item.shiftTextX) !== null && _d !== void 0 ? _d : 0), cy: y +
                                                ((_f = (_e = item.shiftTextBackgroundY) !== null && _e !== void 0 ? _e : item.shiftTextY) !== null && _f !== void 0 ? _f : 0) -
                                                (item.textSize || textSize) / 4, r: item.textBackgroundRadius ||
                                                props.textBackgroundRadius ||
                                                item.textSize ||
                                                textSize, fill: item.textBackgroundColor || textBackgroundColor })) : null, showText && (_jsx(SvgText, { fill: item.textColor ||
                                                textColor ||
                                                pieColors[(index + 2) % 9], fontSize: item.textSize || textSize, fontFamily: item.font || font, fontWeight: item.fontWeight || fontWeight, fontStyle: item.fontStyle || fontStyle || 'normal', x: x +
                                                (item.shiftTextX || 0) -
                                                (item.textSize || textSize) / 1.8, y: y + (item.shiftTextY || 0), children: item.text || (showValuesAsLabels ? item.value + '' : '') })), localPieInnerComponent ? (_jsx(G, { x: x, y: y, children: (_g = localPieInnerComponent === null || localPieInnerComponent === void 0 ? void 0 : localPieInnerComponent(item, index)) !== null && _g !== void 0 ? _g : null })) : null] }, index));
                            })] }), isThreeD && shadow && !semiCircle ? (_jsx(View, { style: {
                        width: radius * 2,
                        height: radius * 2,
                        backgroundColor: shadowColor,
                        borderRadius: radius,
                        position: 'absolute',
                        top: shadowWidth + paddingVertical / 2,
                        left: paddingHorizontal / 2,
                        zIndex: -1,
                    } })) : null, showTooltip && tooltipSelectedIndex !== -1 ? (_jsx(View, { style: {
                        position: 'absolute',
                        left: touchX > (radius + extraRadius) * 1.5
                            ? props.tooltipHorizontalShift
                                ? touchX - tooltipHorizontalShift
                                : touchX -
                                    (tooltipWidth !== null && tooltipWidth !== void 0 ? tooltipWidth : getTooltipText(tooltipSelectedIndex).length * 10)
                            : touchX - tooltipHorizontalShift,
                        top: touchY < 30
                            ? props.tooltipVerticalShift
                                ? touchY - tooltipVerticalShift
                                : touchY
                            : touchY - tooltipVerticalShift,
                    }, children: data[tooltipSelectedIndex].tooltipComponent ? ((_b = (_a = data[tooltipSelectedIndex]).tooltipComponent) === null || _b === void 0 ? void 0 : _b.call(_a)) : tooltipComponent ? (tooltipComponent(tooltipSelectedIndex)) : (_jsx(View, { style: {
                            backgroundColor: tooltipBackgroundColor,
                            borderRadius: tooltipBorderRadius,
                            paddingHorizontal: 8,
                            paddingBottom: 8,
                            paddingTop: 4,
                            width: tooltipWidth,
                        }, children: _jsx(Text, { numberOfLines: tooltipTextNoOfLines, style: {
                                color: data[tooltipSelectedIndex].textColor ||
                                    textColor ||
                                    'white',
                                textAlign: 'center',
                                fontSize: textSize,
                                fontFamily: font,
                                fontWeight: fontWeight,
                                fontStyle: fontStyle,
                            }, children: getTooltipText(tooltipSelectedIndex) }) })) })) : null] }) }));
};
