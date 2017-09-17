import React from "react";
import FilledArc from "./RadialMath/FilledArc";
import ArcBorders from "./RadialMath/ArcBorders";

function RoundLoading(
    center,
    radiuses,
    pro,
    inside,
    dif
) {
    let { start, end } = ArcBorders(pro, inside, dif);
    return FilledArc(center, radiuses, start, end);
}

const LoadedGraph = ({
    cx,
    cy,
    r1,
    r2,
    pro,
    inside,
    dif,
    className,
    id,
    fill,
    fillOpacity,
    stroke,
    strokeWidth,
    style
}) =>
    <path 
        fill={fill}
        fillOpacity={fillOpacity}
        stroke={stroke}
        strokeWidth={strokeWidth}
        style={style}
        d={
            RoundLoading(
                { x: cx, y: cy },
                [r1, r2],
                pro,
                inside,
                dif
            )
        }
        className={className} id={id}
    />;
export default LoadedGraph;