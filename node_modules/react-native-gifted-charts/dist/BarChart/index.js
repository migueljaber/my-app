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
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import RenderBars from './RenderBars';
import RenderStackBars from './RenderStackBars';
import BarAndLineChartsWrapper from '../Components/BarAndLineChartsWrapper';
import { useBarChart } from 'gifted-charts-core';
import { StripAndLabel } from '../Components/common/StripAndLabel';
import { Pointer } from '../Components/common/Pointer';
import { screenWidth } from '../utils';
export var BarChart = function (props) {
    var _a, _b;
    var heightValue = useMemo(function () { return new Animated.Value(0); }, []);
    var opacityValue = useMemo(function () { return new Animated.Value(0); }, []);
    var widthValue = useMemo(function () { return new Animated.Value(0); }, []);
    var scrollRef = (_a = props.scrollRef) !== null && _a !== void 0 ? _a : useRef(null);
    var remainingScrollViewProps = {
        onScroll: function (ev) { var _a; return (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, ev); },
        onTouchStart: function (evt) {
            if (props.renderTooltip) {
                setSelectedIndex(-1);
            }
        },
    };
    var _c = useBarChart(__assign(__assign({}, props), { heightValue: heightValue, widthValue: widthValue, opacityValue: opacityValue, parentWidth: (_b = props.parentWidth) !== null && _b !== void 0 ? _b : screenWidth })), lineConfig = _c.lineConfig, hidePointer1 = _c.hidePointer1, pointerItem = _c.pointerItem, pointerY = _c.pointerY, pointerConfig = _c.pointerConfig, pointerColor = _c.pointerColor, pointerX = _c.pointerX, pointerComponent = _c.pointerComponent, pointerHeight = _c.pointerHeight, pointerRadius = _c.pointerRadius, pointerWidth = _c.pointerWidth, autoAdjustPointerLabelPosition = _c.autoAdjustPointerLabelPosition, pointerLabelWidth = _c.pointerLabelWidth, activatePointersOnLongPress = _c.activatePointersOnLongPress, yAxisLabelWidth = _c.yAxisLabelWidth, shiftPointerLabelX = _c.shiftPointerLabelX, pointerLabelHeight = _c.pointerLabelHeight, pointerStripUptoDataPoint = _c.pointerStripUptoDataPoint, pointerStripHeight = _c.pointerStripHeight, shiftPointerLabelY = _c.shiftPointerLabelY, showPointerStrip = _c.showPointerStrip, pointerStripWidth = _c.pointerStripWidth, containerHeight = _c.containerHeight, xAxisThickness = _c.xAxisThickness, pointerStripColor = _c.pointerStripColor, pointerEvents = _c.pointerEvents, setResponderStartTime = _c.setResponderStartTime, setPointerY = _c.setPointerY, setPointerItem = _c.setPointerItem, initialSpacing = _c.initialSpacing, spacing = _c.spacing, data = _c.data, barWidth = _c.barWidth, setPointerX = _c.setPointerX, pointerIndex = _c.pointerIndex, setPointerIndex = _c.setPointerIndex, maxValue = _c.maxValue, responderStartTime = _c.responderStartTime, setResponderActive = _c.setResponderActive, activatePointersDelay = _c.activatePointersDelay, persistPointer = _c.persistPointer, pointerVanishDelay = _c.pointerVanishDelay, containerHeightIncludingBelowXAxis = _c.containerHeightIncludingBelowXAxis, extendedContainerHeight = _c.extendedContainerHeight, totalWidth = _c.totalWidth, stripBehindBars = _c.stripBehindBars, noOfSectionsBelowXAxis = _c.noOfSectionsBelowXAxis, stepHeight = _c.stepHeight, xAxisLabelsVerticalShift = _c.xAxisLabelsVerticalShift, labelsExtraHeight = _c.labelsExtraHeight, stripOverPointer = _c.stripOverPointer, pointerLabelComponent = _c.pointerLabelComponent, setSelectedIndex = _c.setSelectedIndex, isAnimated = _c.isAnimated, animationDuration = _c.animationDuration, side = _c.side, labelWidth = _c.labelWidth, isThreeD = _c.isThreeD, animatedHeight = _c.animatedHeight, appearingOpacity = _c.appearingOpacity, autoShiftLabels = _c.autoShiftLabels, getPropsCommonForBarAndStack = _c.getPropsCommonForBarAndStack, barAndLineChartsWrapperProps = _c.barAndLineChartsWrapperProps, autoShiftLabelsForNegativeStacks = _c.autoShiftLabelsForNegativeStacks;
    var stackData = barAndLineChartsWrapperProps.stackData;
    var labelsAppear = useCallback(function () {
        opacityValue.setValue(0);
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
    }, [opacityValue]);
    var decreaseWidth = useCallback(function () {
        widthValue.setValue(0);
        Animated.timing(widthValue, {
            toValue: 1,
            duration: lineConfig.animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [lineConfig.animationDuration, widthValue]);
    useEffect(function () {
        if (lineConfig.isAnimated) {
            setTimeout(function () { return decreaseWidth(); }, lineConfig.delay || 0);
        }
        setTimeout(function () { return labelsAppear(); }, animationDuration);
    }, [decreaseWidth, labelsAppear, animationDuration]);
    var renderPointer = function (lineNumber) {
        if (lineNumber === 1 && hidePointer1)
            return;
        var pointerItemLocal = pointerItem;
        var pointerYLocal = pointerY;
        var pointerColorLocal = (pointerConfig === null || pointerConfig === void 0 ? void 0 : pointerConfig.pointer1Color) || pointerColor;
        return Pointer({
            pointerX: pointerX,
            pointerYLocal: pointerYLocal,
            pointerComponent: pointerComponent,
            pointerHeight: pointerHeight,
            pointerRadius: pointerRadius,
            pointerWidth: pointerWidth,
            pointerItemLocal: pointerItemLocal,
            pointerColorLocal: pointerColorLocal,
        });
    };
    var renderStripAndLabel = function (pointerLabelComponent) {
        var pointerItemLocal, pointerYLocal = pointerY;
        pointerItemLocal = [pointerItem];
        return StripAndLabel({
            autoAdjustPointerLabelPosition: autoAdjustPointerLabelPosition,
            pointerX: pointerX,
            pointerLabelWidth: pointerLabelWidth,
            activatePointersOnLongPress: activatePointersOnLongPress,
            yAxisLabelWidth: yAxisLabelWidth,
            pointerRadius: pointerRadius,
            pointerWidth: pointerWidth,
            shiftPointerLabelX: shiftPointerLabelX,
            pointerLabelHeight: pointerLabelHeight,
            pointerYLocal: pointerYLocal,
            pointerStripUptoDataPoint: pointerStripUptoDataPoint,
            pointerStripHeight: pointerStripHeight,
            shiftPointerLabelY: shiftPointerLabelY,
            pointerItemLocal: pointerItemLocal,
            showPointerStrip: showPointerStrip,
            pointerStripWidth: pointerStripWidth,
            containerHeight: containerHeight,
            xAxisThickness: xAxisThickness,
            pointerStripColor: pointerStripColor,
            pointerConfig: pointerConfig,
            pointerLabelComponent: pointerLabelComponent,
            scrollX: 0,
            pointerEvents: pointerEvents,
            isBarChart: true,
            pointerIndex: pointerIndex,
            width: totalWidth,
            screenWidth: screenWidth,
            containsNegative: false,
        });
    };
    var contentContainerStyle = {
        position: 'absolute',
        height: containerHeightIncludingBelowXAxis,
        bottom: 60 + labelsExtraHeight,
        paddingLeft: initialSpacing,
        width: totalWidth,
        flexDirection: 'row',
    };
    var renderChartContent = function () {
        if (pointerConfig) {
            return (_jsxs(View, { onStartShouldSetResponder: function () { return !!pointerConfig; }, onMoveShouldSetResponder: function () { return !!pointerConfig; }, onResponderGrant: function (evt) {
                    if (!pointerConfig)
                        return;
                    setResponderStartTime(evt.timeStamp);
                    if (activatePointersOnLongPress) {
                        return;
                    }
                    var x = evt.nativeEvent.locationX;
                    if (!activatePointersOnLongPress &&
                        x > (props.width || screenWidth))
                        return;
                    var factor = (x - initialSpacing - barWidth / 2) / (spacing + barWidth);
                    factor = Math.round(factor);
                    factor = Math.min(factor, data.length - 1);
                    factor = Math.max(factor, 0);
                    var z = initialSpacing +
                        (spacing + barWidth) * factor -
                        (pointerRadius || pointerWidth / 2) +
                        barWidth / 2;
                    setPointerX(z);
                    setPointerIndex(factor);
                    var item, y;
                    item = (stackData !== null && stackData !== void 0 ? stackData : data)[factor];
                    var stackSum = 0;
                    if ('stacks' in item) {
                        stackSum = item.stacks.reduce(function (acc, stack) { var _a; return acc + ((_a = stack.value) !== null && _a !== void 0 ? _a : 0); }, 0);
                    }
                    y =
                        containerHeight -
                            ((stackSum !== null && stackSum !== void 0 ? stackSum : item.value) * containerHeight) / maxValue -
                            (pointerRadius || pointerHeight / 2) +
                            10;
                    setPointerY(y);
                    setPointerItem(item);
                }, onResponderMove: function (evt) {
                    var _a;
                    if (!pointerConfig)
                        return;
                    if (activatePointersOnLongPress &&
                        evt.timeStamp - responderStartTime < activatePointersDelay) {
                        return;
                    }
                    else {
                        setResponderActive(true);
                    }
                    var x = evt.nativeEvent.locationX;
                    if (!activatePointersOnLongPress &&
                        x > (props.width || screenWidth))
                        return;
                    var factor = (x - initialSpacing - barWidth / 2) / (spacing + barWidth);
                    factor = Math.round(factor);
                    factor = Math.min(factor, (stackData !== null && stackData !== void 0 ? stackData : data).length - 1);
                    factor = Math.max(factor, 0);
                    var z = initialSpacing +
                        (spacing + barWidth) * factor -
                        (pointerRadius || pointerWidth / 2) +
                        barWidth / 2;
                    var item, y;
                    setPointerX(z);
                    setPointerIndex(factor);
                    item = (stackData !== null && stackData !== void 0 ? stackData : data)[factor];
                    var stackSum = 0;
                    if ('stacks' in item) {
                        (_a = item.stacks) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, stack) { var _a; return acc + ((_a = stack.value) !== null && _a !== void 0 ? _a : 0); }, 0);
                    }
                    y =
                        containerHeight -
                            ((stackSum !== null && stackSum !== void 0 ? stackSum : item.value) * containerHeight) / maxValue -
                            (pointerRadius || pointerHeight / 2) +
                            10;
                    setPointerY(y);
                    setPointerItem(item);
                }, onResponderEnd: function (evt) {
                    setResponderStartTime(0);
                    setPointerIndex(-1);
                    setResponderActive(false);
                    if (!persistPointer)
                        setTimeout(function () { return setPointerX(0); }, pointerVanishDelay);
                }, onResponderTerminationRequest: function (evt) { return false; }, style: contentContainerStyle, children: [pointerX > 0 && stripBehindBars ? (_jsx(View, { pointerEvents: pointerEvents !== null && pointerEvents !== void 0 ? pointerEvents : 'none', style: {
                            position: 'absolute',
                            height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
                            bottom: xAxisLabelsVerticalShift,
                            width: totalWidth,
                        }, children: renderStripAndLabel(null) })) : null, renderChart(), pointerX > 0 ? (_jsxs(View, { pointerEvents: pointerEvents !== null && pointerEvents !== void 0 ? pointerEvents : 'none', style: {
                            position: 'absolute',
                            height: extendedContainerHeight + noOfSectionsBelowXAxis * stepHeight,
                            bottom: xAxisLabelsVerticalShift,
                            width: totalWidth,
                            zIndex: 20,
                        }, children: [!stripOverPointer &&
                                !stripBehindBars &&
                                renderStripAndLabel(null), renderPointer(1), stripOverPointer &&
                                !stripBehindBars &&
                                renderStripAndLabel(null), pointerLabelComponent &&
                                renderStripAndLabel(pointerLabelComponent) // no matter what, pointerLabelComponent will be rendered at last -> over the chart content
                        ] })) : null] }));
        }
        else {
            return _jsx(View, { style: contentContainerStyle, children: renderChart() });
        }
    };
    var renderChart = function () {
        if (stackData) {
            return stackData.map(function (item, index) {
                return (_jsx(RenderStackBars, __assign({ stackData: props.stackData || [], isAnimated: isAnimated, animationDuration: animationDuration, stackBorderRadius: props.stackBorderRadius, stackBorderTopLeftRadius: props.stackBorderTopLeftRadius, stackBorderTopRightRadius: props.stackBorderTopRightRadius, stackBorderBottomLeftRadius: props.stackBorderBottomLeftRadius, stackBorderBottomRightRadius: props.stackBorderBottomRightRadius, autoShiftLabelsForNegativeStacks: autoShiftLabelsForNegativeStacks }, getPropsCommonForBarAndStack(item, index)), index));
            });
        }
        else {
            return data.map(function (item, index) {
                var _a;
                return (_jsx(RenderBars, __assign({ data: data, side: side, minHeight: (_a = props.minHeight) !== null && _a !== void 0 ? _a : (isAnimated && !isThreeD ? 0.1 : 0), sideWidth: props.sideWidth, labelWidth: labelWidth, isThreeD: isThreeD, isAnimated: isAnimated, animationDuration: animationDuration, animatedHeight: animatedHeight, appearingOpacity: appearingOpacity, roundedTop: props.roundedTop, roundedBottom: props.roundedBottom, frontColor: props.frontColor, sideColor: props.sideColor, topColor: props.topColor, cappedBars: props.cappedBars, capThickness: props.capThickness, capColor: props.capColor, capRadius: props.capRadius, autoShiftLabels: autoShiftLabels, barMarginBottom: props.barMarginBottom, barStyle: props.barStyle }, getPropsCommonForBarAndStack(item, index)), index));
            });
        }
    };
    return (_jsx(BarAndLineChartsWrapper, __assign({}, barAndLineChartsWrapperProps, { scrollRef: scrollRef, renderChartContent: renderChartContent, remainingScrollViewProps: remainingScrollViewProps, nestedScrollEnabled: props.nestedScrollEnabled })));
};
