export default function LinearStatistic(a, w, height ) {
    let stepSize = w / a.length; 
    return a.map(  
        ( value , index )=> [
            index * stepSize, 
            value * height 
        ].join(" ") 
    );
}