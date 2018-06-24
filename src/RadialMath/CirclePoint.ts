export default function CirclePoint(circle, degre) {

    let {center, radius} = circle;

    let radian = degre * Math.PI / 180.0,

        x = center.x + radius * Math.cos(radian),
        y = center.y + radius * Math.sin(radian);

    return [x.toFixed(2), y.toFixed(2)];
}
