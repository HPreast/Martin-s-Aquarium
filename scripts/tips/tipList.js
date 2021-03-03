import { getTip } from "./tipData.js"
import { tip } from "./tip.js"

export const tipList = () => {
    const tips = getTip();
    const tipsElement = document.querySelector(".tipList");
    // let tipHTMLRepresentation = "";

    //     for (const aTip of tips) {
    //         tipHTMLRepresentation += tip(aTip);
    //     }
    //     tipsElement.innerHTML =+ `
    //     ${tipHTMLRepresentation}`
    // }
    tips.forEach(
        (tipString) => {
            tipsElement.innerHTML += tip(tipString)
        }
    );
};