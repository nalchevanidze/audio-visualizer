import CircleLine from "./CircleLine";
import ResoluteArray from "./ResoluteArray";

export default function CircleSoundForm(
    a, {
        w = 1,
        cx,
        cy,
        c
    }
) {
    if (a.length < 2) {
        return "";
    }
    

    let resolution = 200;
    let compactData = ResoluteArray(a, resolution);
    

    //let stepSize = props.width / resolution;
    let scaler = w*1.5;
    let ent = 40;
    let de = 360-2*ent;
    let stepSize = de/compactData.length;

    let center = {
        x: cx,
        y: cy
    };

    return compactData.map(

        (e, i) => "M" + CircleLine(
            center, 

            c - e*scaler , 
            c + e*scaler, 

            ent + i * stepSize
        )

    ).join(" ");
}