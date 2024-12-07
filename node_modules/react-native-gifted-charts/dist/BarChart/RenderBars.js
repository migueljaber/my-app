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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { View, TouchableOpacity, Animated, Text } from 'react-native';
import AnimatedThreeDBar from '../Components/AnimatedThreeDBar';
import Animated2DWithGradient from './Animated2DWithGradient';
import Cap from '../Components/BarSpecificComponents/cap';
import BarBackgroundPattern from '../Components/BarSpecificComponents/barBackgroundPattern';
import LinearGradient from '../Components/common/LinearGradient';
import { getPropsForAnimated2DWithGradient, AxesAndRulesDefaults, } from 'gifted-charts-core';
import Tooltip from '../Components/BarSpecificComponents/tooltip';
var RenderBars = function (props) {
    var _a, _b, _c, _d, _e;
    var item = props.item, index = props.index, containerHeight = props.containerHeight, maxValue = props.maxValue, minHeight = props.minHeight, spacing = props.spacing, propSpacing = props.propSpacing, side = props.side, data = props.data, barBorderWidth = props.barBorderWidth, barBorderColor = props.barBorderColor, isThreeD = props.isThreeD, isAnimated = props.isAnimated, rotateLabel = props.rotateLabel, appearingOpacity = props.appearingOpacity, animationDuration = props.animationDuration, autoShiftLabels = props.autoShiftLabels, label = props.label, secondaryLabel = props.secondaryLabel, labelTextStyle = props.labelTextStyle, secondaryLabelTextStyle = props.secondaryLabelTextStyle, xAxisTextNumberOfLines = props.xAxisTextNumberOfLines, xAxisLabelsVerticalShift = props.xAxisLabelsVerticalShift, renderTooltip = props.renderTooltip, leftShiftForTooltip = props.leftShiftForTooltip, leftShiftForLastIndexTooltip = props.leftShiftForLastIndexTooltip, initialSpacing = props.initialSpacing, selectedIndex = props.selectedIndex, setSelectedIndex = props.setSelectedIndex, _f = props.xAxisThickness, xAxisThickness = _f === void 0 ? AxesAndRulesDefaults.xAxisThickness : _f, horizontal = props.horizontal, rtl = props.rtl, intactTopLabel = props.intactTopLabel, showValuesAsTopLabel = props.showValuesAsTopLabel, topLabelContainerStyle = props.topLabelContainerStyle, topLabelTextStyle = props.topLabelTextStyle, pointerConfig = props.pointerConfig, noOfSectionsBelowXAxis = props.noOfSectionsBelowXAxis, yAxisOffset = props.yAxisOffset, barWidth = props.barWidth, _g = props.labelsDistanceFromXaxis, labelsDistanceFromXaxis = _g === void 0 ? 0 : _g, stepHeight = props.stepHeight, stepValue = props.stepValue, negativeStepHeight = props.negativeStepHeight, negativeStepValue = props.negativeStepValue, autoCenterTooltip = props.autoCenterTooltip, secondaryXAxis = props.secondaryXAxis, secondaryStepHeight = props.secondaryStepHeight, secondaryStepValue = props.secondaryStepValue, secondaryNegativeStepHeight = props.secondaryNegativeStepHeight, secondaryNegativeStepValue = props.secondaryNegativeStepValue, secondaryNoOfSectionsBelowXAxis = props.secondaryNoOfSectionsBelowXAxis;
    var heightFactor = item.isSecondary
        ? item.value < 0
            ? (secondaryNegativeStepHeight !== null && secondaryNegativeStepHeight !== void 0 ? secondaryNegativeStepHeight : secondaryStepHeight) /
                (secondaryNegativeStepValue !== null && secondaryNegativeStepValue !== void 0 ? secondaryNegativeStepValue : secondaryStepValue)
            : secondaryStepHeight / secondaryStepValue
        : item.value < 0
            ? negativeStepHeight / negativeStepValue
            : stepHeight / stepValue;
    var barHeight = Math.max(minHeight, Math.abs(item.value) * heightFactor - xAxisThickness);
    var _h = getPropsForAnimated2DWithGradient(__assign(__assign({}, props), { barHeight: barHeight })), commonStyleForBar = _h.commonStyleForBar, barStyleWithBackground = _h.barStyleWithBackground, commonPropsFor2dAnd3dBars = _h.commonPropsFor2dAnd3dBars, isFocused = _h.isFocused, focusedBarConfig = _h.focusedBarConfig, localFrontColor = _h.localFrontColor;
    var itemOrPropsBarInnerComponent = (_a = item.barInnerComponent) !== null && _a !== void 0 ? _a : props.barInnerComponent;
    var localBarInnerComponent = isFocused
        ? ((_b = focusedBarConfig === null || focusedBarConfig === void 0 ? void 0 : focusedBarConfig.barInnerComponent) !== null && _b !== void 0 ? _b : itemOrPropsBarInnerComponent)
        : itemOrPropsBarInnerComponent;
    var barMarginBottom = item.barMarginBottom === 0
        ? 0
        : item.barMarginBottom || props.barMarginBottom || 0;
    var renderLabel = function (top, label, labelTextStyle, value) {
        var _a, _b;
        return (_jsx(View, { style: [
                {
                    width: (item.labelWidth ||
                        props.labelWidth ||
                        item.barWidth ||
                        barWidth) + spacing,
                    left: spacing / -2,
                    position: 'absolute',
                    height: (_a = props.xAxisLabelsHeight) !== null && _a !== void 0 ? _a : xAxisTextNumberOfLines * 18,
                    bottom: top
                        ? (containerHeight || 200) +
                            ((_b = secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.labelsDistanceFromXaxis) !== null && _b !== void 0 ? _b : 15)
                        : (rotateLabel
                            ? -40
                            : -6 -
                                xAxisTextNumberOfLines * 18 -
                                (value < 0
                                    ? -xAxisLabelsVerticalShift
                                    : xAxisLabelsVerticalShift)) -
                            barMarginBottom -
                            (value < 0 && !autoShiftLabels
                                ? -labelsDistanceFromXaxis
                                : labelsDistanceFromXaxis),
                },
                rotateLabel
                    ? horizontal
                        ? { transform: [{ rotate: '330deg' }] }
                        : {
                            transform: [
                                { rotate: value < 0 ? '240deg' : '60deg' },
                                { translateX: value < 0 ? 56 : 0 },
                                { translateY: value < 0 ? 32 : 0 },
                            ],
                        }
                    : horizontal
                        ? { transform: [{ rotate: '-90deg' }] }
                        : value < 0
                            ? {
                                transform: [
                                    { rotate: '180deg' },
                                    {
                                        translateY: autoShiftLabels
                                            ? 0
                                            : 16.5 * xAxisTextNumberOfLines + 12,
                                    },
                                ],
                            }
                            : {},
            ], children: top ? (item.secondaryLabelComponent ? (item.secondaryLabelComponent()) : (_jsx(Text, { style: [
                    { textAlign: 'center' },
                    rtl && horizontal && { transform: [{ rotate: '180deg' }] },
                    labelTextStyle,
                ], numberOfLines: xAxisTextNumberOfLines, children: label }))) : item.labelComponent ? (item.labelComponent()) : (_jsx(Text, { style: [
                    { textAlign: 'center' },
                    rtl && horizontal && { transform: [{ rotate: '180deg' }] },
                    labelTextStyle,
                ], numberOfLines: xAxisTextNumberOfLines, children: label })) }));
    };
    var renderAnimatedLabel = function (top, label, labelTextStyle, value) {
        var _a, _b;
        return (_jsx(Animated.View, { style: [
                {
                    width: (item.labelWidth ||
                        props.labelWidth ||
                        item.barWidth ||
                        barWidth) + spacing,
                    left: spacing / -2,
                    position: 'absolute',
                    height: (_a = props.xAxisLabelsHeight) !== null && _a !== void 0 ? _a : xAxisTextNumberOfLines * 18 -
                        (value < 0
                            ? -xAxisLabelsVerticalShift
                            : xAxisLabelsVerticalShift),
                    bottom: top
                        ? (containerHeight || 200) +
                            ((_b = secondaryXAxis === null || secondaryXAxis === void 0 ? void 0 : secondaryXAxis.labelsDistanceFromXaxis) !== null && _b !== void 0 ? _b : 15)
                        : (rotateLabel
                            ? -40
                            : -6 -
                                xAxisTextNumberOfLines * 18 -
                                xAxisLabelsVerticalShift) - barMarginBottom,
                    opacity: appearingOpacity,
                },
                value < 0 && { transform: [{ rotate: '180deg' }] },
                rotateLabel
                    ? horizontal
                        ? { transform: [{ rotate: '330deg' }] }
                        : { transform: [{ rotate: '60deg' }] }
                    : horizontal
                        ? { transform: [{ rotate: '-90deg' }] }
                        : value < 0
                            ? {
                                transform: [
                                    { rotate: '180deg' },
                                    {
                                        translateY: autoShiftLabels
                                            ? 0
                                            : 16.5 * xAxisTextNumberOfLines + 12,
                                    },
                                ],
                            }
                            : {},
            ], children: top ? (item.secondaryLabelComponent ? (item.secondaryLabelComponent()) : (_jsx(Text, { style: [
                    { textAlign: 'center' },
                    rtl && horizontal && { transform: [{ rotate: '180deg' }] },
                    labelTextStyle,
                ], numberOfLines: xAxisTextNumberOfLines, children: label }))) : item.labelComponent ? (item.labelComponent()) : (_jsx(Text, { style: [
                    { textAlign: 'center' },
                    rtl && horizontal && { transform: [{ rotate: '180deg' }] },
                    labelTextStyle,
                ], numberOfLines: xAxisTextNumberOfLines, children: label })) }));
    };
    var leftSpacing = initialSpacing;
    for (var i = 0; i < index; i++) {
        leftSpacing +=
            ((_c = data[i].spacing) !== null && _c !== void 0 ? _c : propSpacing) + (data[i].barWidth || barWidth);
    }
    var static2DWithGradient = function (item) {
        var _a, _b;
        var localGradientColor = item.gradientColor || props.gradientColor || 'white';
        return (_jsxs(_Fragment, { children: [_jsx(LinearGradient, { style: commonStyleForBar, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: [
                        isFocused
                            ? ((_a = focusedBarConfig === null || focusedBarConfig === void 0 ? void 0 : focusedBarConfig.gradientColor) !== null && _a !== void 0 ? _a : localGradientColor)
                            : localGradientColor,
                        localFrontColor,
                    ], children: props.cappedBars && item.value ? (_jsx(Cap, { capThicknessFromItem: item.capThickness, capThicknessFromProps: props.capThickness, capColorFromItem: item.capColor, capColorFromProps: props.capColor, capRadiusFromItem: item.capRadius, capRadiusFromProps: props.capRadius })) : null }), (item.barBackgroundPattern || props.barBackgroundPattern) && (_jsx(BarBackgroundPattern, { barBackgroundPatternFromItem: item.barBackgroundPattern, barBackgroundPatternFromProps: props.barBackgroundPattern, patternIdFromItem: item.patternId, patternIdFromProps: props.patternId })), (item.topLabelComponent || showValuesAsTopLabel) && (_jsx(View, { style: [
                        {
                            position: 'absolute',
                            top: (item.barWidth || barWidth) * -1,
                            height: item.barWidth || barWidth,
                            width: item.barWidth || barWidth,
                            justifyContent: (horizontal && !intactTopLabel) || item.value < 0
                                ? 'center'
                                : 'flex-end',
                            alignItems: 'center',
                        },
                        item.value < 0 && { transform: [{ rotate: '180deg' }] },
                        horizontal &&
                            !intactTopLabel && { transform: [{ rotate: '270deg' }] },
                        topLabelContainerStyle !== null && topLabelContainerStyle !== void 0 ? topLabelContainerStyle : item.topLabelContainerStyle,
                    ], children: showValuesAsTopLabel ? (_jsx(Text, { style: topLabelTextStyle, children: item.value + yAxisOffset })) : ((_b = item.topLabelComponent) === null || _b === void 0 ? void 0 : _b.call(item)) })), localBarInnerComponent ? (_jsx(View, { style: { height: '100%', width: '100%' }, children: localBarInnerComponent(item, index) })) : null] }));
    };
    var barWrapperStyle = [
        {
            // overflow: 'visible',
            marginBottom: 60 + barMarginBottom + xAxisLabelsVerticalShift - 0.5,
            width: commonPropsFor2dAnd3dBars.barWidth,
            height: barHeight,
            marginRight: spacing,
            transform: [
                {
                    translateY: (containerHeight || 200) -
                        (barHeight - 10 + xAxisLabelsVerticalShift) +
                        (item.value < 0 ? Math.abs(item.value) * heightFactor : 0),
                },
                { rotateZ: item.value < 0 ? '180deg' : '0deg' },
            ],
        },
        side !== 'right' && { zIndex: data.length - index },
    ];
    var pressDisabled = item.disablePress ||
        props.disablePress ||
        (pointerConfig && pointerConfig.barTouchable !== true);
    var barContent = function () {
        var isBarBelowXaxisAndInvisible = item.value < 0 &&
            !(noOfSectionsBelowXAxis || secondaryNoOfSectionsBelowXAxis);
        var animated2DWithGradient = function (noGradient, noAnimation) { return (_jsx(Animated2DWithGradient, __assign({}, commonPropsFor2dAnd3dBars, { animationDuration: animationDuration || 800, roundedBottom: props.roundedBottom || false, roundedTop: props.roundedTop || false, noGradient: noGradient, noAnimation: noAnimation, containerHeight: containerHeight, maxValue: maxValue, minHeight: minHeight !== null && minHeight !== void 0 ? minHeight : 0, barMarginBottom: barMarginBottom, cappedBars: props.cappedBars, capThickness: props.capThickness, capColor: props.capColor, capRadius: props.capRadius, horizontal: horizontal, barBorderWidth: barBorderWidth, barBorderColor: barBorderColor, commonStyleForBar: commonStyleForBar, barStyleWithBackground: barStyleWithBackground }))); };
        return (_jsxs(_Fragment, { children: [(props.showXAxisIndices || item.showXAxisIndex) && (_jsx(View, { style: {
                        zIndex: 2,
                        position: 'absolute',
                        height: props.xAxisIndicesHeight,
                        width: props.xAxisIndicesWidth,
                        bottom: props.xAxisIndicesHeight / -2,
                        left: ((item.barWidth || barWidth) - props.xAxisIndicesWidth) / 2,
                        backgroundColor: props.xAxisIndicesColor,
                    } })), isBarBelowXaxisAndInvisible ? null : isThreeD ? (_jsx(AnimatedThreeDBar, __assign({}, commonPropsFor2dAnd3dBars, { sideWidth: item.sideWidth ||
                        props.sideWidth ||
                        (item.barWidth || barWidth) / 2, side: side || 'left', sideColor: item.sideColor || props.sideColor || '', topColor: item.topColor || props.topColor || '', horizontal: horizontal, isAnimated: isAnimated, animationDuration: animationDuration || 800, selectedIndex: selectedIndex }))) : item.showGradient || props.showGradient ? (isAnimated ? (animated2DWithGradient(false, false)) : (static2DWithGradient(item))) : isAnimated ? (animated2DWithGradient(true, false)) : (animated2DWithGradient(true, true)), isAnimated
                    ? renderAnimatedLabel(false, label, labelTextStyle, item.value)
                    : renderLabel(false, label, labelTextStyle, item.value), secondaryXAxis
                    ? isAnimated
                        ? renderAnimatedLabel(true, secondaryLabel, secondaryLabelTextStyle, item.value)
                        : renderLabel(true, secondaryLabel, secondaryLabelTextStyle, item.value)
                    : null] }));
    };
    var tooltipProps = {
        barHeight: barHeight,
        barWidth: item.barWidth || barWidth,
        item: item,
        index: index,
        isLast: index === data.length - 1,
        leftSpacing: leftSpacing,
        leftShiftForLastIndexTooltip: leftShiftForLastIndexTooltip,
        leftShiftForTooltip: (_e = (_d = item.leftShiftForTooltip) !== null && _d !== void 0 ? _d : leftShiftForTooltip) !== null && _e !== void 0 ? _e : 0,
        renderTooltip: renderTooltip,
        autoCenterTooltip: autoCenterTooltip,
        horizontal: horizontal,
    };
    return (_jsxs(_Fragment, { children: [pressDisabled ? (_jsx(View, { pointerEvents: "none", style: barWrapperStyle, children: barContent() })) : (_jsx(TouchableOpacity, { activeOpacity: props.activeOpacity || 0.2, onPress: function () {
                    if (renderTooltip || props.focusBarOnPress) {
                        if (props.focusedBarIndex === undefined || !props.onPress) {
                            setSelectedIndex(index);
                        }
                    }
                    item.onPress
                        ? item.onPress()
                        : props.onPress
                            ? props.onPress(item, index)
                            : null;
                }, onLongPress: function () {
                    item.onLongPress
                        ? item.onLongPress()
                        : props.onLongPress
                            ? props.onLongPress(item, index)
                            : null;
                }, onPressOut: function () {
                    item.onPressOut
                        ? item.onPressOut()
                        : props.onPressOut
                            ? props.onPressOut(item, index)
                            : null;
                }, style: barWrapperStyle, children: barContent() })), renderTooltip && selectedIndex === index && (_jsx(Tooltip, __assign({}, tooltipProps)))] }));
};
export default RenderBars;
