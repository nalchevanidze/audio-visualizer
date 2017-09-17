import Arc from "./Arc";
import CircleLine from "./CircleLine";

export default function FilledArc(center,radiuses,start,end){

    let [r1,r2] = radiuses;
    let circle1 = { center, radius: r1 },
        circle2 = { center, radius: r2 };

    return (
        "M"+
        CircleLine(center,r1,r2,start)+" "+
        Arc( circle1 , start , end )+" L"+
        CircleLine(center,r1,r2,end)+" "+
        Arc( circle2 ,end, start )
    );
}