/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./fishData.js"

import { fish } from "./fish.js"

export const fishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = getFish()

    let fishHTMLRepresentation = "";

    for (oneThingFromTheSea of fishes) {
        fishHTMLRepresentation += fish(oneThingFromTheSea);
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    ${fishHTMLRepresentation}
    `
}