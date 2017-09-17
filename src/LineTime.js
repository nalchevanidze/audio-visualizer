import React from "react";
import CircleLine from "./RadialMath/CircleLine";
import ArcBorders from "./RadialMath/ArcBorders";

function RoundLoading(
    center,
    radius,
    pro,
    ins,
    dif
){
    let {end} = ArcBorders(pro,ins,dif);
    return "M"+CircleLine(
        center,
        radius[0],
        radius[1],
        end
    );
}

const LineTime = ({ 
    cx, 
    cy,
    r1,
    r2,
    pro,
    inside,
    dif , 
    className , 
    id
})=> <path 
    d={ 
        RoundLoading( 
            {x:cx,y:cy} , 
            [r1,r2] ,
            pro,
            inside,
            dif
        )
    } 
    className={className} 
    id={id} 
/>;
  
export default LineTime;
