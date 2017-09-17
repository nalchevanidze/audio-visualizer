import CirclePoint from "./CirclePoint";
 
export default function RoundStatistic2 ( 
    a,
    center,
    r,
    t
) {
    let ent = 40;
    let de = 360-2*ent;
    let ds = ent ;
    let l = a.length ; 
    return a.map(function(e,i){
        let radius = r+e*t ;
        let degree = ds+de*i/l ;
        return CirclePoint({center,radius},degree); 
    
    });
}