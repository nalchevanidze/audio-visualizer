import RoundStatistic2 from "./RoundStatistic2";

export default function CircleSoundForm(
    a,
    {
        w = 1,
        cx,
        cy,
        c
    }
) {
    if (a.length < 2) {
        return "";
    }

    let center = { x: cx, y: cy };
    return (
        "M" +
        RoundStatistic2(a, center, c, w).join(" ") + " " +
        RoundStatistic2(a, center, c, -w).reverse().join(" ") + "z"
    );
}