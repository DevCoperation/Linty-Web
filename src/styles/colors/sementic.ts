import {pallete} from "src/styles/colors/pallete";

export const sementic = {
    Primary: {
        Normal: "#5C6BC0",
        AlterNative: "#949ED5",
        Assistive: "#BCC2E5",
    },
    Secondary: {
        Normal: pallete.Blue["70"],
        AlterNative: "#83C3F8",
        Assistive: "#CCE4FE",
    },
    Label: {
        Normal: pallete.Neutral["5"],
        Strong: pallete.Common["100"],
        Neutral: pallete.Neutral["25"],
        Alternative: pallete.Neutral["40"],
        Assistive: pallete.Neutral["50"],
        Disabled: pallete.Neutral["97"],
    },
    Line: {
        Normal: pallete.Neutral["90"],
        Netural: pallete.Neutral["95"],
        Alternative: pallete.Neutral["97"],
    },
    Fill: {
        Assistive: pallete.Common["0"],
        Alternative: pallete.Neutral["90"],
        Netural: pallete.Neutral["95"],
        Normal: pallete.Neutral["97"],
    },
    Background: {
        Normal: pallete.Common["0"],
        Alternative: pallete.Neutral["99"],
        Netural: pallete.Neutral["95"],
    },
    Static: {
        Black: pallete.Common["100"],
        White: pallete.Common["0"],
    },
    Elevation: {
        1: "rgba(0, 0, 0, 0.02)",
        2: "rgba(0, 0, 0, 0.04)",
        3: "rgba(0, 0, 0, 0.06)",
    },
    Status: {
        Error: pallete.Red["50"],
        Info: pallete.Blue["50"],
        Success: pallete.Green["50"],
        Warning: pallete.Yellow["50"]
    }
}