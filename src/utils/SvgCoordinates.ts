export default function SvgCoordinates (svg , event ){
    let{ clientX , clientY } = event;
    let point = svg.createSVGPoint();
    point.x = clientX; 
    point.y = clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
}