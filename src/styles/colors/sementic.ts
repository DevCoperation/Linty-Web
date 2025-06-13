import {pallete} from "src/styles/colors/pallete";

export const sementic = {
    primary: {
        normal: "#5C6BC0",
        alterNative: "#949ED5",
        assistive: "#BCC2E5",
    },
    secondary: {
        normal: pallete.blue["70"],
        alterNative: "#83C3F8",
        assistive: "#CCE4FE",
    },
    label: {
        normal: pallete.neutral["5"],
        strong: pallete.common["100"],
        neutral: pallete.neutral["25"],
        alternative: pallete.neutral["40"],
        assistive: pallete.neutral["50"],
        disabled: pallete.neutral["97"],
    },
    line: {
        normal: pallete.neutral["90"],
        neutral: pallete.neutral["95"],
        alternative: pallete.neutral["97"],
    },
    fill: {
        assistive: pallete.common["0"],
        alternative: pallete.neutral["90"],
        neutral: pallete.neutral["95"],
        normal: pallete.neutral["97"],
    },
    background: {
        normal: pallete.common["0"],
        alternative: pallete.neutral["99"],
        neutral: pallete.neutral["95"],
    },
    static: {
        black: pallete.common["100"],
        white: pallete.common["0"],
    },
    elevation: {
        1: "rgba(0, 0, 0, 0.02)",
        2: "rgba(0, 0, 0, 0.04)",
        3: "rgba(0, 0, 0, 0.06)",
        4: "rgba(0, 0, 0, 0.08)",
        5: "rgba(0, 0, 0, 0.1)",
        6: "rgba(0, 0, 0, 0.16)",
    },
    status: {
        error: pallete.red["50"],
        info: pallete.blue["50"],
        success: pallete.green["50"],
        warning: pallete.yellow["50"]
    }
}