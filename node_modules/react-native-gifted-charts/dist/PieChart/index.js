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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Platform, View } from 'react-native';
import { PieChartMain } from './main';
import { pieColors, usePieChart } from 'gifted-charts-core';
export var PieChart = function (props) {
    var _a = usePieChart(props), radius = _a.radius, extraRadius = _a.extraRadius, selectedIndex = _a.selectedIndex, setSelectedIndex = _a.setSelectedIndex, startAngle = _a.startAngle, total = _a.total, donut = _a.donut, isThreeD = _a.isThreeD, semiCircle = _a.semiCircle, inwardExtraLengthForFocused = _a.inwardExtraLengthForFocused, canvasWidth = _a.canvasWidth, canvasHeight = _a.canvasHeight, innerRadius = _a.innerRadius, innerCircleColor = _a.innerCircleColor, innerCircleBorderWidth = _a.innerCircleBorderWidth, innerCircleBorderColor = _a.innerCircleBorderColor, shiftInnerCenterX = _a.shiftInnerCenterX, shiftInnerCenterY = _a.shiftInnerCenterY, tiltAngle = _a.tiltAngle, isDataShifted = _a.isDataShifted, paddingHorizontal = _a.paddingHorizontal, paddingVertical = _a.paddingVertical;
    var renderInnerCircle = function (innerRadius, innerCircleBorderWidth) {
        if (props.centerLabelComponent || (donut && !isDataShifted)) {
            return (_jsx(View, { style: [
                    {
                        height: innerRadius * 2,
                        width: innerRadius * 2,
                        borderRadius: innerRadius,
                        position: 'absolute',
                        // zIndex: 100,
                        alignSelf: 'center',
                        backgroundColor: innerCircleColor,
                        left: canvasWidth / 2 -
                            innerRadius +
                            shiftInnerCenterX +
                            extraRadius +
                            paddingHorizontal / 2,
                        top: canvasHeight / 2 -
                            innerRadius +
                            shiftInnerCenterY +
                            extraRadius +
                            paddingVertical / 2,
                        borderWidth: innerCircleBorderWidth,
                        borderColor: innerCircleBorderColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    isThreeD && {
                        borderTopWidth: innerCircleBorderWidth * 5,
                        borderLeftWidth: shiftInnerCenterX
                            ? innerCircleBorderWidth * 2
                            : innerCircleBorderWidth,
                        transform: [{ rotateX: tiltAngle }],
                    },
                    semiCircle &&
                        isThreeD && {
                        borderTopWidth: isThreeD
                            ? innerCircleBorderWidth * 5
                            : innerCircleBorderWidth,
                        borderLeftWidth: 0.5,
                        borderLeftColor: innerCircleColor,
                        borderBottomWidth: 0,
                        borderRightWidth: 0.5,
                        borderRightColor: innerCircleColor,
                    },
                ], children: _jsx(View, { style: { marginTop: semiCircle ? -0.5 * innerRadius : 0 }, children: props.centerLabelComponent ? props.centerLabelComponent() : null }) }));
        }
        return null;
    };
    if (!total)
        return null;
    return (_jsxs(View, { style: {
            height: (radius + extraRadius + paddingVertical / 2) *
                (props.semiCircle ? 1 : 2),
            width: (radius + extraRadius + paddingHorizontal / 2) * 2,
            overflow: 'hidden',
        }, children: [_jsx(View, { style: { position: 'absolute' }, children: _jsx(PieChartMain, __assign({}, props, { selectedIndex: selectedIndex, setSelectedIndex: setSelectedIndex, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, extraRadius: extraRadius })) }), renderInnerCircle(innerRadius, innerCircleBorderWidth), props.data.length > 1 &&
                props.data[selectedIndex] && // don't forget to add this one so there are no errors when the data is empty / updating
                (props.focusOnPress || props.sectionAutoFocus) &&
                selectedIndex !== -1 && (_jsx(View, { pointerEvents: "box-none", style: {
                    position: 'absolute',
                    top: -extraRadius,
                    left: -extraRadius,
                    zIndex: Platform.OS === 'web' ? -1 : 0, // was not getting displayed in web (using Expo)
                }, children: _jsx(PieChartMain, __assign({}, props, { data: [
                        {
                            value: props.data[selectedIndex].value,
                            text: props.data[selectedIndex].text,
                            color: props.data[selectedIndex].color ||
                                pieColors[selectedIndex % 9],
                            strokeColor: props.data[selectedIndex].strokeColor || undefined,
                            strokeWidth: props.data[selectedIndex].strokeWidth || undefined,
                            gradientCenterColor: props.data[selectedIndex].gradientCenterColor || undefined,
                            shiftTextX: props.data[selectedIndex].shiftTextX || undefined,
                            shiftTextY: props.data[selectedIndex].shiftTextY || undefined,
                        },
                        {
                            value: total - props.data[selectedIndex].value,
                            // onPress: () => alert('black'),
                            peripheral: true,
                            strokeWidth: 0,
                        },
                    ], radius: radius + extraRadius, initialAngle: startAngle, innerRadius: props.innerRadius || radius / 2.5, isBiggerPie: true, setSelectedIndex: setSelectedIndex, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, extraRadius: extraRadius })) })), renderInnerCircle(innerRadius - inwardExtraLengthForFocused, inwardExtraLengthForFocused ? 0 : innerCircleBorderWidth)] }));
};
