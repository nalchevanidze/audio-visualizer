export default function ArcBorders(pro, ins, dif) {
    ins[0] = ins[0] < 0 ? 360 + ins[0] : ins[0];
    let i = ins || [0, 360];
    let l = i[0] - i[1];
    let p = { s: i[1], e: i[0], l: l };
    let start = p.s;
    let end = p.s + l * pro;
    if (dif){
        start = p.e;
        end = p.e - l * (1 - pro);
    }
    return { start, end };
}