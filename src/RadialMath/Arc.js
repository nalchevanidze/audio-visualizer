import CirclePoint from "./CirclePoint";

export default function Arc(circle, startDegre, endDegre) {
    let {radius} = circle;
    let statrPoint = CirclePoint(circle, startDegre),
        endPoint = CirclePoint(circle, endDegre),
        cutMethod1 = Math.floor(Math.abs(endDegre - startDegre) / 180)%2,
        cutMethod2 = Number( startDegre-endDegre < 0 );
    return [
        statrPoint,
        "A" + radius,
        radius,
        0,
        cutMethod1,
        cutMethod2,
        endPoint
    ].join(" ");

}