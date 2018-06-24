export default function ResoluteArray(ARRAY, steps) {
    let out = [], d = Math.floor(ARRAY.length / steps), n = 0, v = 0;
    for (let i = 0; i < ARRAY.length; i++) {
        n++; 
        if (n > d) { 
            out.push(Math.round(v / d * 100) / 100); 
            n = 0; 
            v = 0; 
        } else { 
            v += Math.abs(ARRAY[i]); 
        }
    }
    return out;
}