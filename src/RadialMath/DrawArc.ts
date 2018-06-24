import Arc from "./Arc";

export function DrawArcs(procent) {

    // procent must be fom 0 to 100
    let degre = 90 + procent * 3.6;

    let circle = {
        center: {
            x: 50,
            y: 50
        },
        radius: 45
    };

    return {
        visible: Arc(circle, 90, degre),
        invisible: Arc(circle, degre, 90)
    };
}
