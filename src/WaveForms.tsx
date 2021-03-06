import * as React from "react";
import Circle from "./RadialMath/Circle";
import RoundStatistic from "./RadialMath/RoundStatistic";

const WaveForms = ({ cx, cy, r1, r2, r3, fr, spec }) => {

    let center = { x: cx, y: cy };

    const srstat = (freq, r, l) =>
        RoundStatistic(freq || [0, 0], center, r, l, r1);

    const arc80 = Circle({ center: { x: cx, y: cy }, radius: r1 });

    let dp = r3 - r1,
        ir = (r3 + r2) / 2,
        k = 1 / 128;

    return (
        <g className="waves prime">
            <g fillRule="evenodd" fill="#7b838a">
                <path
                    
                    d={srstat(fr, ir + 20, -k * (r3 - r2) * 3) + "  " + arc80}
                    fillOpacity={0.2}
                />
                <path
                    d={srstat(spec, r2, k * (r1 - r2)) + "  " + arc80}
                    fillOpacity={0.6}
                />
            </g>
            <circle
                cx={cx}
                cy={cy}
                r={r3}
                fill="none"
                stroke="white"
                strokeDasharray="0.5 4"
                style={{ strokeWidth: dp * 2 }}
            />
        </g>
    );

};
export default WaveForms;


