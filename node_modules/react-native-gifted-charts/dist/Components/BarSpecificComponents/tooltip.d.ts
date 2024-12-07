interface TooltipProps {
    barHeight: number;
    barWidth: number;
    item: any;
    index: number;
    isLast: boolean;
    leftSpacing: number;
    leftShiftForLastIndexTooltip: number;
    leftShiftForTooltip: number;
    renderTooltip?: Function;
    autoCenterTooltip?: boolean;
    horizontal?: boolean;
}
declare const Tooltip: (props: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
