import CirclePoint from "./CirclePoint";

export default function RoundStatistic( 
    a,
    center,
    r,
    t,
    cut 
){

    let l=a.length-1;
    return "M"+[].map.call(a,(e,i)=>{
        let nr = r+e*t;
        let radius = nr>cut?nr:cut;
        let degre = i*360 / l ;

        return CirclePoint({center,radius},degre ); 
    
    }).join(" ")+"z";
    
}