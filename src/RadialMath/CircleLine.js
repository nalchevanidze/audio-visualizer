import CirclePoint from "./CirclePoint";

export default function CircleLine(center,start,end,degre) {

    let point1 = CirclePoint ( { center , radius: start } , degre ),
        point2 = CirclePoint ( { center , radius: end } , degre );

    return point1 + " " + point2;
}
    
