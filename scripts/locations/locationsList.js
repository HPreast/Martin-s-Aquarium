import { getLocation } from "./locationsData.js"
import { location } from "./locations.js"

export const locationList = () => {
    const locations = getLocation();
    const locationElement = document.querySelector(".locations");

    locations.forEach(
        (locationString) => {
            locationElement.innerHTML += location(locationString)
        }
    );
};